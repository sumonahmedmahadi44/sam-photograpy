import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import UseAdmin from '../Hooks/UseAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const {isAdmin,isAdminLoading} = UseAdmin();
    const location = useLocation();
    if(loading || isAdminLoading){
        <div className='text-center'><div><progress className="progress progress-primary w-56" value="0" max="100"></progress></div>
        <div><progress className="progress progress-secondary w-56" value="10" max="100"></progress></div>
        <div><progress className="progress progress-success w-56" value="40" max="100"></progress></div>
        <div><progress className="progress progress-accent w-56" value="70" max="100"></progress></div>
        <div><progress className="progress progress-secondary w-56" value="100" max="100"></progress></div></div>

        if(user && isAdmin){
            return children
        }
    }
    return <Navigate to='/' state={{from:location}}replace></Navigate>
};

export default AdminRoute;