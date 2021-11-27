import React, { useEffect, useState } from "react";
import "./style.css";
import Nav from "../../components/Nav";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { Card, Spinner } from "react-bootstrap";
const News = () => {
  const navigate = useNavigate();

  const logOut = () => {
    navigate(`/`);
    localStorage.clear(); 
    window.location.reload(false);
    console.log("log out");
  };
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
      {/* <br /> */}
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
          <Spinner animation="border" variant="primary" />
        )}
      </div>

      <Footer />
    </div>
  );
};
export default News;
