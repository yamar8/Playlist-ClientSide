import { Navigate,Route, Routes } from "react-router-dom";
import Login from "./Login";
import SearchSong from "./SearchSong/SearchSong";
import SongList from "./SongList";
import {useContext} from 'react';
import {NameContext} from '../App.js'
import Song from '../components/Song/Song';
  


function PathRoot() {
  const userNameContext = useContext(NameContext);
  const {userName} = userNameContext[0];

return (
    <nav>
      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/searchSong" element={<SearchSong /> }></Route>
        {/* <Route path="/searchSong" element={userName? <SearchSong />:<Navigate to="/Login" /> }></Route> */}
        <Route path="/songList" element={userName? <SongList />:<Navigate to="/Login" /> }></Route>
        <Route path="/song" element={<Song/>}></Route>
      </Routes>
    </nav>
  );
}

export default PathRoot;