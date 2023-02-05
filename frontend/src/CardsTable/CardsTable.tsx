import * as React from "react";
import {Table} from "react-bootstrap";
import {CardsProps} from "../CardsProps";

export default function CardsTable(cardsProps: CardsProps) {

    return (

        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Name</th>
                <th>Number</th>
                <th>Balance</th>
                <th>Limit</th>
            </tr>
            </thead>
            <tbody>

            {
                cardsProps.cards.map((card) => {

                   return (
                       <tr>
                           <td>{card.name}</td>
                           <td>{card.number}</td>
                           <td>{card.balance}</td>
                           <td>{card.limit}</td>
                       </tr>
                   )

                })
            }
            </tbody>
        </Table>
    )

}
