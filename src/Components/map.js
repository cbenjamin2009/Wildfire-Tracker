import {useState} from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './locationMarker';
import LocationInfoBox from './locationInfoBox';
// this may not be needed
require('dotenv').config();

const Map = ({eventData, center, zoom}) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map(ev => {
        if(ev.categories[0].id === 8){
            return  <LocationMarker key={ev.id} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({id: ev.id, title: ev.title, date: ev.geometries[0].date})} />
        }
        return null
    })


    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{key: `AIzaSyAU_wFXXArQnydl_oggBsD0Q8d7vnNHzpU`}}
                defaultCenter={ center}
                defaultZoom={zoom}
            >
               {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat:42.3265,
        lng:-122.8756
    },
    zoom: 6
}

export default Map
