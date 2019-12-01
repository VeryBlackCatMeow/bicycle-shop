import React from 'react';
import {  Button } from 'reactstrap';
import { FlyToInterpolator } from 'react-map-gl';

const LocationsBar = ( {viewport, setViewport} ) => (
    <div className="loc-bar d-flex justify-content-between align-items-center">
        <span>
            <span className="loc-coor">Latitude: {viewport.latitude.toFixed(4)}</span>&nbsp;&nbsp;&nbsp;
            <span className="loc-coor">Longitude: {viewport.longitude.toFixed(4)}</span>&nbsp;&nbsp;&nbsp;
            <span className="loc-coor">Zoom: {viewport.zoom.toFixed(2)}</span>
        </span>
        
        <Button color="primary"
                onClick={() => {setViewport({
                    latitude: 5.2046,
                    longitude: -25.0162,
                    zoom: 1.1,
                    transitionDuration: 2000,
                    transitionInterpolator: new FlyToInterpolator({curve: 2.6})})}}>
            Reset
        </Button>
    </div>
);

export default LocationsBar;