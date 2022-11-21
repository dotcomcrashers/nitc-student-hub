import './LostFoundView.css';
import { useState, useEffect, useMemo } from 'react';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';
import { Container, Card, ListGroup, Toast, ToastContainer, Button } from 'react-bootstrap';
import { useCookies } from 'react-cookie';


function LostFoundView() {
  const [cookies, setCookie] = useCookies(['user']);
  const [post, setPost] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  const [showToast, setShowToast] = useState(false);
  let navigate = useNavigate();

  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();

  useEffect(() => {
    fetch(
      "http://localhost:3000/api/lost-found/view",
      {
        method: 'POST',
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({"id": query.get("id")})
      })
      .then((res) => res.json())
      .then((json) => {
        setPost(json);
        console.log(json);
        setIsFetching(false);
      })
      .catch((_) => {
        setShowToast(true);
      });
  }, []);

  function deletePost() {
    fetch(
      "http://localhost:3000/api/lost-found/delete",
      {
        method: 'POST',
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({"id": post["id"], "author_email": cookies.email})
      })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        navigate("/lost-found/home");
      })
      .catch((_) => {
        setShowToast(true);
      });
  }

  if (!cookies.email) {
    return (
      <Navigate to="/"/>
    );
  }

  function getFormattedTime(date) {
    let utcDate = new Date(date);
    let localeDate = utcDate.toLocaleDateString();
    let localeTime = utcDate.toLocaleTimeString();
    return localeDate + " " + localeTime;
  }

  return (
    <Container className="View d-flex justify-content-center align-items-center" style={{marginTop: "4rem"}} fluid>
      <ToastContainer>
      <Toast onClose={() => setShowToast(false)} show={showToast} delay={60000} postion="top-center" bg="danger" autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Oops!</strong>
            <small>now</small>
          </Toast.Header>
          <Toast.Body>Could not view the post! Please try again later!</Toast.Body>
      </Toast>
      </ToastContainer>
      
      <Card style={{ width: "50rem"}} className="row">
        {isFetching || Object.keys(post).length === 0?
         <>
           <Card.Body>
             <Card.Title style={{marginTop: "20rem", marginBottom: "20rem"}}>Loading...</Card.Title>
           </Card.Body>
         </>
         : <>
             <Card.Header>{post["author_email"]}</Card.Header>
             <Card.Img variant="top" src={post["image"]} style={{height: "30rem", objectFit: "contain"}}/>
             <Card.Title className="my-3 text-center" style={{fontSize: "2rem"}}>{post["title"]}</Card.Title>
             <Card.Body className="p-3 justify-content-center text-center">
               <Card.Text>{post["description"]}</Card.Text>
             </Card.Body>
             <ListGroup className="list-group-flush">
               <ListGroup.Item>{post["location"]}</ListGroup.Item>
               <ListGroup.Item>{getFormattedTime(post["time"])}</ListGroup.Item>
             </ListGroup>
             {post["author_email"] === cookies.email?
              <Card.Body className="p-3 justify-content-center text-center">
                <Button className="my-2 w-100 p-1" variant="danger" onClick={deletePost}>
                  Delete
                </Button>
              </Card.Body>
              :<Card.Body className="p-3 justify-content-center text-center">
                 <Button className="my-2 w-100 p-1" variant="primary" onClick={(e) => {window.location.href = `mailto:{post["author_email"]}`; e.preventDefault();}}>
                   Contact
                 </Button>
               </Card.Body>}
         </>
        }
      </Card>
    </Container>
  );
}

export default LostFoundView;
