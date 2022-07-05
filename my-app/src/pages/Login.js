import {useState} from 'react';
import {NameContext} from '../App';
import {useContext} from 'react';
import {useEffect} from 'react';

function Login() {

  const [userName,setUserName] = useContext(NameContext);
  // const [setUserName,userName] = userNameState;

  useEffect(() => {
    fetch('http://localhost:3001/api/users/login',
    {
      method: "POST",
      body: JSON.stringify({name: userName.userName, password: userName.password}),
      headers: {
        'Content-Type': 'application/json',
      }
    })
        .then(response => response.json())
        .then(response => {
             console.log(response)})
        .catch(err => console.error(err));
},[userName])


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
  const onSubmit = (e) => {
    e.preventDefault();
    //The Object.fromEntries() method transforms a list of key-value pairs into an object. 
    // convert [["a",1],["b,2"]] to {a:1,b:2}
    //the FormData() method take an argument of form element and take all the fileds inside it and store them as key value. according to the name propery and the value.
    const formDataObj = Object.fromEntries(new FormData(e.target));
    setUserName(formDataObj);
    console.log(formDataObj);
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
