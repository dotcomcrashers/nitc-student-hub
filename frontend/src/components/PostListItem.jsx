import { Button, Card, Col, Row } from 'react-bootstrap';

function PostListItem({author, title, description, image, link}) {
  return (
    <div className="post-item m-3" style={{height: "12rem"}}>
      <Card style={{textAlign: "left"}}>
        <Card.Header>{author}</Card.Header>
        <Card.Body className="p-0">
          <Row>
            <Col xs={1}>
              <img src={image} style={{height: "9rem", width: "9rem"}}/>
            </Col>
            <Col className="p-3">
              <Card.Title><Card.Link href={link} className="stretched-link" style={{textDecoration: "none", color: "inherit", font: "inherit"}}>{title}</Card.Link></Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
            </Col>
          </Row>
      </Card.Body>
    </Card>
    </div>
  );
}

export default PostListItem;
