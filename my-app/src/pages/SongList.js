import {NameContext} from '../App';
import {useContext} from 'react';

function SongList(){
const userName = useContext(NameContext);
const {email} = userName[0];

return(
<>
<h1>Hello {email}</h1>
<p>songList:</p>
</>

)
    

}

export default SongList;