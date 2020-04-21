import React from 'react';
import { Map, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';

const MAX_GEO = 400;
const MIN_GEO = -400;
export default class TestSiteMap extends React.Component {
    render() {
        let { items, zipLatLng } = this.props;
        

        items = items.map((item) => {
            item.shortName = item.name.substring(0, 12);
            if (item.name && item.name.length > 12) item.shortName += '...';
            return item;
        });

        let mapCenterCoords = null;
        let bounds = undefined;


        if(items && Array.isArray(items) && items.length > 0){
            mapCenterCoords = items[0];

            let maxLat = MIN_GEO;
            let maxLng = MIN_GEO;
            let minLng = MAX_GEO;
            let minLat = MAX_GEO;
            items.forEach(item => {
                if(item.lat > maxLat) maxLat = item.lat;
                if(item.lat < minLat) minLat = item.lat;
                if(item.lng > maxLng) maxLng = item.lng;
                if(item.lng < minLng) minLng = item.lng;
            });
            minLat = minLat + 0.005;
            maxLat = maxLat + 0.005;
            minLng = minLng + 0.005;
            maxLng = maxLng + 0.005;

            bounds = [[maxLat, minLng], [minLat, maxLng]];
        }
       

        if (zipLatLng && Array.isArray(zipLatLng)) {
            mapCenterCoords = zipLatLng;
        }
        return (
            <Map
                center={mapCenterCoords}
                zoom={10}
                zoomControl={true}
                dragging={true}
                bounds={bounds}
                className='map'
            >
                <TileLayer
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {items.map((item, index) => (
                    <Marker position={{ lat: item.lat, lng: item.lng }}>
                        <Tooltip permanent={true}>
                            <h6>{index + 1 }</h6>
                        </Tooltip>
                        <Popup>
                            <h6>{index + 1 + '. ' + item.name}</h6>
                            <div>
                                {item.address}, {item.city}, {item.state}
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </Map>
        );
    }
}
