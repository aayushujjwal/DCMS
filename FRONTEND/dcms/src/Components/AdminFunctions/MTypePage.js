import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function MTypePage() {
  const [mtype, setMType] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/mtype')
      .then(res => setMType(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/mtype/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <Link to='/insertmtype' className='btn btn-success'>Add+</Link>
        <table className='table'>
          <thead>
            <tr>
              <th>Level</th>
              <th>Price</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              mtype.map((data, i) => (
                <tr key={i}>
                  <td>{data.MEM_LEVEL}</td>
                  <td>{data.PRICE}</td>
                  <td>{data.DURATION}</td>
                  <td>
                    <Link to={`/updatemtype/${data.MEM_LEVEL}`} className='btn btn-primary'>Update</Link>
                    <button className='btn btn-danger ms-2' onClick={e => handleDelete(data.MEM_LEVEL)}>Delete</button>
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

export default MTypePage;
