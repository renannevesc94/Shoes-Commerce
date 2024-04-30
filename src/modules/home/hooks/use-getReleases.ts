import { useQuery } from "@tanstack/react-query";
import { getReleases } from "../../../services";

export const useGetReleases = () => {
  return useQuery({
    queryKey: ["RELEASES"],
    queryFn: async () => {
      const { data } = await getReleases();
      return data;
    },
  });
};
