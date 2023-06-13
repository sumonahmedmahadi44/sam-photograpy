import { useQuery } from "@tanstack/react-query";

const UseClasses = () => {
  const {
    data: classes = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await fetch(
        "https://sam-photgrapy-server.vercel.app/classes"
      );
      return res.json();
    },
  });

  return [classes, loading, refetch];
};

export default UseClasses;
