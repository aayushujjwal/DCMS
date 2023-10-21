import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./LoginValidation";
import axios from 'axios';
import './Styles/LoginSignupPage.css';

function LoginPage() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.email !== "" && errors.password !== ""){
      const details = {"email": values.email[0], "password": values.password[0]} 
      axios.post('http://localhost:8081/login', details)
      .then(res => {
        if(res.data === "Success"){
          navigate('/events');
        } else {
          alert("No record exists");
        }
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="outer">
      <div className="bg-white p-3 rounded w-25">
        <h2>Log IN</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="Email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.email && (
              <span className="text-danger"> {errors.email}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="Password">
              <strong>Password</strong>
            </label>
            <input
              type="Password"
              placeholder="Enter Password"
              name="password"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.password && (
              <span className="text-danger"> {errors.password}</span>
            )}
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            <strong>Log IN</strong>
          </button>
          <p>T&C</p>
          <Link
            to="/signup"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Sign UP
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
