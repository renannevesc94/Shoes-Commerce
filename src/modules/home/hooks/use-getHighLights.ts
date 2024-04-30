import { useQuery } from "@tanstack/react-query";
import { getHighLights } from "../../../services";

export const useGetHighLights = () => {
  return useQuery({
    queryKey: ["HIGHLIGHTS"],
    queryFn: async () => {
      const { data } = await getHighLights();
      return data;
    },
  });
};
