import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import './App.css';
import CardsTable from "./CardsTable/CardsTable";
import AddCardForm from "./AddCardForm/AddCardForm";

function App() {

  const cards = [

    {
      number: "49927398716",
      name: "testCard",
      limit: 0,
      balance: 0
    },
    {
      number: "49927398716",
      name: "testCard",
      limit: 0,
      balance: 0
    },
    {
      number: "49927398716",
      name: "testCard",
      limit: 0,
      balance: 0
    },
    {
      number: "49927398716",
      name: "testCard",
      limit: 0,
      balance: 0
    }

  ];

  return (
    <div className="App">
      <Container>
          <Row><h1>Credit Card System</h1></Row>
          <Row>
            <Col xs={6}>
                <AddCardForm></AddCardForm>
            </Col>
          </Row>
          <Row><p></p></Row>
          <Row>
            <h2>Saved Cards</h2>
            <CardsTable cards={cards}></CardsTable>
          </Row>
      </Container>
    </div>
  );
}

export default App;
