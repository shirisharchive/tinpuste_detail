import { useState } from "react";
import { API_BASE_URL } from "../config/api";
import { Button } from "../components/button";

export const Update_tinpuste = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [motherName, setMotherName] = useState("");
    const [grandfatherName, setGrandfatherName] = useState("");
    const [grandmotherName, setGrandmotherName] = useState("");
    const [statusMessage, setStatusMessage] = useState("");
    const [isUpdating, setIsUpdating] = useState(false);

    const handleUpdate = async () => {
        if (!id.trim()) {
            setStatusMessage("Please enter a record id.");
            return;
        }

        setIsUpdating(true);
        setStatusMessage("");

        const payload = {
            name,
            date_of_birth: dateOfBirth,
            father_name: fatherName,
            mother_name: motherName,
            grandfather_name: grandfatherName,
            grandmother_name: grandmotherName,
        };

        try {
            const response = await fetch(`${API_BASE_URL}/tinpustes/${id.trim()}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const contentType = response.headers.get("content-type") ?? "";
            const data = contentType.includes("application/json")
                ? await response.json()
                : await response.text();

            if (!response.ok) {
                const message = typeof data === "string" ? data : data?.details?.join(", ") || data?.message || "Failed to update tinpuste";
                throw new Error(message);
            }

            setStatusMessage("Record updated successfully.");
        } catch (error) {
            setStatusMessage(error instanceof Error ? error.message : "Something went wrong");
        } finally {
            setIsUpdating(false);
        }
    };

    return (
        <div>
            <h1>Update Tinpuste</h1>
            <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Enter record id"
            />
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
            />
            <input
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                placeholder="Date of birth"
            />
            <input
                type="text"
                value={fatherName}
                onChange={(e) => setFatherName(e.target.value)}
                placeholder="Father name"
            />
            <input
                type="text"
                value={motherName}
                onChange={(e) => setMotherName(e.target.value)}
                placeholder="Mother name"
            />
            <input
                type="text"
                value={grandfatherName}
                onChange={(e) => setGrandfatherName(e.target.value)}
                placeholder="Grandfather name"
            />
            <input
                type="text"
                value={grandmotherName}
                onChange={(e) => setGrandmotherName(e.target.value)}
                placeholder="Grandmother name"
            />
            <Button
                title={isUpdating ? "Updating..." : "Update"}
                onClick={handleUpdate}
                type="button"
            />
            {statusMessage ? <p>{statusMessage}</p> : null}
        </div>
    );
};