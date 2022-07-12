import {useState} from 'react';
import {NameContext} from '../App';
import {useContext} from 'react';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom'

function Login({setIsLogged}) {

  const [userName,setUserName] = useContext(NameContext);
  
  const navigate = useNavigate();

  const [formData,setFormData] = useState({});
  const onChangeHandler = (e)=>{
    let name = e.target.name; // taking the name of each input.
    let value = e.target.value; // taking the value of each input.
    setFormData((currentData)=>{
      return{
        ...currentData, // extract the key:value from the object
        [name]: value, // [name] is the generic key of each input name property
      }
    })
  }
  
const isValid = ()=>{
  const {userName,password} = formData; 
  //similar to:
  // const fullname = formData.email;
  // const description = formData.password;
  /*place to input validation*/
  return userName&&password;
}
  // this function purpose is to send the form data to DB etc..
  const onSubmit = async (e) => {
   
    e.preventDefault();
    const formDataObj = Object.fromEntries(new FormData(e.target));
    setUserName(formDataObj);
    console.log(formDataObj);

    try{
       const response = await fetch('http://localhost:3002/api/users/login',
      {
       method: "POST",
       body: JSON.stringify({email: userName.userName, password: userName.password}),
       headers: {'Content-Type': 'application/json'}
      });
      if(!response.ok){
        throw new Error(`HTTP error! status: ${response.statusText}`);
      }
     const data = await response.json();
     localStorage.atLogin = data.token;
     setIsLogged(localStorage.atLogin);
     navigate('/searchSong');
   }catch(e){
     alert(e);
   }

  };
  
  
  
  return (
    
      <div className="login">
        <h1>Welcome to your Playlist:</h1>
      <form onSubmit={(onSubmit)}>
      <h3>Login:</h3>
        <span>Enter User Name: </span>
        <input
          name="userName"
          type="text"
          placeholder="User Name"
          onChange={onChangeHandler}
        />
        <br />
        <br />
        <span>Enter Password: </span>
        <input
          name="password"
          placeholder="Password"
          onChange={onChangeHandler}
        />
        <br />
        <br />

        <button disabled={!isValid()} id="submit" type="submit">submit</button>
      </form>
      {/* JSON.stringify converts a JavaScript object or value to a JSON string. (will remove it from the code)*/}
      {/* {JSON.stringify(formData)} */}
    </div>
  );
}

export default Login;
