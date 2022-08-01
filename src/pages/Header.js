import { Link } from "react-router-dom";

export default function Header({userName}) {

  return (
    <nav className="links">
      <h1>Wellcom {userName}</h1>
      <Link className="link" to="/"><h4>Login</h4></Link>
      <Link className="link" to=  "/searchSong" ><h4>Search Song</h4></Link>
      <Link className="link" to="/songList"><h4>Song List</h4></Link>
    </nav>
  );
}
