import React from 'react';
import {createPortal} from 'react-dom';
import { Jumbotron, Container } from 'reactstrap';

const HomeJumbotron = () => {
  return createPortal(
    <Jumbotron className="home-jumbotron" fluid>
      <Container fluid>
        <h2>Rubbed off your feet soles to hell? </h2>
        <h2>And have no money for a car?</h2>
        <h2>So we know how to help you.</h2>
        <h2>Welcome to BikeGalaxy!</h2>
      </Container>
    </Jumbotron>,
    document.getElementById('portal')
  );
};

export default HomeJumbotron;

/*
        <h2>Стёр к чертям свои ноги?</h2>
        <h2>А денег на тачку нет?</h2>
        <h2>Тогда приходи к нам.</h2>
        <h2>ВЕЛОКОСМОС поможет тебе!</h2>

        <h2>Rubbed off your soles to hell? </h2>
        <h2>And have no money for a car?</h2>
        <h2>Then we are waiting for you.</h2>
        <h2>BikeGalaxy helps you!</h2>
*/