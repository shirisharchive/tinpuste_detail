import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../config/api';

type TinpusteRecord = {
  id: number;
  name: string;
  date_of_birth: string;
  father_name: string;
  mother_name: string;
  grandfather_name: string;
  grandmother_name: string;
};

const Get_Tinpuste = () => {
  const [records, setRecords] = useState<TinpusteRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const loadRecords = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/tinpustes`);
        const contentType = response.headers.get('content-type') ?? '';
        const data = contentType.includes('application/json')
          ? await response.json()
          : await response.text();

        if (!response.ok) {
          throw new Error(typeof data === 'string' ? data : data?.message || 'Failed to load records');
        }

        setRecords(data);
      } catch (error) {
        setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
      } finally {
        setIsLoading(false);
      }
    };

    loadRecords();
  }, []);

  if (isLoading) {
    return <div>Loading records...</div>;
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  return (
    <div>
      <h1>Tinpuste records</h1>
      {records.length === 0 ? (
        <p>No records found.</p>
      ) : (
        <ul>
          {records.map((record) => (
            <li key={record.id}>
              {record.name} | {record.date_of_birth} | {record.father_name} | {record.mother_name} | {record.grandfather_name} | {record.grandmother_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Get_Tinpuste;