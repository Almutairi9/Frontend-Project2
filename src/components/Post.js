import React from "react";
import { Card, Container } from "react-bootstrap";

const Post = ({ post, loading }) => {
  if (loading) {
    return <div class="spinner-border text-primary"></div>;
  }

  return (
    <Container>
      <div className="cards">
        {post.map((cardd, i) => (
          <div key={i}>
            <br />
            <Card style={({ width: "70rem" }, { margin: "16px" })}>
              <Card.Body>
                <Card.Title>
                  <li>{cardd.title}</li>
                </Card.Title>
                <Card.Text>{cardd.content}</Card.Text>
                <Card.Link href="#">{cardd.url}</Card.Link>
                <br />
                <Card.Link href="#">{cardd.imageUrl}</Card.Link>
              </Card.Body>
              <Card.Footer className="text-muted">
                Author: {cardd.author}
              </Card.Footer>
              <Card.Footer className="text-muted">
                Date: {cardd.date}
                <br />
                Time: {cardd.time}
              </Card.Footer>
            </Card>
          </div>
        ))}
        ;
      </div>
    </Container>
  );
};

export default Post;

{
  /* // <div class="spinner-border text-primary"></div> */
}
