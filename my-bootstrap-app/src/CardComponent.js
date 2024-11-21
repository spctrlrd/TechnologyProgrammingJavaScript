import React from 'react';
import { Card, Button } from 'react-bootstrap';
import myImage from './images/reactimage.png';

const CardComponent = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={myImage} />
      <Card.Body>
        <Card.Title>Заголовок карты</Card.Title>
        <Card.Text>
          Это пример текста, который описывает содержимое карты. Здесь можно разместить любую статичную информацию.
        </Card.Text>
        <Button variant="primary">Перейти куда-то</Button>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;