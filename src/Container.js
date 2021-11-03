export default function Container() {
  return (
    <>
      <div className="main-container">
        <div className="main-inputs">
          <div className="main-input main-input-location">
            <div className="input-label">Location Name</div>
            <div className="inputs">
              <input className="location-input inputs" placeholder="Location" />
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
            <button type="button" disabled="true">
              SUBMIT
            </button>
          </div>
        </div>

        <div className="main-results">
          <div className="main-coordinates">
            <div className="main-coordinates-text">ALL CO-ORDINATES:</div>
            <div className="main-coordinates-list">
              <div>
                <div className="coordinates">
                  <div className="coordinates-number">My </div>
                  <div className="coordinates-location mycoordinates">
                    {" "}
                    Co-ordinates{" "}
                  </div>
                  <div className="coordinates-latlon coordinates-lat default-text">
                    DEFAULT
                  </div>
                  <div className="coordinates-latlon default-text">
                    DEFAULT{" "}
                  </div>
                </div>
                <div className="coordinates">
                  <div className="coordinates-number">1) </div>
                  <div className="coordinates-location">Bengaluru </div>
                  <div className="coordinates-latlon coordinates-lat">123 </div>
                  <div className="coordinates-latlon">435 </div>
                </div>
                <div className="coordinates">
                  <div className="coordinates-number">2) </div>
                  <div className="coordinates-location">--- </div>
                  <div className="coordinates-latlon coordinates-lat">--- </div>
                  <div className="coordinates-latlon">--- </div>
                </div>
                <div className="coordinates">
                  <div className="coordinates-number">3) </div>
                  <div className="coordinates-location">--- </div>
                  <div className="coordinates-latlon coordinates-lat">--- </div>
                  <div className="coordinates-latlon">--- </div>
                </div>
                <div className="coordinates">
                  <div className="coordinates-number">4) </div>
                  <div className="coordinates-location">--- </div>
                  <div className="coordinates-latlon coordinates-lat">--- </div>
                  <div className="coordinates-latlon">--- </div>
                </div>
                <div className="coordinates">
                  <div className="coordinates-number">5) </div>
                  <div className="coordinates-location">--- </div>
                  <div className="coordinates-latlon coordinates-lat">--- </div>
                  <div className="coordinates-latlon">--- </div>
                </div>
              </div>
            </div>
            <div className="main-coordinates-button">
              <button>Show Route</button>
            </div>
          </div>
          <div className="main-map"></div>
        </div>
      </div>
    </>
  );
}
