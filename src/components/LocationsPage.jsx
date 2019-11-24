import React from 'react';
import {Container, Row, Col} from 'reactstrap';

import LocationsBar from '../components/LocationsBar';
import LocationsMap from '../components/LocationsMap';
import LocationsList from '../components/LocationsList';
 
const  LocationsPage = ( {TOKEN, viewport, setViewport, shops,
                selectedShop, setSelectedShop, highlightedShop, handleHighlightShop} ) => (
    <Container className="locations">
        <Row>
            <h2>BikeGalaxy Locations:</h2>
        </Row>
        <Row>
            <Col md="12" lg="8">
                <LocationsBar
                    viewport={viewport}
                    setViewport={setViewport}
                />
                <LocationsMap
                    TOKEN={TOKEN}
                    viewport={viewport}
                    setViewport={setViewport}
                    shops={shops}
                    selectedShop={selectedShop}
                    setSelectedShop={setSelectedShop}
                />
            </Col>
            <Col md="12" lg="4">
                <LocationsList
                    viewport={viewport}
                    setViewport={setViewport}
                    shops={shops} 
                    highlightedShop={highlightedShop}
                    handleHighlightShop={handleHighlightShop}
                />
            </Col>
        </Row>         
    </Container>
)    

export default LocationsPage;