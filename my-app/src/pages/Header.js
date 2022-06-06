import { Link } from "react-router-dom";
import {useContext} from 'react';
import {NameContext} from '../App.js'

export default function Header() {
  
  const userNameContext = useContext(NameContext);
  const {userName} = userNameContext[0];

  // if (!userName) return <Link className="link" to="/"><h4>Login</h4></Link>;
  
  return (
    <nav className="links">
      <Link className="link" to="/"><h4>Login</h4></Link>
      <Link className="link" to=  "/searchSong" ><h4>Search Song</h4></Link>
      <Link className="link" to="/songList"><h4>Song List</h4></Link>
    </nav>
  );
}
