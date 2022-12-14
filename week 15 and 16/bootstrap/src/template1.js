import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Col, Button } from "react-bootstrap";
import poza from "../src/poza.jpg";
import poza2 from "../src/poza2.jpg";
import poza3 from "../src/poza3.jpg";
import { Link } from "react-router-dom";

const Template1 = () => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <Container className="row">
          <Col>
            <Card text="center" border="0">
              <Card.Img variant="top" src={poza2} />
              <Card.Body>
                <Card.Title>Jacket</Card.Title>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="orange"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>{" "}
                5.0{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>{" "}
                29
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  vitae molestie magna. Vivamus sed molestie enim, eu convallis
                  mauris.
                </Card.Text>
                <Button variant="dark">CART</Button>{" "}
                <Button variant="light">VIEW</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card text="center" border="0">
              <Card.Img variant="top" src={poza} />
              <Card.Body>
                <Card.Title>Jacket</Card.Title>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="orange"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>{" "}
                5.0{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="red"
                  class="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>{" "}
                29
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  vitae molestie magna. Vivamus sed molestie enim, eu convallis
                  mauris.
                </Card.Text>
                <Button variant="dark">CART</Button>{" "}
                <Button variant="light">VIEW</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card text="center" border="0">
              <Card.Img variant="top" src={poza3} />
              <Card.Body>
                <Card.Title>Jacket</Card.Title>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="orange"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>{" "}
                5.0{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>{" "}
                29
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  vitae molestie magna. Vivamus sed molestie enim, eu convallis
                  mauris.
                </Card.Text>
                <Button variant="dark">CART</Button>{" "}
                <Button variant="light">VIEW</Button>
              </Card.Body>
            </Card>
          </Col>
        </Container>
        <Link to={"./template2"}>second template</Link>
      </div>
    </div>
  );
};

export default Template1;
