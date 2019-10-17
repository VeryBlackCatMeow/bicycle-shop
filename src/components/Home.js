import React, { Component } from 'react';

import { Container, Row, Col, UncontrolledCarousel, Card, CardImg,
                CardBody,CardTitle, CardLink} from 'reactstrap';
import axios from 'axios';

import HomeMenu from './HomeMenu';
import HomeJumbotron from './HomeJumbotron';
import '../styles/home.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            slides: [],
            homemenu: []
         };
    } 

    componentDidMount = () => {
        axios.get('/database/carousel.json')
            .then(({ data }) => {
                this.setState({ slides: data});
            })
            .catch(error => console.log(error));

        axios.get('/database/homemenu.json')
            .then(({ data }) => {       
                this.setState({ homemenu: data});
            })
            .catch(error => console.log(error));
    }

    render() {
        return(
            <Container className="home">
                <HomeJumbotron/> 
                <Row className="py-3 text-center">
                    <Col xs="12" md="9">
                        <Row className="home-carousel">
                            {
                                this.state.slides.length
                                ?
                                <Col><UncontrolledCarousel items={this.state.slides} /></Col>
                                :
                                <Col><img src="/database/another/g2.jpg" style={{height: '530px'}} alt="" /></Col>
                            }
                        </Row>
                        <Row className="home-menu my-4 justify-content-center">
                            {
                                this.state.homemenu.length
                                ?
                                this.state.homemenu.map( (menu) => (<HomeMenu key={menu.id} {...menu}/>))
                                :
                                null
                            }
                        </Row>
                    </Col>
        
                    <Col xs="5" md="3">
                        <Card>
                            <CardBody>
                                <h4><CardTitle>Bikes for everyone!</CardTitle></h4>
                            </CardBody>
                            <CardLink href="#">
                                <CardImg src="/database/another/v2.jpg" className="img-thumbnail"  alt="Card image"/>
                                <CardImg src="/database/another/v3.jpg" className="img-thumbnail" alt="Main colum"/>
                                <CardImg src="/database/another/v7.jpg" className="img-thumbnail" alt="Main colum"/> 
                            </CardLink>
                        </Card>
                    </Col>
                    
                    <Col className="col-7 col-md-12 pt-3">
                        <h5>Perhaps, everybody had a dream in a childhood about going to cosmos. </h5>
                        <h5>Now you have a chance to make it real. We are already open and waiting for you!!!!</h5>
                        <h5>We offer only quality certified products at the lowest prices!!</h5>
                        <h5>Our clients are not only the inhabitants of the Earth, but also numerous
                             inhabitants of other planets of the Solar system, as well as neighboring galaxies and worlds.</h5>
                        <h5>Our products and services are very well</h5>
                        <h4>Conquer the universe with BikeGalaxy</h4>
                        <Row>
                            <Col xs="12" md="4">
                                <img className="img-thumbnail" src="/database/another/g2.jpg" alt="" />
                            </Col>
                            <Col xs="12" md="4">
                                <img className="img-thumbnail" src="/database/another/g3.jpg" alt="" />
                            </Col>
                            <Col xs="12" md="4">
                                <img className="img-thumbnail" src="/database/another/g1.jpg" alt="" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <i className='fas fa-home' style={{fontSize: '24px'}}></i>
                    <i className='fas fa-phone-square' style={{fontSize: '24px'}}></i>
                    <i className='fas fa-phone' style={{fontSize: '24px'}}></i>
                <i className='fas fa-bicycle' style={{fontSize: '24px'}}></i>
             </Container> 
        );

    }
}


export default Home;