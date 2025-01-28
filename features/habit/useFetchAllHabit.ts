import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useFetchAllHabit = () => {
  return useQuery({
    queryKey: ["habits"],
    queryFn: async () => {
      try {
        const response = await axiosInstance("/habit/all", {
          method: "GET",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIzQGdtYWlsLmNvbSIsImlkIjoiY2Y5Yzg3NWEtMGZiMy00YjgzLTg3OWEtOGUxZTk0ZGJhODU4IiwibmFtZSI6InVzZXIzIn0.4jKkjpTIgK-p5YagD96BEZvUx507sgdA5l42--l0Lr0`,
          },
        });
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  });
};
