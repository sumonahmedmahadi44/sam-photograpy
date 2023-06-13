import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Provider/AuthProvider';

const UseSelectedClass = () => {
    const {user}=useContext(AuthContext);
    const {data:selectedClass=[],isLoading:loading, refetch}=useQuery({
        queryKey:['selectedClass',user?.email],
        queryFn:async()=>{
            const res = await fetch(`https://sam-photgrapy-server.vercel.app/selectedClass?email=${user?.email}`);
            return res.json();
        }
    })
    
    return [selectedClass,loading,refetch]
};

export default UseSelectedClass;