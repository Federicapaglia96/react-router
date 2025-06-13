import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ShowPost (){
const {id} = useParams ();

useEffect(()=>{
    axios.get(`https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts/${id}`).then((resp)=>{
        console.log(resp)
    }
)
}, [])

    return(
 <main>
    <h1>Dettagli dei post: {id}</h1>
 </main>
    );

};

export default ShowPost;