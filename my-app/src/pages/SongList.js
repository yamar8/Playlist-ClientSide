import {NameContext} from '../App';
import {useContext} from 'react';

function SongList(){
const userNameContext = useContext(NameContext);
const {userName} = userNameContext[0];

return(
<>
<h1>Hello {userName}</h1>
<p>songList:</p>
</>

)
    

}

export default SongList;