import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function MembersPage() {
  const [members, setMembers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/members?search=${searchQuery}`);
      setMembers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/members/${id}`);
      fetchMembers(); // Refresh members after deletion
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = () => {
    fetchMembers();
  };

  const handleShowAll = () => {
    setSearchQuery('');
    fetchMembers();
  }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
      <div className='d-flex justify-content-between align-items-center'>
        <Link to='/insertmembers' className='btn btn-success'>
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
              <th>MEMBER_ID</th>
              <th>NAME</th>
              <th>JOIN_DATE</th>
              <th>MEMBERSHIP_TYPE</th>
              <th>PHONE_NO</th>
            </tr>
          </thead>
          <tbody>
            {members.map((data, i) => (
              <tr key={i}>
                <td>{data.MEMBER_ID}</td>
                <td>{data.NAME}</td>
                <td>{new Date(data.JOIN_DATE).toLocaleDateString('en-US')}</td>
                <td>{data.MSHIP_TYPE}</td>
                <td>{data.PHONE_NO}</td>
                <td>
                  <Link to={`/updatemembers/${data.MEMBER_ID}`} className='btn btn-primary'>
                    Update
                  </Link>
                  <button className='btn btn-danger ms-2' onClick={() => handleDelete(data.MEMBER_ID)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to='/adminfunctions' className='btn btn-primary' style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
          Go Back to Admin Functions
        </Link>
      </div>
    </div>
  );
}

export default MembersPage;
