import { useQuery } from '@tanstack/react-query';
import { FaUserShield, FaChalkboardTeacher } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUser = () => {
    const {data:users=[],refetch}= useQuery(['users'],async()=>{
        const res = await fetch('https://sam-photgrapy-server.vercel.app/users')
        return res.json();
    })

    // const [users, setUsers] = useState([]);
    // useEffect(() => {
    //     fetch('https://sam-photgrapy-server.vercel.app/users')
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data)
    //             setUsers(data)
    //         })
    // }, [users])


    const handleMakeAdmin = user => {
        // console.log('hello')
        fetch(`https://sam-photgrapy-server.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'user update to admin  successfully',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    
                }
            })
    }



    const handleMakeInstructor = user => {
        // console.log('hello')
        fetch(`https://sam-photgrapy-server.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'user update to instructor  successfully',
                        showConfirmButton: false,
                        timer: 2000
                    })
                   
                }
            })
    }





    return (
        <div className="w-full">
            <div className="overflow-x-auto w-full">
                <table className="table table-xs md:table-lg">
                    <thead>
                        <tr className="">
                            <th className="font-extrabold text-orange-600 text-xs">#</th>
                            <th className="font-extrabold text-orange-600 text-xs">Users Name</th>
                            <th className="font-extrabold text-orange-600 text-xs">Users Email</th>
                            <th className="font-extrabold text-orange-600 text-xs">Make Admin</th>
                            <th className="font-extrabold text-orange-600 text-xs">Make  Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <th className="font-bold">{index + 1}</th>
                                    <td className="font-bold">{user.name}</td>
                                    <td className="font-bold">{user.email}</td>
                                    <td className="font-bold">{user.role === 'admin' ? <button disabled onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-gradient-to-r from-purple-500 to-pink-500500  text-white"><FaUserShield></FaUserShield></button> :
                                        <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-gradient-to-r from-purple-500 to-pink-500500  text-white"><FaUserShield></FaUserShield></button>
                                    }</td>
                                    <td className="font-bold">{user.role === 'instructor' ? <button disabled onClick={() => handleMakeInstructor(user)} className="btn btn-ghost bg-gradient-to-r from-purple-500 to-pink-500500  text-white"><FaChalkboardTeacher></FaChalkboardTeacher></button> :
                                        <button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost bg-gradient-to-r from-purple-500 to-pink-500500  text-white"><FaChalkboardTeacher></FaChalkboardTeacher></button>
                                    }</td>
                                </tr>

                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;