import { Button, Card, Col, Row, Image } from 'react-bootstrap';

function PostListItem({author, title, subtitle, description, image, link}) {
  return (
    <div className="post-item m-3" style={{height: "12rem"}}>
      <Card style={{textAlign: "left"}}>
        <Card.Header>{author}</Card.Header>
          <Row>
            <Col xs={1}>
              <Image src={image} style={{height: "9rem", width: "9rem"}}/>
            </Col>
            <Col className="p-3">
              <Card.Title><Card.Link href={link} className="stretched-link" style={{textDecoration: "none", color: "inherit", font: "inherit"}}>{title}</Card.Link></Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
              <Card.Body className="p-0">
                <Card.Text>
                  {description}
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
    </Card>
    </div>
  );
}

export default PostListItem;
