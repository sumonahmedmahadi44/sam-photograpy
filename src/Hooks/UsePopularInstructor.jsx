import { useQuery } from '@tanstack/react-query';
import React from 'react';

const UsePopularInstructor = () => {
    const {
        data: instructor = [],
        isLoading: loading,
        refetch,
      } = useQuery({
        queryKey: ["instructor"],
        queryFn: async () => {
          const res = await fetch(
            "https://sam-photgrapy-server-sumonahmedmahadi44.vercel.app/instructor"
          );
          return res.json();
        },
      });
    
      return [instructor, loading, refetch];
};

export default UsePopularInstructor;