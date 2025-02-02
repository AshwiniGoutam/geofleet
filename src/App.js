import "./App.css";
import "./global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/page";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms-and-condition";
import FleetManagment from "./pages/fleet-mangment/page";
import RouteAsService from "./pages/route-as-service/page";
import SupervisorApp from "./pages/supervisor-app/page";
import DriverMobileApp from "./pages/driver-mobile-app/page";
import SimTracking from "./pages/sim-tracker/page";
import TMS from "./pages/tms/page";
import Intigration from "./pages/intigration/page";
import { useLayoutEffect } from "react";
import FieldForce from "./pages/fieldforce-management/page";

const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return children;
};

function App() {
  return (
    <>
      {/* <Home /> */}
      <BrowserRouter>
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/delivery-management" element={<TMS />} />
            <Route path="/integrations" element={<Intigration />} />
            <Route path="/fieldforce-management" element={<FieldForce />} />
            <Route path="/route-optimization" element={<RouteAsService />} />
            <Route path="/supervisor-app" element={<SupervisorApp />} />
            <Route path="/driver-mobile-app" element={<DriverMobileApp />} />
            <Route path="/sim-tracking" element={<SimTracking />} />
            <Route path="/fleet-management" element={<FleetManagment />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms-and-condition" element={<Terms />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
