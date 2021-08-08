import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";

import {
  ListGroup,
  ListGroupItem,
  Button,
  Card,
  Row,
  Col,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

export const CardList = () => {
  const { cards, removeCard } = useContext(GlobalContext);
  return (
    <ListGroup className="mt-4">
      {cards.map((card) => (
        <ListGroupItem>
          <Row>
            <Col sm={12}>
              <Card>
                <CardBody className="m-auto">
                  <CardTitle tag="h5">{card.name} Gift Card</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    Valid till - {card.date}
                  </CardSubtitle>

                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    {card.points} Points
                  </CardSubtitle>
                  <div className="ml-auto">
                    <Link
                      className="btn btn-warning mr-1"
                      to={`/edit/${card.id}`}
                    >
                      Edit
                    </Link>
                    <Button onClick={() => removeCard(card.id)} color="danger">
                      Delete
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};
