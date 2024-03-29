import { useState } from "react";
import { NameContext } from "../../App"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Login({ setIsLogged }) {
  const [userName, setUserName] = useContext(NameContext);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  const onChangeHandler = (e) => {
    let name = e.target.name; // taking the name of each input.
    let value = e.target.value; // taking the value of each input.
    setFormData((currentData) => {
      return {
        ...currentData, // extract the key:value from the object
        [name]: value, // [name] is the generic key of each input name property
      };
    });
  };

  const isValid = () => {
    const { email, password } = formData;
    //similar to:
    // const fullname = formData.email;
    // const description = formData.password;
    /*place to input validation*/
    return email && password;
  };
  // this function purpose is to send the form data to DB etc..
  const onSubmit = async (e) => {
    e.preventDefault();

    const reqData = JSON.stringify(Object.fromEntries(new FormData(e.target)));
    try {
      const response = await fetch("http://localhost:3002/api/users/login", {
        method: "POST",
        body: reqData,
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.statusText}`);
      }
      const data = await response.json();
      localStorage.atLogin = data.token;
      setIsLogged(localStorage.atLogin);
      //  navigate('/searchSong');
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-inner-box">
          <div className = "login-header">
          <h1>Welcome to your Playlist:</h1>
          </div>
          <div className = 'login-footer'>
          <form className="login-form" onSubmit={onSubmit}>
            <h3>Login:</h3>
            <label>User Name: </label>
            <input
              name="email"
              type="text"
              placeholder="Email"
              onChange={onChangeHandler}
            />
            <br />
            <br />
            <label>Password: </label>
            <input
              name="password"
              placeholder="Password"
              onChange={onChangeHandler}
            />
            <br />
            <br />

            <button disabled={!isValid()} id="submit" type="submit">
              submit
            </button>
          </form>
          </div>
          {/* JSON.stringify converts a JavaScript object or value to a JSON string. (will remove it from the code)*/}
          {/* {JSON.stringify(formData)} */}
        </div>
      </div>
    </div>
  );
}

export default Login;
