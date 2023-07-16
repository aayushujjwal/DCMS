import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./SignupValidation";
import axios from 'axios';

function SignupPage() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
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
    if(errors.name === "" && errors.email === "" && errors.password === "" && errors.phone === ""){
      axios.post('http://localhost:8081/signup', values)
      .then(res => {
        navigate('/login');
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Sign UP</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="Username">
              <strong>Username</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="name"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.name && (
              <span className="text-danger"> {errors.name}</span>
            )}
          </div>
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
          <div className="mb-3">
            <label htmlFor="PhoneNo">
              <strong>PhoneNo</strong>
            </label>
            <input
              type="tel"
              placeholder="Enter PhoneNo"
              name="phone"
              onChange={handleInput}
              className="form-control rounded-0"
            />
             {errors.phone && (
              <span className="text-danger"> {errors.phone}</span>
            )}
          </div>
          <button  type="submit" className="btn btn-success w-100 rounded-0">
            <strong>Sign UP</strong>
          </button>
          <p>T&C</p>
          <Link
            to="/login"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Log IN
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
