import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {IData, mockData as initialData } from '../assets/mockData';

// Create a mutable copy of the initial mock data
const mockData = [...initialData]; 

// Function to fetch mock data, simulating a server call
const fetchMockData = async (): Promise<IData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData); // Resolve with the current mock data
    }, 1000); // Simulated delay
  });
};

// Function to add new item to the mock data
const addMockData = async (newItem: { id: number; cognitiveStatus: string; applicableMeasures: string, patient: string }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      mockData.push({ ...newItem });
      resolve(newItem);
    }, 500);
  });
};

export const useMockData = () => {
  const queryClient = useQueryClient(); // Get the query client for managing queries

  // Use the useQuery hook to fetch mock data
  const { data, error, isLoading } = useQuery({queryKey: ['mockData'], queryFn: fetchMockData});

  // Set up a mutation for adding new mock data
  const mutation = useMutation({
    mutationFn:addMockData, 
    // On success, invalidate the query to refetch the data
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['mockData'] });
    },
  });

  return { data, error, isLoading, addMockData: mutation.mutate }; // Return data, error, loading state, and the add function
};
