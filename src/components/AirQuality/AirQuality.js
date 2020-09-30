import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxLanguage from "@mapbox/mapbox-gl-language";
import "./AirQuality.scss";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2VyaGlpbm9jaCIsImEiOiJja2ZvZjF0NG0yaHYxMnJudnN3ejBqZW1lIn0.08BxLpUm1LosFbjCw3w_DA";

const AirQuality = () => {
  const mapContainer = useRef(null);
  const [loacationInfo] = useState({
    lng: 31,
    lat: 48.3,
    zoom: 5.2,
  });
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v10",
      center: [loacationInfo.lng, loacationInfo.lat],
      zoom: loacationInfo.zoom,
    });
    map.addControl(new MapboxLanguage());
  }, [loacationInfo.lng, loacationInfo.lat, loacationInfo.zoom]);
  return (
    <section className="air-q container" id="index">
      <h2 className="air-q-title">
        Индекс качества воздуха в режиме реального времени
      </h2>
      <div className="air-q-map" ref={mapContainer} />
      <p className="air-q-text">
        Для того чтобы узнать уровень загрязнения атмосферного воздуха (качество
        воздуха) в городе Киев, необходимо выбрать соответствующую станцию
        мониторинга на карте выше.
      </p>
    </section>
  );
};

export default AirQuality;
