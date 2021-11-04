import { Fragment, useEffect, useRef, useState } from "react";
import { useGlobalContext } from "./context";
import LocationList from "./LocationList";
import MyMap from "./MyMap";
import PlacesAutocomplete, { getLatLng } from "react-places-autocomplete";

export default function Container() {
  const {
    location,
    setLocation,
    coordinates,
    setCoordinates
  } = useGlobalContext();

  const [lat, setLat] = useState(0);
  const [lan, setLan] = useState(0);
  // const handleChange = (value) => {
  //   setLocation(value);
  // };

  // const handleSelect = (value) => {
  //   setLocation(value);
  // };
  const addCoordinates = () => {
    setCoordinates((prev) => {
      if (prev.length === 5) {
        prev.shift();
      }
      return [...prev, { location, lat, lan }];
    });
    setLocation("");
    setLat(0);
    setLan(0);
  };

  const showRoute = () => {};
  function getLatLng() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=5a09bc6cc263cdbbb192656fd8a68edf`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.coord) {
          setLat(data.coord.lat);
          setLan(data.coord.lon);
        }
      })
      .catch((err) => console.error(err));
  }
  useEffect(() => {
    getLatLng();
  }, [location]);
  return (
    <>
      <div className="main-container">
        <div className="main-inputs">
          <div className="main-input main-input-location">
            <div className="input-label">Location Name</div>
            <div className="inputs">
              {/* <PlacesAutocomplete
                value={location}
                onChange={handleChange}
                onSelect={handleSelect}
              >
                {({
                  getInputProps,
                  suggestions,
                  getSuggestionItemProps,
                  loading
                }) => (
                  <div>
                    <input
                      className="location-input inputs input"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Location"
                      {...getInputProps()}
                    />

                    <div>
                      {loading && <div>Loading...</div>}
                      {suggestions.map((suggestion) => {
                        const style = suggestion.active
                          ? { cursor: "pointer" }
                          : { cursor: "pointer" };

                        return (
                          <div
                            {...getSuggestionItemProps(suggestion, { style })}
                          >
                            {suggestion.description}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
            */}
              <input
                className="location-input inputs input"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
              />
            </div>
          </div>
          <div className="main-input main-input-latlog">
            <div className="input-label">Enter Lattitude</div>
            <div className="inputs">
              <input
                className="latlog-input inputs"
                value={lat === 0 ? "" : lat}
                placeholder="Lat"
                readOnly
              />
            </div>
          </div>
          <div className="main-input main-input-latlog">
            <div className="input-label">Enter Longitude</div>
            <div className="inputs">
              <input
                className="latlog-input inputs"
                value={lan === 0 ? "" : lan}
                placeholder="Lon"
                readOnly
              />
            </div>
          </div>
          <div className="main-button ">
            {!location ? (
              <button
                type="button"
                disabled={true}
                style={{
                  backgroundColor: "#FFFFFF",
                  opacity: "0.49"
                }}
              >
                SUBMIT
              </button>
            ) : (
              <button type="button" onClick={addCoordinates}>
                ADD
              </button>
            )}
          </div>
        </div>

        <div className="main-results">
          <div className="main-coordinates">
            <div className="main-coordinates-text">
              <b>ALL CO-ORDINATES:</b>
            </div>
            <LocationList />
            <div className="main-coordinates-button">
              {coordinates.length === 0 ? (
                <button className="disable-btn">Show Route</button>
              ) : (
                <button onClick={showRoute}>Show Route</button>
              )}
            </div>
          </div>
          <div className="main-map">
            <MyMap />
          </div>
        </div>
      </div>
    </>
  );
}
