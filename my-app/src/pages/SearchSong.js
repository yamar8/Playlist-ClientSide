import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SearchSong.css";

export default function SearchSong() {
  const [search, setSearch] = useState();

  return (
    <div>
      
      <SearchBar setSearch={setSearch} />
     
      <div className="searchResult">
        <SearchResult search={search} />
      </div>
 
    </div>
  );
}

function SearchBar({ setSearch }) {
  const [inputValue, setInputValue] = useState("");

  const onClickHandler = () => {
    setSearch(inputValue);
  };

  return (
    <div>
      <input onChange={(e) => setInputValue(e.target.value)}></input>
      <button onClick={onClickHandler}>Search</button>
    </div>
  );
}

function SearchResult({ search }) {
  const [result, setResult] = useState();

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
      "X-RapidAPI-Key": "e3ac5866b0msh2e100b947fe0dcdp190da0jsn0c520883eb43",
    },
  };

  useEffect(() => {
    fetch(
      "https://simple-youtube-search.p.rapidapi.com/search?query=" +
        search +
        "&safesearch=false",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setResult(response.results);
        console.log(response);
      })
      .catch((err) => console.error(err));
  }, [search]);

  if (!result) return "Loading..";
  if (!search) return "No result.";

  return (
    <div>
      {result.map((v) => {
        return (
          <div>
            <Link to="/song">
              {" "}
              <h5>{v.title}</h5>
            </Link>
            <img
              src={v.thumbnail.url}
              alt=""
              width="100"
              height="100"
              className="ImageSong"
            />
          </div>
        );
      })}
    </div>
  );
}
