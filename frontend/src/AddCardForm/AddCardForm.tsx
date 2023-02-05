import * as React from "react";
import {Button, Container, Form} from "react-bootstrap";

export default function AddCardForm() {

    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name for the card" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter the card number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Limit</Form.Label>
                    <Form.Control type="number" placeholder="Enter limit for the card" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>

    )
}
