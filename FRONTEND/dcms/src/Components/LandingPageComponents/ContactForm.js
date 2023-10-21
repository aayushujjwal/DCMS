// ContactForm.js
import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./ContactUsValidation";
import axios from 'axios';
import '../Styles/LandingPageComponents/ContactUs.css'

function ContactForm() {
    const [values, setValues] = useState({
      name: "",
      email: "",
      message: "",
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
    if(errors.name === "" && errors.email === "" && errors.message === ""){
      axios.post('http://localhost:8081/contact', values)
      .then(res => {
        navigate('/');
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="outer">
      <div className="bg-white p-3 rounded w-25">
        <h2>Contact Us</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
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
            <label htmlFor="Message">
              <strong>Message</strong>
            </label>
            <input
              type="text"
              placeholder="Enter your message"
              name="message"
              onChange={handleInput}
              className="form-control rounded-0"
            />
             {errors.password && (
              <span className="text-danger"> {errors.message}</span>
            )}
          </div>
          <button  type="submit" className="btn btn-success w-100 rounded-0">
            <strong>Send</strong>
          </button>
          <p>T&C</p>
          <Link
            to="/"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Home
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
