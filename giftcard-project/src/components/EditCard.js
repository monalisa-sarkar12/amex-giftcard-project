import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const EditCard = (props) => {
  const { editCard, cards } = useContext(GlobalContext);
  const [selectedCard, setSelectedCard] = useState({
    id: "",
    name: "",
    date: "",
    points: "",
  });
  const history = useHistory();
  const currentcardId = props.match.params.id;

  useEffect(() => {
    const cardId = currentcardId;
    const selectedCard = cards.find((card) => card.id === cardId);
    setSelectedCard(selectedCard);
  }, [currentcardId, cards]);

  const onChange = (e) => {
    setSelectedCard({
      ...selectedCard,
      [e.target.name]: e.target.value,
      [e.target.date]: e.target.value,
      [e.target.ponts]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    editCard(selectedCard);
    history.push("/");
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          value={selectedCard.name}
          onChange={onChange}
          name="name"
          placeholder="Enter Card"
          required
        ></Input>
      </FormGroup>
      <FormGroup>
        <Label>Valid till</Label>
        <Input
          type="date"
          value={selectedCard.date}
          onChange={onChange}
          name="date"
          placeholder="Validity"
          required
        ></Input>
      </FormGroup>
      <FormGroup>
        <Label>Points</Label>
        <Input
          type="number"
          value={selectedCard.points}
          onChange={onChange}
          name="points"
          placeholder="Validity"
          required
        ></Input>
      </FormGroup>
      <Button type="submit">Save</Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
};
export default EditCard;
