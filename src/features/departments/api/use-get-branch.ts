import { InferResponseType } from "hono";
import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono";

export type ResponseType = InferResponseType<
  (typeof client.api.branch)[":id"]["$get"],
  200
>;

export const useGetBranch = (id: string) => {
  const query = useQuery({
    enabled: !!id,
    queryKey: ["branch", { id }],
    queryFn: async () => {
      const response = await client.api.branch[":id"].$get({
        param: {
          id,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch department");
      }

      const { ...data } = await response.json();
      return data;
    },
  });

  return query;
};
