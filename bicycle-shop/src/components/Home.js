import React, { Component } from 'react';

import { Row, Col, UncontrolledCarousel, Card, CardImg, CardBody,
    CardTitle, CardLink} from 'reactstrap';
import axios from 'axios';

import HomeMenu from '../components/HomeMenu.js';

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
        const slides = this.state.slides;
        const homemenu = this.state.homemenu;
        return( 
            <Row className="py-3 align-items-end text-center">
                <Col sm="12" md="9">
                    
                        {
                            slides
                            ? <UncontrolledCarousel items={slides} />
                            : null 
                        }
            
                    <Row className="my-4">
                        {
                            homemenu
                            ? homemenu.map( (menu, id) => (<HomeMenu key={id} {...menu} />))
                            : null
                        }
                    </Row>
                </Col>
    
                <Col sm="5" md="3">
                    <Card>
                        <CardBody>
                            <h4><CardTitle style={{color: '#4B0082'}}>В ВелоКосмосе можно подобрать велосипед индивидуально для каждого!</CardTitle></h4>
                        </CardBody>
                        <CardLink href="#">
                            <CardImg src="/database/another/v2.jpg" className="img-thumbnail"  alt="Card image"/>
                            <CardImg src="/database/another/v3.jpg" className="img-thumbnail" alt="Main colum"/>
                            <CardImg src="/database/another/v7.jpg" className="img-thumbnail" alt="Main colum"/> 
                        </CardLink>
                    </Card>
                </Col>
                
                <Col className="col-sm-7 col-md-12 pt-3">
                    <h5>Наверное, у каждого из нас в детстве была мечта оказаться в КОСМОСЕ </h5>
                    <h5>Теперь у вас появился шанс ее осуществить. Ведь мы уже открылись и ждем Вас!!!!</h5>
                    <h5>Мы предлагаем только качественные сертифицированные товары по самым низким ценам!</h5>
                    <h5>Мы считаемся одним из крупнейших магазинов в мире и сотрудничаем с представителями межгалактических торговых марок.</h5>
                    <h5>Нашими клиентами являются не только жители Земли, но и многочисленные обитатели иных планет Солнечной системы,
                        а так же соседних галактик и миров</h5>
                    <h5>Наше обслуживание и сервис просто КОСМОС.Наши цены просто КОСМОС</h5>
                    <h4>Покоряй вселенную вместе с ВелоКосмос</h4>
                    <Row>
                        <Col sm="12" md="4">
                            <img className="img-thumbnail" src="/database/another/g2.jpg" alt="" />
                        </Col>
                        <Col sm="12" md="4">
                            <img className="img-thumbnail" src="/database/another/g3.jpg" alt="" />
                        </Col>
                        <Col sm="12" md="4">
                            <img className="img-thumbnail" src="/database/another/g1.jpg" alt="" />
                        </Col>
                    </Row>
                </Col>


             </Row>
        );

    }
}


export default Home;