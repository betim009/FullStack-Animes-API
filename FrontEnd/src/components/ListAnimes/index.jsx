import { Button, Card, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import "./listAnimes.css";
import { useState } from "react";

function ListAnimes({ animes }) {
  const [truncateSynopsis, setTruncateSynopsis] = useState(true);

  const toggleSynopsis = () => {
    setTruncateSynopsis(!truncateSynopsis);
  };

  return (
    <Row className="gap-3 linha">
      {animes.map((element, index) => (
        <Col lg={12} key={index} className="listAnimes">
          <Card>
            <Row className="rowAnime">
              <Col lg={2} className="colAnime">
                <Card.Img src={element.image} alt="" />
              </Col>
              <Col lg={10} className="colText">
                <Card.Body>
                  <Card.Title>{element.title}</Card.Title>
                  <Card.Text>
                    <strong>Ranking: #{element.ranking}</strong>
                    <p>
                      {truncateSynopsis
                        ? `${element.synopsis.substring(0, 400)}...`
                        : element.synopsis}
                      <button
                        className="btn-toggleSynopsis"
                        onClick={toggleSynopsis}
                      >
                        {truncateSynopsis ? "Show more" : "Show less"}
                      </button>
                    </p>
                    <Button variant="primary">Show more</Button>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

ListAnimes.propTypes = {
  animes: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      ranking: PropTypes.number.isRequired,
      synopsis: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ListAnimes;
