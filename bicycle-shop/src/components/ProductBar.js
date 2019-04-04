import React, { useState} from 'react';
import { Row, Col, TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
    //import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import '../styles/product.css'

const ProductBar = ( {product, title, description, type} ) => {
    const [activeTab, toggle] = useState('1');

    return(
        <div className="product-navbar mt-3">
            <Nav tabs>
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === '1' })}
                                onClick={() => toggle('1')}
                        >Description
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === '2' })}
                                onClick={() => toggle('2')}
                        >Specification
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === '3' })}
                                onClick={() => toggle('3')}
                        >Reviews
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === '4' })}
                                onClick={() => toggle('4')}
                        >Help & Advice
                    </NavLink>
                </NavItem>
            </Nav>

            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                    <Col sm="12">
                        <h5>{type} {product} {title}</h5>
                        <p>{description}</p>
                    </Col>
                    </Row>
                </TabPane>

                <TabPane tabId="2">
                    <h4>Tab 2 Contents wfwfwffwfwfwwfwfwfwf</h4>
                </TabPane>
            </TabContent>
        </div>
    )
}

export default ProductBar;