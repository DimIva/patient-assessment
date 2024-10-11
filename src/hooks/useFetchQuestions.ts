import { useQuery } from "@tanstack/react-query";
import { fetchQuestions, Question } from "../assets/assetsData";

export const useFetchQuestions = () => {
  return useQuery<Question[], Error>({
    queryKey: ['questions'],
    queryFn: fetchQuestions,
  });
};