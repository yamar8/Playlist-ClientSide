import {Link} from 'react-router-dom';

export default function Header(){
 return(
    <nav className="link">
    <Link to="/">Login</Link>
    <Link to="/searchSong">searchSong</Link>
    <Link to="/songList">SongList</Link>
    
    </nav>

 )
}