import React from 'react';
import ReactMapGL, {NavigationControl, FullscreenControl, Marker, Popup} from 'react-map-gl';

const LocationsMap = ( {TOKEN, viewport, setViewport, shops, selectedShop, setSelectedShop} ) => (
    <div className="loc-map">
        <ReactMapGL {...viewport}
                mapboxApiAccessToken={TOKEN}
                mapStyle='mapbox://styles/mapbox/streets-v11'
                width='100%' height='100%' 
                onViewportChange={ viewport => {setViewport(viewport); } }>
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
                        longitude={shop.geometry.coordinates[1]}>
                        <div className="marker-button"
                                onClick={e => {
                                    e.preventDefault();
                                    setSelectedShop(shop);
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
                            setSelectedShop(null);
                        }}>
                    <h5>{selectedShop.properties.name}</h5>
                    <span>{selectedShop.properties.city}</span><br/>
                    <span>{selectedShop.properties.address}</span><br/>
                    <span>Call Us: {selectedShop.properties.call}</span><br/>
                    <span>Hours: {selectedShop.properties.hours}</span><br/>
                </Popup>
                :
                null
            }
        </ReactMapGL>
    </div>
);

export default LocationsMap;