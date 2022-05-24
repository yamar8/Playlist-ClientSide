import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="links">
      <Link className="link" to="/">
        ||| Login ||
      </Link>
      <Link className="link" to="/searchSong">
        || searchSong ||
      </Link>
      <Link className="link" to="/songList">
        || SongList ||
      </Link>

      
    </nav>
  );
}
