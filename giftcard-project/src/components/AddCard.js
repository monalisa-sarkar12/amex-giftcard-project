import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const AddCard = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [points, setPoints] = useState(0);
  const { addCard } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newCard = {
      id: uuid(),
      name,
      date,
      points,
    };
    addCard(newCard);
    history.push("/");
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          placeholder="Enter card"
          required
        ></Input>
      </FormGroup>
      <FormGroup>
        <Label>Valid till</Label>
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          name="date"
          placeholder="Validity"
          required
        ></Input>
      </FormGroup>
      <FormGroup>
        <Label>Points</Label>
        <Input
          type="number"
          value={points}
          onChange={(e) => setPoints(e.target.value)}
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

export default AddCard;
