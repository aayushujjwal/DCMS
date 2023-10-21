import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function UsersPage() {

    const [users, setUsers] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8081/login')
        .then(res => setUsers(res.data))
        .catch(err => console.log(err));
    }, [])

    const handleDelete = async(id) => {
        try {
            await axios.delete(`http://localhost:8081/users/${id}`);
            window.location.reload(); 
        } catch (error) {
            console.log(error);
        }
    }   

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            
            <table className='table'>
                <thead>
                    <tr>
                        <th>USER_ID</th>
                        <th>USERNAME</th>
                        <th>PASSOWRD</th>
                        <th>EMAIL</th>
                        <th>PHONE_NO</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((data, i) =>(
                            <tr key={i}>
                                <td>{data.USER_ID}</td>
                                <td>{data.USERNAME}</td>
                                <td>{data.PASSWORD}</td>
                                <td>{data.EMAIL}</td>
                                <td>{data.PHONE_NO}</td>
                                <td>
                                    {/* <Link to = {`/updatemtype/${data.USER_ID}`} className='btn btn-primary'>Update</Link> */}
                                    <button className='btn btn-danger ms-2' onClick={e => handleDelete(data.USER_ID)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Link to='/adminfunctions' className='btn btn-primary' style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
          Go Back to Admin Functions
        </Link>
        </div>
    </div>
    
  )
}

export default UsersPage;