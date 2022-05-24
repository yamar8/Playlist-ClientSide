import { Route, Routes } from "react-router-dom";

export default function PathRoot() {
  return (
    <nav>
      <Routes>
        <Route path="/" element={Login}></Route>
        <Route path="/searchSong" element={SearchSong}></Route>
        <Route path="/songList" element={SongList}></Route>
      </Routes>
    </nav>
  );
}
