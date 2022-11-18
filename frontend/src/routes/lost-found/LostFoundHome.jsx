import './LostFoundHome.css';
import PostListItem from '../../components/PostListItem';
import { useCookies } from 'react-cookie';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

function LostFoundHome() {
  const [cookies, setCookie] = useCookies(['user']);
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "http://localhost:3000/api/lost-found/home",
      {
        method: 'POST',
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then((res) => res.json())
      .then((json) => {
        setPosts(json);
        console.log(json);
        setIsFetching(false);
      });
  }, []);
  
  if (!cookies.email) {
    return (
      <Navigate to="/"/>
    );
  }
  
  return (
    <div className="Home" style={{marginTop: "4rem"}}>
      {isFetching ? <></>
       : posts.map( post =>
        <PostListItem author={post["author_email"]} title={post["title"]} description={post["description"]} image={cookies.pic} link={"/post?id=" + post["id"]}/>
      )}
      <Button variant="primary" style={{position: "fixed", right:"3rem", bottom: "3rem", width:"5rem", height: "5rem", fontSize: "2rem"}} onClick={()=> {navigate('/lost-found/create');}}>+</Button>
    </div>
  );
}

export default LostFoundHome;
