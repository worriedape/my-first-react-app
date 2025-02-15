/* import React from "react"; */
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Important: Leaflet CSS

const BusRouteCard = ({ route }) => {
  // Default center of the map (London in this example, adjust as needed)
  const mapCenter = [51.505, -0.09];

  return (
    <div className="bus-card">
      <h3>{route.routeName}</h3>
      <p>Route Number: {route.routeNumber}</p>
      <MapContainer
        center={mapCenter}
        zoom={13}
        scrollWheelZoom={false} // Disable zoom on scroll for better UX in cards
        style={{ height: "200px", width: "100%" }} // Adjust map size here
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Polyline positions={route.routeCoordinates} color="red" weight={5} />
      </MapContainer>
      <p className="description">{route.routeDescription}</p>
    </div>
  );
};

export default BusRouteCard;
