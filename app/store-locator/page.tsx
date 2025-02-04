"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LattLngExpression } from "leaflet";

function Map() {
  const position: LattLngExpression = [37.5665, 126.978]; // Example: Seoul, Korea

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>Seoul, South Korea</Popup>
      </Marker>
    </MapContainer>
  );
}

function page() {
  return (
    <div>
      <Map />
    </div>
  );
}

export default page;
