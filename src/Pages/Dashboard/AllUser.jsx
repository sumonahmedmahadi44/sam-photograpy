import { useQuery } from '@tanstack/react-query';
import { FaUserShield, FaChalkboardTeacher } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUser = () => {
    const {data:users=[],refetch}= useQuery(['users'],async()=>{
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    // const [users, setUsers] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/users')
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data)
    //             setUsers(data)
    //         })
    // }, [users])


    const handleMakeAdmin = user => {
        // console.log('hello')
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
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
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
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
                            <th>#</th>
                            <th>Users Name</th>
                            <th>Users Email</th>
                            <th>Make Admin</th>
                            <th>Make  Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role === 'admin' ? 'admin' :
                                        <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-teal-500  text-white"><FaUserShield></FaUserShield></button>
                                    }</td>
                                    <td>{user.role === 'instructor' ? 'instructor' :
                                        <button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost bg-teal-500  text-white"><FaChalkboardTeacher></FaChalkboardTeacher></button>
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