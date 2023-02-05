import React, {useEffect, useState} from 'react';
import {Alert, Button, Col, Container, Form, Row} from 'react-bootstrap';
import './App.css';
import CardsTable from "./CardsTable/CardsTable";
import {Card} from "./Card";

function App() {

    const [cards, setCards] = useState<Card[]>([]);

    const [card, setCard] = useState<Card>({
        name: "",
        number: "",
        limit: 0,
        balance: 0
    });

    const [error, setError] = useState()

    useEffect( () => {

        fetch("http://localhost:3030/v1/cards", {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            }
        }).then((response) => {

            return response.json();

        }).then((result) => {

            if (!result.success) {
                setError(result.message)
            } else {
                setCards(result);
            }
        })
    }, []);


    const handleCardName = (event: any) => {

        card.name = event.target.value;
        setCard(card);
    };

    const handleLimit = (event: any) => {

        card.limit = parseInt(event.target.value);

        setCard(card);
    };

    const handleCardNumber = (event: any) => {

        card.number = event.target.value;
        setCard(card);
    };

    const handleSubmit = async () => {

        fetch("http://localhost:3030/v1/card", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(card)
        }).then((response) => {

            return response.json();

        }).then((result) => {

            if (!result.success) {
                setError(result.message)
            } else {
                setCards([
                    ...cards,
                    {
                        name:card.name,
                        limit:card.limit,
                        balance: 0,
                        number: card.number
                    }
                ]);
            }
        });
    };

    return (
        <div className="App">
            <Container>

                <Row><h1>Credit Card System</h1></Row>
                <Row>
                    <Col xs={6}>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control onChange={handleCardName} type="text"
                                              placeholder="Enter name for the card"/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Number</Form.Label>
                                <Form.Control onChange={handleCardNumber} type="text"
                                              placeholder="Enter the card number"/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Limit</Form.Label>
                                <Form.Control onChange={handleLimit} type="number"
                                              placeholder="Enter limit for the card"/>
                            </Form.Group>
                            <Button onClick={handleSubmit} variant="primary">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <p></p>
                    <p>
                        {
                            (error) ? <Alert variant="danger">
                                {error}
                            </Alert> : ""
                        }
                    </p>
                </Row>
                <Row>
                    <h2>Saved Cards</h2>
                    <CardsTable cards={cards}></CardsTable>
                </Row>
            </Container>
        </div>
    );
}

export default App;


