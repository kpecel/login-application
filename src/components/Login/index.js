import React from "react";
import AvatarImage from "../../assets/image/img_avatar.png";

const LoginForm = () => {
  return (
    <div>
      <form>
        <div className="imgcontainer">
          <img src={AvatarImage} alt="AvatarImage" className="avatar" />
        </div>

        <div className="container d-flex flex-direction-column">
          <label for="username">
            <b>Username</b>
          </label>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            required
          />
          <label for="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            required
          />
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
          cld
          <span className="psw">
            <a href="#">Forgot Password?</a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
