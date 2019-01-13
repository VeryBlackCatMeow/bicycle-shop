import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';


const Filter = () => (
    <ListGroup>
    <ListGroupItem active tag="button" action>Cheap</ListGroupItem>
    <ListGroupItem tag="button" action>Business</ListGroupItem>
    <ListGroupItem tag="button" action>Eco</ListGroupItem>
    <ListGroupItem tag="button" action>Services</ListGroupItem>
    <ListGroupItem tag="button" action>Gourment</ListGroupItem>
    </ListGroup>
);

export default Filter;