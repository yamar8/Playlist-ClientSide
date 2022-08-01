import Main from "../pages/Main";
import Header from "../pages/Header";
import { useEffect,useState } from "react";

function Layout({setIsLogged}){

  const [user,setUser] = useState('');



  useEffect(()=>{
    const URL = 'http://localhost:3002/api/users/user-details';
    const INIT = {method: 'GET',headers:{Authorization: 'bearer: ' + localStorage.atLogin}}

    async function fetchData(){
      try{
       const response =  await fetch(URL,INIT);
       if(!response.ok){
         throw new Error(`HTTP error! status: ${response.statusText}`);
        }
        console.log("response.ok: ", response.ok)
       const data = await response.json();
       console.log(data);
       setUser(data);
       
      }catch(error){
        localStorage.clear();
        console.log(error);
      }
    }
    fetchData();
  },[])

    return <div>  
    <Header userName={user.firstName} />
      <Main />
      </div>
}


export default Layout;