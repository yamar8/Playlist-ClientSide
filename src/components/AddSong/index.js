import {useState} from 'react';
import './style.css';


function AddSong(props){
   
    const {playlist} = props;
    
    return (
    <div className = "AddSong">
    {/* {playlist.map((v) =>  { return <div>{v.name}</div>})} */}
    </div>)
}

export default AddSong;