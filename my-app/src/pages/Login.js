import {useState} from 'react';
import {NameContext} from '../App';
import {useContext} from 'react';


function Login() {

  const userNameState = useContext(NameContext);
  const setUserName = userNameState[1];


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
  const {email,password} = formData; 
  //similar to:
  // const fullname = formData.email;
  // const description = formData.password;
  /*place to input validation*/
  return email&&password;
}
  // this function purpose is to send the form data to DB etc..
  const onSubmit = (e) => {
    e.preventDefault();
    //The Object.fromEntries() method transforms a list of key-value pairs into an object. 
    // convert [["a",1],["b,2"]] to {a:1,b:2}
    //the FormData() method take an argument of form element and take all the fileds inside it and store them as key value. according to the name propery and the value.
    const formData = Object.fromEntries(new FormData(e.target));
    setUserName(formData);
    console.log(formData);
  };
  
  
  
  return (
    
      <div className="login">
        <h1>welcome to our site:</h1>
      <form onSubmit={(onSubmit)}>
      <h3>Login:</h3>
        <span>enter email: </span>
        <input
          name="email"
          type="text"
          placeholder="email"
          onChange={onChangeHandler}
        />
        <br />
        <br />
        <span>enter password: </span>
        <input
          name="password"
          placeholder="password"
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
