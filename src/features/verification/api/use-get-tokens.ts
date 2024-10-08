import { InferResponseType } from "hono";
import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono";

export type ResponseType = InferResponseType<
  (typeof client.api.verificationToken)["$get"],
  200
>;

export const useGetTokens = () => {
  const query = useQuery({
    
    queryKey: ["tokens"],
    queryFn: async () => {
      const response = await client.api.verificationToken.$get();

      if (!response.ok) {
        throw new Error("Failed to fetch tokens");
      }

      const data  = await response.json();
      return {...data};
    },
  });

  return query;
};