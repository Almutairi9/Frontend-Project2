import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { Card, Container, Spinner } from "react-bootstrap";
import "./style.css";
const News = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://inshortsapi.vercel.app/news?category=technology")
      .then((Response) => Response.json())
      .then((body) => {
        console.log(body.data);
        setCards(body.data);
      });
  }, []);

  return (
    <div>
      <Nav />

      <Container>
        <div className="cards">
          {cards.length ? (
            <ul>
              {cards.map((cardd, i) => (
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
            </ul>
          ) : (
            <div class="spinner-border text-primary"></div>
          )}
        </div>
      </Container>
      <Footer />
    </div>
  );
};
export default News;
