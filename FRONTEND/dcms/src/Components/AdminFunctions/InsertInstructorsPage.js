import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';


function InsertInstructorsPage() {
    const [name, setName] = useState('')
    const [expertise, setExpertise] = useState('')
    const [join_date, setJoin_date] = useState('')
    const [phone_no, setPhone_no] = useState('')    
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/insertinstructors', {name, expertise, join_date, phone_no})
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
                <h2>Add Instructors</h2>
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
                <button className='btn btn-success'>Submit</button>           
            </form>
            </div>   
    </div> 
    </>           
  )
}

export default InsertInstructorsPage;