import { Fragment } from "react";
import { useGlobalContext } from "./context";

export default function LocationList() {
  const { coordinates } = useGlobalContext();
  return (
    <>
      <div className="main-coordinates-list">
        {coordinates.length < 2 && (
          <div className="coordinates">
            <div className="coordinates-number">My </div>
            <div className="coordinates-location mycoordinates">
              Co-ordinates{" "}
            </div>
            <div className="coordinates-latlon coordinates-lat default-text">
              DEFAULT
            </div>
            <div className="coordinates-latlon default-text">DEFAULT </div>
          </div>
        )}
        {coordinates.length === 0 && (
          <>
            <div className="coordinates">
              <div className="coordinates-number">1) </div>
              <div className="coordinates-location">----- </div>
              <div className="coordinates-latlon coordinates-lat default-hyphen">
                -----{" "}
              </div>
              <div className="coordinates-latlon default-hyphen">----- </div>
            </div>
          </>
        )}

        {coordinates.map((location, index) => (
          <Fragment key={index}>
            <div className="coordinates">
              <div className="coordinates-number">{index + +1}) </div>
              <div className="coordinates-location">{location.location} </div>
              <div className="coordinates-latlon coordinates-lat">
                {location.lat}{" "}
              </div>
              <div className="coordinates-latlon">{location.lan} </div>
            </div>
          </Fragment>
        ))}
        {coordinates.length !== 2 && coordinates.length < 3 && (
          <div className="coordinates">
            <div className="coordinates-number">2) </div>
            <div className="coordinates-location">----- </div>
            <div className="coordinates-latlon coordinates-lat default-hyphen">
              -----{" "}
            </div>
            <div className="coordinates-latlon default-hyphen">----- </div>
          </div>
        )}
        {coordinates.length !== 3 && coordinates.length < 4 && (
          <div className="coordinates">
            <div className="coordinates-number">3) </div>
            <div className="coordinates-location">----- </div>
            <div className="coordinates-latlon coordinates-lat default-hyphen">
              -----{" "}
            </div>
            <div className="coordinates-latlon default-hyphen">----- </div>
          </div>
        )}
        {coordinates.length !== 4 && coordinates.length < 5 && (
          <div className="coordinates">
            <div className="coordinates-number">4) </div>
            <div className="coordinates-location">----- </div>
            <div className="coordinates-latlon coordinates-lat default-hyphen">
              -----{" "}
            </div>
            <div className="coordinates-latlon default-hyphen">----- </div>
          </div>
        )}
        {coordinates.length !== 5 && coordinates.length < 5 && (
          <div className="coordinates">
            <div className="coordinates-number">5) </div>
            <div className="coordinates-location">----- </div>
            <div className="coordinates-latlon coordinates-lat default-hyphen">
              -----{" "}
            </div>
            <div className="coordinates-latlon default-hyphen">----- </div>
          </div>
        )}
      </div>
    </>
  );
}
