import React from 'react';
import { Container, InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';
import { } from 'reactstrap';
import DropCart from '../containers/DropCart.js';

const Header = () => (
        <Container>
            <InputGroup>
                <InputGroupAddon addonType="prepend"></InputGroupAddon>
                <Input/>
                <DropCart />
            </InputGroup>
        </Container>
);



export default Header;