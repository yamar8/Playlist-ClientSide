import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import SearchSong from "./SearchSong";
import SongList from "./SongList";

export default function PathRoot() {
  return (
    <nav>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/searchSong" element={<SearchSong />}></Route>
        <Route path="/songList" element={<SongList />}></Route>
      </Routes>
    </nav>
  );
}
