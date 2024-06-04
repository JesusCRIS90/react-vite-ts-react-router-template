import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { NavigationRoutes } from "./routes/NavigationRoutes";

function App() {
  return (
    <BrowserRouter>
      <NavigationRoutes />
    </BrowserRouter>
  );
}

export default App;
