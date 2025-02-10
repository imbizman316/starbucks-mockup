import { LatLngExpression } from "leaflet";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map() {
  const position: LatLngExpression = [37.5665, 126.978]; // Example: Seoul, Korea
  // const position: [number, number] = [37.5665, 126.978]; // Example: Seoul, Korea

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{
        height: "85vh",
        width: "85vh",
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>Seoul, South Korea</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
