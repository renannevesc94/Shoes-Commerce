import { useQuery } from "@tanstack/react-query";
import { getNovelties } from "../../../services";

export const useGetNovelties = () => {
  return useQuery({
    queryKey: ["NOVIDADES"],
    queryFn: async () => {
      const { data } = await getNovelties();
      return data;
    },
  });
};
