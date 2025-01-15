import "./App.css";
import "./global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms-and-condition";

function App() {
  return (
    <>
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-and-condition" element={<Terms />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;