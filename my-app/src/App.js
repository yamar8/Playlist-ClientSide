import "./App.css";
import PathRoot from "./pages/PathRoot";
import "./App.css";
import Header from "./pages/Header";
import {useState, createContext} from 'react';

export const NameContext = createContext("user"); 

function App() {
  const userNameState = useState("");
  
  return (
    <div className="App">
    <NameContext.Provider value = {userNameState}>
      <Header />
      <PathRoot />
    </NameContext.Provider>
    </div>
  );
}

export default App;
