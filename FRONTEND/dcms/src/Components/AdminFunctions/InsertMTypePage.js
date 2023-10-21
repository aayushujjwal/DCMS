import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';

function InsertMTypePage() {
    const [level, setLevel] = useState('')
    const [price, setPrice] = useState('')
    const [duration, setDuration] = useState('')
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/insertmtype', {level, price, duration})
        .then(res => {
            console.log(res);
            navigate('/mtype')
        }) .catch(err => console.log(err));
    }
        

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Add Membership Level</h2>
                <div className='mb-2'>
                    <label htmlFor="">Level</label>
                    <input type='number' placeholder='Enter Level' className='form-control'
                    onChange={e => setLevel(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Price (in Rupees)</label>
                    <input type='number' placeholder='Enter Price' className='form-control' 
                    onChange = {e => setPrice(e.target.value)}
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Duration (in months)</label>
                    <input type='number' placeholder='Enter Duration' className='form-control' 
                    onChange = {e => setDuration(e.target.value)} 
                    />
                </div>  
                <button className='btn btn-success'>Submit</button>           
            </form>
            </div>   
    </div>            
  )
}

export default InsertMTypePage;