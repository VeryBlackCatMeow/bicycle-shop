import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import '../styles/footer.css'

const Footer = () => {
    return( 
        <footer className="footer">
            <Container>
                <Row className="foot-services text-center">
                    <Col className="col-6 col-lg-3 pt-4">
                        <h5>Information</h5>
                        <a href="/#">About Us</a>
                        <br/>
                        <a href="/#">Store Locations</a>
                        <br/>
                        <a href="/#">Employment</a>
                        <br/>
                        <a href="/#">Terms Of Use</a>
                        <br/>
                    </Col>
                    <Col className="col-6 col-lg-3 pt-4">
                        <h5>Help</h5>
                        <a href="/#">Order Status</a>
                        <br/>
                        <a href="/#">Shipping & Returns</a>
                        <br/>
                        <a href="/#">Privacy Policy</a>
                        <br/>
                        <a href="/#">Warranty Info</a>
                        <br/>
                    </Col>
                    <Col className="col-6 col-lg-3 pt-4">
                        <h5>Galaxy Perks</h5>
                        <a href="/#">Free Shipping</a>
                        <br/>
                        <a href="/#">Gifts With Purchase</a>
                        <br/>
                        <a href="/#">Earn 5% Back</a>
                        <br/>
                        <a href="/#">Gift Cards</a>
                        <br/>
                        <a href="/#">Coupon Codes</a>
                        <br/>
                        
                    </Col>
                    <Col className="col-6 col-lg-3 pt-4">
                        <h5>Contacts</h5>
                        <a href="/#">New Production</a>
                        <br/>
                        <a href="/#">Sales</a>
                        <br/>                      
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col className="foot-contacts text-center">
                        <a title="Skype"href="skype:live:.cid.e2064b37c80ce1b6?chat"><i className="fab fa-skype"></i></a>
                        {/*Для приложения Viber на ПК */ }
                        <a title="Viber" href="viber://chat?number=+120345678910"><i className="fab fa-viber"></i></a>
                        {/*Для приложения Viber на мобильных*/}
                        <a title="Viber" href="viber://add?number=120345678910"><i className="fab fa-viber"></i></a>
                        <a title="Telegram" href="tg://resolve?domain=nikname"><i className="fab fa-telegram-plane"></i></a>
                        <a title="LinkedIn"href="/#"><i className="fab fa-linkedin"></i></a>
                        <a title="E-mail"href="/#"><i className="fas fa-at"></i></a>
                        <a title="GitHub"href="/#"><i className="fab fa-github"></i></a>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col className="foot-follow-us text-center" xs="6" lg={{size:3, order: 2}}>
                        <h4>Follow Us</h4>
                        <a href="/#"><i className="fab fa-facebook"></i></a>
                        <a href="/#"><i className="fab fa-twitter"></i></a>
                        <a href="/#"><i className="fab fa-google-plus"></i></a>
                        <a href="/#"><i className="fab fa-youtube"></i></a>
                    </Col>
                    <Col className="foot-payment text-center" xs="6" lg={{size:3, order: 3}}>
                        <h4>Secure Payments</h4>
                        <i className="fab fa-cc-visa"></i>
                        <i className="fab fa-cc-mastercard"></i>
                        <i className="fab fa-cc-paypal"></i>
                    </Col>
                    <Col className="foot-logo" xs="12" lg={{size:6, order: 1}}>
                        <NavLink exact to="/">
                            <span>BIKEGALAXY</span>
                        </NavLink>
                    </Col>
                </Row>
                <Row>
                    <Col className="foot-copyright">
                        All rights are not reserved&nbsp;
                        <i className="fab fa-creative-commons-pd"></i>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;