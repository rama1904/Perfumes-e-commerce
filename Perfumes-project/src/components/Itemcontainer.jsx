import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function ItemListContainer({ greeting }) {
  return (
    <Container style={{ marginTop: '20px' }}>
      <Row>
        <Col>
          <h2>{greeting}</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemListContainer;
