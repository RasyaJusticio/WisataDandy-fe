import { fetcher } from "@/src/services/fetcher";
import useSWR from "swr";
import { z } from "zod";

const url = "http://127.0.0.1:8000/api/v1/facility";

const schema = z.object({
  id: z.number(),
  name: z.string(),
});

const resSchema = z.array(schema);

const service = {
  useFacility: () => {
    const { data, error, isLoading, mutate } = useSWR(`${url}`, fetcher, {
      revalidateOnMount: true,
    });

    if (!data || !data.data) {
      return {
        data: null,
        rawData: null,
        error,
        isLoading,
        mutate,
      };
    }

    const parseResult = resSchema.safeParse(data.data);

    return {
      data: parseResult.data,
      rawData: data,
      error,
      isLoading,
      mutate,
    };
  },
};

export default service;
