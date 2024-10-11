import { useQuery } from "@tanstack/react-query";
import { fetchQuestions } from "../assets/assetsData";

export const useFetchQuestions = () => {
  return useQuery({
    queryKey: ['questions'],
    queryFn: fetchQuestions,
  });
};