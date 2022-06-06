import { Link } from "react-router-dom";

export default function Header() {

  return (
    <nav className="links">
      <Link className="link" to="/"><h4>Login</h4></Link>
      <Link className="link" to=  "/searchSong" ><h4>Search Song</h4></Link>
      <Link className="link" to="/songList"><h4>Song List</h4></Link>
    </nav>
  );
}
