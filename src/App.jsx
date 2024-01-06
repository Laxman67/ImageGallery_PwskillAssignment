import "./App.css";
import CustomRoutes from "./routes/CustomRoutes";
import { Link } from "react-router-dom/dist";

function App() {
  return (
    <div className="container">
      <Link to="/" className="home-button">
        Gallery Hub
      </Link>
      <CustomRoutes />
    </div>
  );
}

export default App;
