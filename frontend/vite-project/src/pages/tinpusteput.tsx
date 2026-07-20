import { useState } from 'react';
import {TinpusteCompo} from '../components/tinpusteCompo';
import{ Button } from '../components/button';
import { API_BASE_URL } from '../config/api';

export const Put_Tinpuste = () => {
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    fatherName: "",
    motherName: "",
    grandfatherName: "",
    grandmotherName: "",
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatusMessage('');

    const payload = {
      name: formData.name,
      date_of_birth: formData.dateOfBirth,
      father_name: formData.fatherName,
      mother_name: formData.motherName,
      grandfather_name: formData.grandfatherName,
      grandmother_name: formData.grandmotherName,
    };

    try {
      const response = await fetch(`${API_BASE_URL}/tinpustes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const contentType = response.headers.get('content-type') ?? '';
      const data = contentType.includes('application/json')
        ? await response.json()
        : await response.text();

      if (!response.ok) {
        const message = typeof data === 'string'
          ? data
          : data?.details?.join(', ') || data?.message || 'Request failed';
        throw new Error(message);
      }

      setStatusMessage('Record saved successfully.');
      setFormData({
        name: '',
        dateOfBirth: '',
        fatherName: '',
        motherName: '',
        grandfatherName: '',
        grandmotherName: '',
      });
    } catch (error) {
      setStatusMessage(error instanceof Error ? error.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Tinpuste put</h1>
      <TinpusteCompo
        value={formData.name}
        type="text"
        id="name"
        className="form-control"
        title="name"
        onChange={handleChange("name")}
      />
      <TinpusteCompo
        value={formData.dateOfBirth}
        type="date"
        id="date-of-birth"
        className="form-control"
        title="date-of-birth"
        onChange={handleChange("dateOfBirth")}
      />
      <TinpusteCompo
        value={formData.fatherName}
        type="text"
        id="father-name"
        className="form-control"
        title="father-name"
        onChange={handleChange("fatherName")}
      />
      <TinpusteCompo
        value={formData.motherName}
        type="text"
        id="mother-name"
        className="form-control"
        title="mother-name"
        onChange={handleChange("motherName")}
      />
      <TinpusteCompo
        value={formData.grandfatherName}
        type="text"
        id="grandfather-name"
        className="form-control"
        title="grandfather-name"
        onChange={handleChange("grandfatherName")}
      />
      <TinpusteCompo
        value={formData.grandmotherName}
        type="text"
        id="grandmother-name"
        className="form-control"
        title="grandmother-name"
        onChange={handleChange("grandmotherName")}
      />

      <Button
        title={isSubmitting ? 'Submitting...' : 'Submit'}
        className="btn btn-primary"
        type="submit"
      />
      {statusMessage ? <p>{statusMessage}</p> : null}
    </form>
  );
};