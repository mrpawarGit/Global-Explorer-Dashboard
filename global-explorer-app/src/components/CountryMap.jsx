import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./CountryMap.css";

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

export default function CountryMap({ latlng, countryName, capital }) {
  if (!latlng || latlng.length !== 2) {
    return <div className="map-error">Map location unavailable</div>;
  }

  return (
    <div className="country-map">
      <h3>🗺️ Location</h3>
      <MapContainer
        center={latlng}
        zoom={5}
        scrollWheelZoom={false}
        style={{ height: "400px", width: "100%", borderRadius: "8px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={latlng}>
          <Popup>
            <strong>{countryName}</strong>
            <br />
            Capital: {capital}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
