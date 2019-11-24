import React, {useState, useEffect} from 'react';

import locations from '../locationsData.json';
import LocationsPage from '../components/LocationsPage'
import '../styles/locations.scss';
 
const Locations = () => {
    const [viewport, setViewport] = useState({
        latitude: 5.2046,
        longitude: -25.0162,
        zoom: 1,
        //pitch: 35, bearing: 7.6
    });
    const [selectedShop, setSelectedShop] = useState(null);
    const [highlightedShop, handleHighlightShop] = useState(null);

    useEffect( () => {
        const listener = e => {
            if (e.key === "Escape") {
              setSelectedShop(null);
            }
        };
        window.addEventListener("keydown", listener);
    
        return () => {
            window.removeEventListener("keydown", listener);
        };
    }, []);
 
    return (
        <LocationsPage
            TOKEN={TOKEN}
            viewport={viewport}
            setViewport={setViewport}
            shops={locations.sources.points.data.features}
            selectedShop={selectedShop}
            setSelectedShop={setSelectedShop}
            highlightedShop={highlightedShop}
            handleHighlightShop={handleHighlightShop}
        /> 
    )
}

export default Locations;



// componentDidMount() {
    //     const map = new mapboxgl.Map({
    //         container: this.mapContainer,
    //         style: 'mapbox://styles/mapbox/streets-v11',
    //         center: [lng, lat],
    //         zoom: zoom,
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