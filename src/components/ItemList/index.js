import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MyCard from "../MyCard/MyCard.js"
import "./style.css";

export default function ItemList({ users }) {
  return (
    
    <Container>
      <Row>
        {users.map((user) => (
          /* remplazar por componente <Item> */
          <Col sm={4} key={user.id}>
           <MyCard user={user}/>
          </Col>
          /* hasta aca </Item> */
        ))}
      </Row>
    </Container>
  );
}

