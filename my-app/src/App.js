import "./App.css";
import PathRoot from "./pages/PathRoot";
import Header from "./pages/Header";
import {useState, createContext} from 'react';

export const NameContext = createContext(); 

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
