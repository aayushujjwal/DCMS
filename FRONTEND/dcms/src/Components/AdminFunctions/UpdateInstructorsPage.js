import React, { useState } from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from 'axios';


function UpdateInstructorsPage() {
    const [name, setName] = useState('')
    const [expertise, setExpertise] = useState('')
    const [join_date, setJoin_date] = useState('')
    const [phone_no, setPhone_no] = useState('')   
    const {id} = useParams();
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        console.log(id);
        axios.put(`http://localhost:8081/updateinstructors/${id}`, {name, expertise, join_date, phone_no})
        .then(res => {
            console.log(res);
            navigate('/instructors')
        }) .catch(err => console.log(err));
    }
        

  return (
    <>
    
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Update Instructors</h2>
                <div className='mb-2'>
                    <label htmlFor="">Name</label>
                    <input type='text' placeholder='Enter Name' className='form-control'
                    onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Expertise</label>
                    <input type='text' placeholder='Enter Expertise' className='form-control' 
                    onChange = {e => setExpertise(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Join-Date</label>
                    <input type='date' placeholder='Enter Joining-Date' className='form-control' 
                    onChange = {e => setJoin_date(e.target.value)} 
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
    </>           
  )
}

export default UpdateInstructorsPage;