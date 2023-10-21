import React, { useState } from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from 'axios';

function UpdateMembersPage() {
    const [name, setName] = useState('')
    const [join_date, setJoin_Date] = useState('')
    const [mship_type, setMship_Type] = useState('')
    const [phone_no, setPhone_no] = useState('')   
    const {id} = useParams();
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.put(`http://localhost:8081/updatemembers/${id}`, {name, join_date, mship_type, phone_no})
        .then(res => {
            console.log(res);
            navigate('/members')
        }) .catch(err => console.log(err));
    }
        

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Update Members</h2>
                <div className='mb-2'>
                    <label htmlFor="">Name</label>
                    <input type='text' placeholder='Enter Name' className='form-control'
                    onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Join-Date</label>
                    <input type='date' placeholder='Enter Join-Date' className='form-control' 
                    onChange = {e => setJoin_Date(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Membership_Type</label>
                    <input type='number' placeholder='Enter Membership_Type' className='form-control' 
                    onChange = {e => setMship_Type(e.target.value)} 
                    />
                </div>  
                <div className='mb-2'>
                    <label htmlFor="">Phone_No</label>
                    <input type='text' placeholder='Enter Phone No' className='form-control' 
                    onChange = {e => setPhone_no(e.target.value)} 
                    />
                </div> 
                <button className='btn btn-success'>Update</button>           
            </form>
            </div>   
    </div>            
  )
}

export default UpdateMembersPage;