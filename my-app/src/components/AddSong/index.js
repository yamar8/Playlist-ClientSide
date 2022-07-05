import {useState} from 'react';
// import {playList1} from '../../fakeData';
import './AddSong.css';


function AddSong(props){
    // const [playlist, setPlaylist] = useState(playList1);

    
    
    return (
    <div className = "AddSong">
    {props.playlist.map((v) =>  { return <div>{v.name}</div>})}
    </div>)
}

export default AddSong;