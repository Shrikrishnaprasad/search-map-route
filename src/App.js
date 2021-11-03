import Container from "./Container";
import { AppProvider } from "./context";
import "./styles.css";

export default function App() {
  return (
    <AppProvider>
      <div className="App">
        <div className="main">
          <div className="main-home">
            <button className="main-home-btn" type="button">
              HOME
            </button>
          </div>
          <Container />
        </div>
      </div>
    </AppProvider>
  );
}
