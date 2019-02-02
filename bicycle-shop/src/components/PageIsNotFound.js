import React from 'react';
import { Redirect } from 'react-router-dom';
//import { Row } from 'reactstrap';

const PageIsNotFound = ( /*{menu, link, image}*/ ) => {
    return(
        <Redirect to="/"/>
       /* <Row>
           <h1>Sorry, this page is not found (((</h1>
        </Row>*/
    );
}
export default PageIsNotFound;