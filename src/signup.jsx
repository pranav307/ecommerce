import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"; // Corrected import (useForm should be destructured from react-hook-form)
import Input from "./inputcom";
import Button from "./button";

const Signup = () => {
  // const navigate = useNavigate();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  //write function to signup
  const create = (data) => {
    console.log(data); // This will log the form data. Replace this with signup functionality.
    // Add the signup functionality here
    // If signup is successful, navigate to the desired route
    // e.g., navigate("/dashboard");
  };

  return (
    <div className="signupstyle">
      <h2 className="signtext"> signUp to create account</h2>
      <div className="logntext">
        Already have account?&nbsp;
        <Link to="/login">Signin</Link>
      </div>
      <form onSubmit={handleSubmit(create)}>
        <div className="inputemail">
          <Input
            label="Full Name"
            placeholder="Enter your full name"
            {...register("name", {
              required: true,
            })}
          />
          <Input
            label="Email:"
            placeholder="enter your email"
            type="email"
            {...register("email", {
              required: true,
              validate: {
                matchPattern: (value) => {
                  return (
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                      value
                    ) || "Email address must be valid"
                  );
                },
              },
            })}
          />
          <Input
            label="password:"
            type="password"
            placeholder="enter your password"
            {...register("password", {
              required: true,
            })}
          />
          <Button type="submit" className="createacc">
            Create Account
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
