import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import UseAxios from './UseAxios';

const UseInstructor = () => {
  const {user,loading} = useContext(AuthContext);
  const [axiosSecure] = UseAxios();
  const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
    queryKey: ['isInstructor', user?.email],
    enabled:!!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async ()=>{
        const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
        
        return res.data.instructor
    }
  })
  return [isInstructor,isInstructorLoading]
};

export default UseInstructor;