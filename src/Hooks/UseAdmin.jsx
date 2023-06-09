import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Provider/AuthProvider';
import UseAxios from './UseAxios';

const UseAdmin = () => {
  const {user,loading} =useContext(AuthContext) ;
  const [axiosSecure] = UseAxios();
  const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
    queryKey: ['isAdmin', user?.email],
    queryFn: async ()=>{
        const res = await axiosSecure.get(`/users/admin/${user?.email}`);
        console.log('is admin', res)
        return res.data.admin
    }
  })
  return [isAdmin,isAdminLoading]
};

export default UseAdmin;