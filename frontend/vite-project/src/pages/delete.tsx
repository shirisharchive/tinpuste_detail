import { useState } from "react";
import { API_BASE_URL } from "../config/api";
import { Button } from "../components/button";

export const Delete_tinpuste = () => {
  const [id, setId] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!id.trim()) {
      setStatusMessage("Please enter a record id.");
      return;
    }

    setIsDeleting(true);
    setStatusMessage("");

    try {
      const response = await fetch(`${API_BASE_URL}/tinpustes/${id.trim()}`, {
        method: "DELETE",
      });

      const contentType = response.headers.get("content-type") ?? "";
      const data = contentType.includes("application/json")
        ? await response.json()
        : await response.text();

      if (!response.ok) {
        const message = typeof data === "string" ? data : data?.message || "Failed to delete tinpuste";
        throw new Error(message);
      }

      setStatusMessage("Record deleted successfully.");
      setId("");
    } catch (error) {
      setStatusMessage(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div>
      <h1>Delete Tinpuste</h1>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter record id"
      />
      <Button
        title={isDeleting ? "Deleting..." : "Delete"}
        onClick={handleDelete}
        type="button"
      />
      {statusMessage ? <p>{statusMessage}</p> : null}
    </div>
  );
};

