import { Fragment, useState } from "react";
import { useGlobalContext } from "./context";
import LocationList from "./LocationList";

export default function Container() {
  const {
    location,
    setLocation,
    coordinates,
    setCoordinates
  } = useGlobalContext();
  const [lat, setLat] = useState(12.972442);
  const [lan, setLan] = useState(77.580643);

  const addCoordinates = () => {
    setCoordinates((prev) => {
      if (prev.length === 5) {
        prev.shift();
      }
      return [...prev, { location, lat, lan }];
    });
    setLocation("");
  };

  const showRoute = () => {};

  return (
    <>
      <div className="main-container">
        <div className="main-inputs">
          <div className="main-input main-input-location">
            <div className="input-label">Location Name</div>
            <div className="inputs">
              <input
                className="location-input inputs"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
              />
            </div>
          </div>
          <div className="main-input main-input-latlog">
            <div className="input-label">Enter Lattitude</div>
            <div className="inputs">
              <input className="latlog-input inputs" placeholder="Lat" />
            </div>
          </div>
          <div className="main-input main-input-latlog">
            <div className="input-label">Enter Longitude</div>
            <div className="inputs">
              <input className="latlog-input inputs" placeholder="Lon" />
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
          <div className="main-map"></div>
        </div>
      </div>
    </>
  );
}
