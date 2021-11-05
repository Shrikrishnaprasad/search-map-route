import { Fragment, useEffect, useState } from "react";
import ReactMapGL, {
  Marker,
  NavigationControl,
  GeolocateControl
} from "react-map-gl";
import { RiMapPin2Fill } from "react-icons/ri";

import { useGlobalContext } from "./context";

export default function MapSection() {
  const { coordinates } = useGlobalContext();
  const [list, setList] = useState(coordinates);

  const [viewport, setViewport] = useState({
    latitude: 20,
    longitude: 78,
    zoom: 5
  });
  const navControlStyle = {
    right: 10,
    top: 100
  };
  const geolocateControlStyle = {
    right: 10,
    top: 50
  };
  useEffect(() => {
    setList(coordinates);
  }, [coordinates.length]);
  return (
    <>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        width="100%"
        height="100%"
        transitionDuration="200"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        <GeolocateControl
          style={geolocateControlStyle}
          positionOptions={{ enableHighAccuracy: true }}
          fitBoundsOptions={{ maxZoom: 7 }}
          auto
        />
        <NavigationControl style={navControlStyle} />
        {list.length > 0 &&
          list.map((location, index) => (
            <Fragment key={index}>
              <Marker
                latitude={location.lat}
                longitude={location.lan}
                offsetLeft={-3.5 * viewport.zoom}
                offsetTop={-7 * viewport.zoom}
              >
                <RiMapPin2Fill style={{ color: "red", fontSize: "30px" }} />
              </Marker>
            </Fragment>
          ))}
      </ReactMapGL>
    </>
  );
}
