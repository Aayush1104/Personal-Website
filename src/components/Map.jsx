import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [80, -52.0, 0],
        center: [-5, -3],
        scale: 800
      }}
      style={{width: "100%", height: "100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="#2C133B"
        stroke="#CCC"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-80.5204, 43.4643]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#8C333F",
          strokeWidth: 1,
          strokeLinecap: "round"
        }}
      >
        <text x="-5" y="-3" textAnchor="end" alignmentBaseline="middle" fill="#8C333F">
          {"Waterloo"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
