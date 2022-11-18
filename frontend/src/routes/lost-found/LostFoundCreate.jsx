import './LostFoundCreate.css';
import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { useCookies } from 'react-cookie';


function LostFoundCreate() {
  const [cookies, setCookie] = useCookies(['user']);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  let navigate = useNavigate();

  function addPost() {
    console.log(JSON.stringify({"type": 0, "title": title, "description": description, "author_email": cookies.email, "location": location, "time": time}));
    fetch(
      "http://localhost:3000/api/lost-found/create",
      {
        method: 'POST',
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({"type": 0, "title": title, "description": description, "author_email": cookies.email, "location": location, "time": time})
      })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  }

  if (!cookies.email) {
    return (
      <Navigate to="/"/>
    );
  }

  return (
    <Container className="Create d-flex vh-100 justify-content-center align-items-center" fluid>
      <Card style={{ width: '100rem'}} className="row">
        <Card.Header>{cookies.email}</Card.Header>
        <Card.Title className="my-3 text-center" style={{fontSize: "2rem"}}>Create Lost and Found Post</Card.Title>
        <Card.Body className="p-3 justify-content-center text-center">
          <Form>
            <Form.Group className="mb-3" controlId="title">
              <Form.Control type="text" placeholder="Title" onChange={e => setTitle(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Control as="textarea" rows={8} placeholder="Description" onChange={e => setDescription(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="time">
              <Form.Control type="datetime-local" onChange={e => setTime(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="location">
              <Form.Control as="textarea" rows={3} placeholder="Last seen place" onChange={e => setLocation(e.target.value)}/>
            </Form.Group>
            <Button className="my-2 w-100 p-1" variant="success" onClick={addPost}>
              Post
            </Button>
            <Button className="my-2 w-100 p-1" variant="danger" onClick={() => {navigate("/lost-found/home");}}>
              Cancel
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default LostFoundCreate;
