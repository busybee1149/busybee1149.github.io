import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React from 'react';
import { MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet';

// Fix default icon issue in Leaflet with Webpack/Vite
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
     iconUrl,
     shadowUrl: iconShadow,
     iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const travelLocations = [
     { name: 'India', position: [20.5937, 78.9629] },
     { name: 'Italy', position: [41.8719, 12.5674] },
     { name: 'Maldives', position: [3.2028, 73.2207] },
     { name: 'Mauritius', position: [-20.3484, 57.5522] },
     { name: 'Australia', position: [-25.2744, 133.7751] },
     { name: 'Greece', position: [39.0742, 21.8243] },
     { name: 'Norway', position: [60.472, 8.4689] },
     { name: 'Scotland', position: [56.4907, -4.2026] },
     { name: 'Sweden', position: [60.1282, 18.6435] },
     { name: 'USA', position: [37.0902, -95.7129] },
     { name: 'Peru', position: [-9.19, -75.0152] },
     { name: 'Ecuador', position: [-1.8312, -78.1834] },
     { name: 'Denmark', position: [56.2639, 9.5018] },
     { name: 'Canada', position: [56.1304, -106.3468] },
     { name: 'Mexico', position: [23.6345, -102.5528] },
     { name: 'Tanzania', position: [-6.3690, 34.8888] },
     { name: 'Austria', position: [47.5162, 14.5501] },
     { name: 'Germany', position: [51.1657, 10.4515] },
     { name: 'Switzerland', position: [46.8182, 8.2275] },
     { name: 'Bahamas', position: [25.0343, -77.3963] },
     { name: 'Costa Rica', position: [9.7489, -83.7534] },
     { name: 'Spain', position: [40.4637, -3.7492] },
     { name: 'UAE', position: [23.4241, 53.8478] },
];

const TravelMap: React.FC = () => (
     <div style={{ width: '100%', maxWidth: 700, margin: '0 auto', height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#2b6cb0', margin: '1rem 0 0.5rem 0', letterSpacing: '0.5px' }}>
               Countries Visited: {travelLocations.length}
          </div>
          <MapContainer center={[20, 0]} zoom={2} style={{ width: '100%', height: 400, borderRadius: 12 }} scrollWheelZoom={false}>
               <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               />
               {travelLocations.map(({ name, position }) => (
                    <Marker key={name} position={position as [number, number]}>
                         <Tooltip>{name}</Tooltip>
                    </Marker>
               ))}
          </MapContainer>
          <div className="country-list-scroll">
               {travelLocations.map(({ name }) => (
                    <div className="country-pill" key={name}>{name}</div>
               ))}
          </div>
     </div>
);

export default TravelMap; 