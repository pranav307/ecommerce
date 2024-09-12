import React from "react";
import Input from "./inputcom";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"; // Import useForm from react-hook-form
import Button from "./button"; // Assuming you have a Button component

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const login = async (data) => {
    console.log(data);
    // Write authentication logic here
    // After successful login, you can navigate to another page, e.g., navigate("/dashboard");
  };

  return (
    <div className="loginstyle">
      <h2 className="signintext">Sign in to your Account</h2>
      <p className="signuptext">
        Don&apos;t have an account?&nbsp;
        <Link to="/signUp" className="sign">
          Sign Up
        </Link>
      </p>
      <div className="formlogin">
        <form onSubmit={handleSubmit(login)}>
          <Input
            label="Email:"
            placeholder="Enter your email"
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
            label="Password:"
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: true,
            })}
          />
          <Button type="submit" className="createacc">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
