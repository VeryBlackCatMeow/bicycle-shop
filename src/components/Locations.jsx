import React, {Component} from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import ReactMapGL, {NavigationControl, FullscreenControl} from 'react-map-gl';

import '../styles/locations.scss';
 
const TOKEN = 'pk.eyJ1IjoiZGVhdGhveHkiLCJhIjoiY2syejFscno5MDQ5azNvanc5N2g4ZnJrbyJ9.NPVDAEs5G6mhALlq4LOGqQ';
 
class  Locations extends Component {
    constructor() {
        super();
        this.state = {
            viewport: {
                longitude: 36.2, latitude: 49.9, zoom: 8,
                width: '100%', height: '100%', 
                pitch: 35, bearing: 7.6
            },
            mounted: false
          };
    }

    componentDidMount () {
        this.setState({ mounted: true })
      }
 
    render() {
        const { mounted, viewport} = this.state;
        return (
            <Container className="locations">
                <Row>
                    <h2>BikeGalaxy Locations:</h2>
                </Row>
                <Row>
                    <Col xs="7">
                        <div className='sidebarStyle'>
                            Longitude: {viewport.longitude.toFixed(2)} |
                            Latitude: {viewport.latitude.toFixed(2)} |
                            Zoom: {viewport.zoom.toFixed(2)}
                        </div>
                        <div className="mapContainer">
                            <ReactMapGL {...viewport} //onTouchMove={e=>this.handler(e)}
                                mapboxApiAccessToken={TOKEN} mapStyle='mapbox://styles/mapbox/streets-v11'
                                scrollZoom={false}
                                onViewportChange={ viewport => { if(mounted) this.setState({viewport}) } }>
                                <div style={{position: 'absolute', right: 1, top: 2}}>
                                    <NavigationControl />
                                </div>
                                <div style={{position: 'absolute', left: 2, top: 2}}>
                                    <FullscreenControl container={document.querySelector('body')}/>
                                </div>
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
    //eifel: long 2.295258, lat 48.857896     Statue of Liberty -74.044583, 40.689167,