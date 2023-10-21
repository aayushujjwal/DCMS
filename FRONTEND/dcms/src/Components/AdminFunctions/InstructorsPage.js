import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


function InstructorsPage() {

    const [instructors, setInstructors] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchInstructors();
      }, []);
    
      const fetchInstructors = async () => {
        try {
          const response = await axios.get(`http://localhost:8081/instructors?search=${searchQuery}`);
          setInstructors(response.data);
        } catch (error) {
          console.log(error);
        }
      };

    const handleDelete = async(id) => {
        try {
            await axios.delete(`http://localhost:8081/instructors/${id}`);
            window.location.reload(); 
        } catch (error) {
            console.log(error);
        }
    }  

    const handleSearch = () => {
        fetchInstructors();
      };
    
      const handleShowAll = () => {
        setSearchQuery('');
        fetchInstructors();
      }

  return (
    <>
    
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
      <div className='d-flex justify-content-between align-items-center'>
        <Link to='/insertinstructors' className='btn btn-success'>
          Add+
        </Link>
        <button className='btn btn-primary' onClick={handleShowAll}>
            Show All
          </button>
          </div>
        <div className='d-flex align-items-center mt-3'>
          <input
            type='text'
            placeholder='Search by name'
            className='form-control me-2'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
         
          <button className='btn btn-primary' onClick={handleSearch}>
            Search
          </button>
        </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>INSTRUCTOR_ID</th>
                        <th>NAME</th>
                        <th>EXPERTISE</th>
                        <th>JOIN_DATE</th>
                        <th>PHONE_NO</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        instructors.map((data, i) =>(
                            <tr key={i}>
                                <td>{data.INSTRUCTORS_ID}</td>
                                <td>{data.NAME}</td>
                                <td>{data.EXPERTISE}</td>
                                <td>{new Date(data.JOIN_DATE).toLocaleDateString('en-US')}</td>
                                <td>{data.PHONE_NO}</td>
                                <td>
                                    <Link to = {`/updateinstructors/${data.INSTRUCTORS_ID}`} className='btn btn-primary'>Update</Link>
                                    <button className='btn btn-danger ms-2' onClick={e => handleDelete(data.INSTRUCTORS_ID)}>Delete</button>
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
    </>
  )
}

export default InstructorsPage;