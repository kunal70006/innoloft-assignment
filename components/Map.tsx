"use client";

import { Map } from "@/types";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useState } from "react";

const Map: React.FC<Map> = ({ center }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const containerStyle = {
    width: "100%",
    height: "300px",
  };

  const [map, setMap] = useState<google.maps.Map | null>(null);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={(map) => {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map);
      }}
      onUnmount={() => setMap(null)}
    />
  ) : (
    <></>
  );
};

export default Map;
