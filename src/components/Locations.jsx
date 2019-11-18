import React, {Component} from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import ReactMapGL, {NavigationControl, FullscreenControl,
        Marker, Popup} from 'react-map-gl';

import locations from '../locationsData.json';

import '../styles/locations.scss';
 
class  Locations extends Component {
    constructor() {
        super();
        this.state = {
            mounted: false,
            viewport: {
                latitude: 5.2046, longitude: -25.0162, zoom: 1,
                width: '100%', height: '100%', 
                //pitch: 35, bearing: 7.6
            },
            selectedShop: null
          };
    }

    componentDidMount () {
        this.setState({ mounted: true });
        window.addEventListener("keydown", this.listener);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.listener);
    }

    setViewport = (viewport) => {
        this.setState({viewport});
    }

    setSelectedShop = shop => {
        this.setState({ selectedShop: shop })
    }

    listener = e => {
        if (e.key === "Escape") {
          this.setSelectedShop(null);
        }
    };
 
    render() {
        const shops = locations.sources.points.data.features;
        const { mounted, viewport, selectedShop} = this.state;
        return (
            <Container className="locations">
                <Row>
                    <h2>BikeGalaxy Locations:</h2>
                </Row>
                <Row>
                    <Col xs="7">
                        <div className='coordinates'>
                            Latitude: {viewport.latitude.toFixed(4)} |
                            Longitude: {viewport.longitude.toFixed(4)} |
                            Zoom: {viewport.zoom.toFixed(2)}
                        </div>
                        <div className="mapContainer">
                            <ReactMapGL {...viewport} //onTouchMove={e=>this.handler(e)}
                                mapboxApiAccessToken={TOKEN} mapStyle='mapbox://styles/mapbox/streets-v11'
                                onViewportChange={ viewport => { if(mounted) this.setViewport(viewport); } }>
                                <div style={{position: 'absolute', right: 1, top: 2}}>
                                    <NavigationControl />
                                </div>
                                <div style={{position: 'absolute', left: 2, top: 2}}>
                                    <FullscreenControl container={document.querySelector('body')}/>
                                </div>
                                {
                                    shops.map( shop => (
                                        <Marker key = {shop.properties.shop_id} 
                                            latitude={shop.geometry.coordinates[0]}
                                            longitude={shop.geometry.coordinates[1]} /*offsetLeft={-20} offsetTop={-10}*/>
                                            <div className="marker-button"
                                                    onClick={e => {
                                                        e.preventDefault();
                                                        this.setSelectedShop(shop);
                                                    }}>
                                                <img src="/logo.jpg" alt="logo"></img>
                                                <span>BikeGalaxy</span>
                                            </div>
                                        </Marker>
                                    ))
                                }
                                {   
                                    selectedShop
                                    ? 
                                    <Popup latitude={selectedShop.geometry.coordinates[0]}
                                            longitude={selectedShop.geometry.coordinates[1]}
                                            onClose={() => {
                                                this.setSelectedShop(null);
                                            }}>
                                        <div>
                                            <h5>{selectedShop.properties.name}</h5></div>
                                            <span>City: {selectedShop.properties.city}</span><br/>
                                            <span>Address:{selectedShop.properties.address}</span><br/>
                                            <span>Call Us: {selectedShop.properties.call}</span><br/>
                                            <span>Hours: {selectedShop.properties.hours}</span><br/>
                                        
                                    </Popup>
                                    :
                                    null
                                }
                            </ReactMapGL>
                        </div>   
                    </Col>
                    <Col xs="5">
                        <ListGroup>
                            <ListGroupItem>Cras justo odio Porta ac consectetur ac Vestibulum at eros</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem>Morbi leo risus</ListGroupItem>
                            <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row> 
                
            </Container>
        )
    }
}

export default Locations;







 // componentDidMount() {
    //     const map = new mapboxgl.Map({
    //         container: this.mapContainer,
    //         style: 'mapbox://styles/mapbox/streets-v11',
    //         center: [this.state.lng, this.state.lat],
    //         zoom: this.state.zoom,
    //         pitch: 35,
    //         bearing: 17.6
    //     });

    //     const nav = new mapboxgl.NavigationControl({
    //         showCompass: true,
    //         showZoom: true
    //     });

    //     map.addControl(nav, 'top-left');
    //     map.addControl(new mapboxgl.FullscreenControl());
    //     //map.addControl(new mapboxgl.NavigationControl());
    //     var scale = new mapboxgl.ScaleControl({
    //         maxWidth: 80,
    //         unit: 'metric'
    //     });
    //     map.addControl(scale);
 
    //     map.on('move', () => {
    //         this.setState({
    //             lng: map.getCenter().lng.toFixed(4),
    //             lat: map.getCenter().lat.toFixed(4),
    //             zoom: map.getZoom().toFixed(2)
    //         });
    //     });
    // }
    
    // handler = (e) => {
    //     console.log(e.point);
    //     this.setState({
    //         longitude: e.target.getCenter().lng.toFixed(4),
    //         latitude: e.target.getCenter().lat.toFixed(4),
    //         zoom: e.target.getZoom().toFixed(2)
    //     });
    // }
    // eifel: lat 48.857896, long 2.295258     Statue of Liberty 40.689167, -74.044583,

    const TOKEN = "pk.eyJ1IjoiZGVhdGhveHkiLCJhIjoiY2syejFscno5MDQ5azNvanc5N2g4ZnJrbyJ9.NPVDAEs5G6mhALlq4LOGqQ"