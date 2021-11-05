import React, { Fragment, useEffect, useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  DirectionsService,
  DirectionsRenderer,
  Marker
} from "@react-google-maps/api";
import { useGlobalContext } from "./context";

const containerStyle = {
  width: "100%",
  height: "100%"
};

const center = {
  lat: 20.5937,
  lng: 78.9629
};

function MyMap() {
  const { coordinates } = useGlobalContext();
  const [list, setList] = useState(coordinates);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBvmOwC_T0nWKRTS4migcze7pBFYw4rpRc"
  });

  const [map, setMap] = React.useState(null);

  // const [res, setRes] = React.useState(null);
  // const [directions, setDirections] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  // const directionsCallback = React.useCallback((res) => {
  //   if (res !== null) {
  //     if (res.status === "OK") {
  //       setRes(res);
  //       console.log(res);
  //     } else {
  //       console.log("res: ", res);
  //     }
  //   }
  // }, []);

  useEffect(() => {
    setList(coordinates);
  }, [coordinates.length]);
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={4}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <>
        {list.length > 0 &&
          list.map((location, index) => (
            <Fragment key={index}>
              <Marker position={{ lat: location.lat, lng: location.lan }} />
            </Fragment>
          ))}

        {/* <DirectionsService
          // required
          options={{
            // eslint-disable-line react-perf/jsx-no-new-object-as-prop
            destination: "coimbatore",
            origin: "chennai",
            travelMode: "DRIVING"
          }}
          // required
          callback={directionsCallback}
          // optional
          onLoad={(directionsService) => {
            console.log(
              "DirectionsService onLoad directionsService: ",
              directionsService
            );
          }}
          // optional
          onUnmount={(directionsService) => {
            console.log(
              "DirectionsService onUnmount directionsService: ",
              directionsService
            );
          }}
        /> */}

        {/* {res !== null && (
          <DirectionsRenderer
            // required
            options={{
              // eslint-disable-line react-perf/jsx-no-new-object-as-prop
              directions: res
            }}
            // optional
            onLoad={(directionsRenderer) => {
              console.log(
                "DirectionsRenderer onLoad directionsRenderer: ",
                directionsRenderer
              );
            }}
            // optional
            onUnmount={(directionsRenderer) => {
              console.log(
                "DirectionsRenderer onUnmount directionsRenderer: ",
                directionsRenderer
              );
            }}
          />
        )} */}
      </>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyMap);
