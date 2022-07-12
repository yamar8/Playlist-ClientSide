import "./App.css";
import Login from "./pages/Login";
import {useState, createContext} from 'react';
import Layout from "./components/Layout";

export const NameContext = createContext(); 

function App() {
  const userNameState = useState("");
  const [isLogged, setIsLogged] = useState(localStorage.atLogin)


  return (
    <div className="App">
    <NameContext.Provider value = {userNameState}>
    {isLogged ?
      <Layout setIsLogged = {setIsLogged}/> :
      <Login setIsLogged = {setIsLogged}/> 
    }
    </NameContext.Provider>
    </div>
  );
}

export default App;
