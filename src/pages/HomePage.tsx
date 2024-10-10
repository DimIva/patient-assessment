import { Link } from "react-router-dom"
import { useMockData } from '../hooks/useMockData';

export const HomePage: React.FC = () => {
  const { data, error, isLoading } = useMockData();
  if (isLoading) return <div>Loading...</div>; // Loading state
  if (error) return <div>Error loading data: {error.message}</div>; // Error state

  return (
    <div>
      <h1>Mock Data</h1>
      <ul>
        {data?.map((item: {
          id: number;
          cognitiveStatus: string;
          applicableMeasures: string;
          patient: string;
        }) => (
          <li key={item.id}>
            {item.cognitiveStatus}: {item.applicableMeasures}
          </li>
        ))}
      </ul>
      <Link to={'../assessment'}>New Assessment</Link>
    </div>
    
  )
}