import axios from "axios";
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";


function ListaPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts")
      .then((resp) => {
        setPosts(resp.data);

      });

  }, []);


  return (
    <>
      <h1>Lista Posts</h1>
      <div className="row">
        {
          posts.map((curPost, index) => (
            <div key={'post-' + index} className="col" id={'post-' + index}>
              <div className="card">
                <h5 className="card-title">{curPost.title}</h5>
                <p className="card-text">{curPost.author}</p>
                <p className="card-body">{curPost.body}</p>
                <Link to ={`/${curPost.id}`}>vedi i dettagli</Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default ListaPosts;