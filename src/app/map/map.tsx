import L from 'leaflet';
import { Marker, Popup, MapContainer, TileLayer } from 'react-leaflet'

import "leaflet/dist/leaflet.css";
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useState } from 'react';

const icon = L.icon({ iconUrl: markerIcon.src, shadowUrl: iconShadow.src})

export default function Map() {
    const [selected, setSelected] = useState(null);
    const position1 = [45.4, -75.7]
    const position2 = [45.5, -75.8]

    return (
      <div className='flex flex-row'>

      <MapContainer  className='flex-1 w-screen h-screen' center={position1} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        <Marker icon={icon} position={position1} eventHandlers={{click: (evt) => setSelected({ site: 'parking lot', hours: 10, crewSize: 4})}}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Marker icon={icon} position={position2} eventHandlers={{click: (evt) => setSelected({ site: 'house', hours: 8, crewSize: 3})}}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>

        {/* side info */}
        <div className="w-96">
          Info
          {JSON.stringify(selected, null, 2)}
        </div>
          </div>

    )
}