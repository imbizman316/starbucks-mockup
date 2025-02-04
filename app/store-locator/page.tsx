"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Box, Button, Input } from "@mui/material";

function LocationFinder() {
  return (
    <Box
      sx={{
        flex: 1,
      }}
    >
      <Box>
        <Button>Pickup</Button>
        <Button>Delivery</Button>
      </Box>
      <Box>
        <Input placeholder="Find a store" />
        <Button>Filter</Button>
      </Box>
    </Box>
  );
}

function Map() {
  const position: LatLngExpression = [37.5665, 126.978]; // Example: Seoul, Korea
  // const position: [number, number] = [37.5665, 126.978]; // Example: Seoul, Korea

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "85vh", flex: 2 }}
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
    <Box sx={{ display: "flex" }}>
      <LocationFinder />
      <Map />
    </Box>
  );
}

export default page;
