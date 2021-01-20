import React from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import Footer from "./Footer";


function MapPlaceholder() {
    return (
      <p>
        My Travel Map.
        <noscript>You need to enable JavaScript to see this map.</noscript>
      </p>
    )
  }

function Travelmap() {
    return (
        <div>
        <MapContainer center={[10.9591, 76.8988]} zoom={2} scrollWheelZoom={false} style={{ height: "60vh" }} placeholder={<MapPlaceholder />}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[10.9591, 76.8988]}>
                <Tooltip>
                    Coimbatore <br /> Home.
                </Tooltip>
            </Marker>

            <Marker position={[51.51, -0.06]}>
                 <Tooltip> London </Tooltip>
            </Marker>

            <Marker position={[-13.52264, -71.96734]}>
                 <Tooltip> Cusco </Tooltip>
            </Marker>
            <Marker position={[-13.1631, -72.5450]}>
                 <Tooltip> Machu Picchu </Tooltip>
            </Marker>
        </MapContainer>

        <div>
            <h1> Places I have travelled </h1>
                <ol>
                    <li> London </li>
                    <li> Cusco </li>
                    <li> Machhu Picchu </li>
                </ol>
        </div>
        <Footer />
        </div>
    )
}

export default Travelmap;