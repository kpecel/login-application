import React, { useEffect } from "react";
import AvatarImage from "../../../assets/image/img_avatar.png";
import { useForm } from "react-hook-form";

import * as authService from "../../service/authService";

const LoginForm = () => {
  const {
    register,
    formState: { errors },
    setValue,
    clearErrors,
    handleSubmit,
  } = useForm();

  const formBuilder = () => {
    register("email", { required: true });
    register("password", { required: true });
  };

  const onSubmit = (data) => {
    authService.login(data).then((response) => {
      if (response.data && response.status == "success") {
        alert(response.message);
      } else {
        alert(response.message);
      }
    });
  };

  const handleInputChange = (e, field) => {
    let value = e.target ? e.target.value : e;
    if ((e.target ? e.target.validity.valid : e) || value === "") {
      setValue(field, value);
      clearErrors(field);
    }
  };

  useEffect(() => {
    formBuilder();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="imgcontainer">
          <img src={AvatarImage} alt="AvatarImage" className="avatar" />
        </div>

        <div className="container d-flex flex-direction-column">
          <label for="username">
            <b>Username</b>
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter username"
            onChange={(e) => handleInputChange(e, "email")}
            // required
          />
          {errors.email && (
            <span className="error_message">* Email is required</span>
          )}
          <br />
          <label for="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            onChange={(e) => handleInputChange(e, "password")}
            // required
          />
          {errors.password && (
            <span className="error_message">* Password is required</span>
          )}
          <button type="submit">Login</button>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
        </div>
        <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
          <button type="button" className="cancelbtn">
            Cancel
          </button>

          <span className="psw">
            <a href="#">Forgot Password?</a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
