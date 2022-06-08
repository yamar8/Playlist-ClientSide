import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function SearchSong(){
    
const [inputValue,setInputValue] = useState("");
const [result,setResult] = useState();
const [search,setSearch] = useState();


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com',
            'X-RapidAPI-Key': 'e3ac5866b0msh2e100b947fe0dcdp190da0jsn0c520883eb43'
        }
    };
    
    useEffect(() => {
        fetch('https://simple-youtube-search.p.rapidapi.com/search?query=' + search + '&safesearch=false', options)
            .then(response => response.json())
            .then(response => {
                setResult(response.results);
                 console.log(response)})
            .catch(err => console.error(err));

    },[search])

    const onClickHandler = ()=>{
       setSearch(inputValue);
    }
    
    return(
      <div>
          <input onChange={(e)=>setInputValue(e.target.value)}></input>
            <button onClick={onClickHandler}>Search</button>
        <div>
      {
            result?.map((v)=>{
            return (
            <div>
            <Link to="/song"> <h1>{v.title}</h1></Link>
            <img src = {v.thumbnail.url} alt="" className='songImage'/>
            </div>)
        })}
        
        </div>
      </div>
    )
}