import React, { Component } from 'react';

import { Container, Row, Col, UncontrolledCarousel, Card, CardImg,
                CardBody,CardTitle, CardLink} from 'reactstrap';
import axios from 'axios';

import HomeMenu from './HomeMenu.js';
import HomeJumbotron from './HomeJumbotron.js';
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
        axios.get('/database/carousel.json').then(({ data }) => {       
            this.setState({ slides: data});
        });
        axios.get('/database/homemenu.json').then(({ data }) => {       
            this.setState({ homemenu: data});
        });
    }

    render() {
        return(
            <Container className="home">
                <HomeJumbotron/> 
                <Row className="py-3 text-center">
                    <Col xs="12" md="9">
                        {
                            this.state.slides
                            ?
                            <UncontrolledCarousel items={this.state.slides} />
                            :
                            null 
                        }
                        <Row className="home-menu my-4 justify-content-center">
                            {
                                this.state.homemenu
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
                                <h4><CardTitle>We have bikes for everyone!</CardTitle></h4>
                            </CardBody>
                            <CardLink href="#">
                                <CardImg src="/database/another/v2.jpg" className="img-thumbnail"  alt="Card image"/>
                                <CardImg src="/database/another/v3.jpg" className="img-thumbnail" alt="Main colum"/>
                                <CardImg src="/database/another/v7.jpg" className="img-thumbnail" alt="Main colum"/> 
                            </CardLink>
                        </Card>
                    </Col>
                    
                    <Col className="col-7 col-md-12 pt-3">
                        <h5>Наверное, у каждого из нас в детстве была мечта оказаться в КОСМОСЕ </h5>
                        <h5>Теперь у вас появился шанс ее осуществить. Ведь мы уже открылись и ждем Вас!!!!</h5>
                        <h5>Мы предлагаем только качественные сертифицированные товары по самым низким ценам!</h5>
                        <h5>Мы считаемся одним из крупнейших магазинов в мире и сотрудничаем с представителями межгалактических торговых марок.</h5>
                        <h5>Нашими клиентами являются не только жители Земли, но и многочисленные обитатели иных планет Солнечной системы,
                            а так же соседних галактик и миров</h5>
                        <h5>Наше обслуживание и сервис просто КОСМОС.Наши цены просто КОСМОС</h5>
                        <h4>Покоряй вселенную вместе с ВелоКосмос</h4>
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

                <Row>
                    <i className='fas fa-home' style={{fontSize: '24px'}}></i>
                    <i className='fas fa-phone-square' style={{fontSize: '24px'}}></i>
                    <i className='fas fa-phone' style={{fontSize: '24px'}}></i>
                    <i className='fas fa-bicycle' style={{fontSize: '24px'}}></i>
                </Row>
             </Container> 
        );

    }
}


export default Home;