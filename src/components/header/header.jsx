import React, { useEffect, useState } from "react";
import "./header.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useLocation } from "react-router-dom";
import HumbergMenu from "../HumbergMenu";
import ArrowDown from "../arrowDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { Accordion } from "react-bootstrap";
import { faMapMarked } from "@fortawesome/free-solid-svg-icons";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import {
  MapPin,
  Radio,
  Smartphone,
  ArrowRight,
  DollarSign,
  Clock,
  Package,
  User,
  LayoutGrid,
  Route,
  Blocks,
  LocateFixed,
  AudioLines,
  AudioWaveform,
  TabletSmartphone,
  Users,
  Receipt,
  Bell,
  Navigation,
  MapPinHouse,
  SquareKanban,
  MonitorSmartphone,
  PackageCheck,
  Contact,
  ChartSpline,
  Bike,
  FileText,
  Link2Icon,
  Navigation2,
  Waypoints,
  AlarmSmoke,
  Car,
  Component,
} from "lucide-react";

export default function Header({ ShowHeader, border, hideWorks }) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeKey, setActiveKey] = useState("first");

  useEffect(() => {
    if (location.pathname === "/fleet-management") setActiveKey("first");
    else if (location.pathname === "/delivery-management")
      setActiveKey("second");
    else if (location.pathname === "/fieldforce-management")
      setActiveKey("third");
    else if (location.pathname === "/route-optimization")
      setActiveKey("fourth");
  }, [location]);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => {
      link.addEventListener("click", handleScrolled);
    });

    // Cleanup listener
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScrolled);
      });
    };
  }, []);

  const handleScrolled = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = 50; // Adjust the offset as needed
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`header ${
          isScrolled || ShowHeader ? "header-scrolled" : ""
        }`}
        style={{ border: border ? "1px solid #ccc" : "" }}
      >
        <div className="container-fluid">
          <div>
            <Link to="/" className="logo-div">
              <img src="../assets/images/logo.svg" alt="logo" width="200px" />
            </Link>
          </div>

          <ul className="desktop-menu">
            {hideWorks && (
              <li>
                <Link to="/">Home</Link>
              </li>
            )}
            <li>
              <a href="#features">
                Solutions <FontAwesomeIcon icon={faChevronDown} />{" "}
              </a>

              <div class="mega-menu">
                <Tab.Container
                  activeKey={activeKey}
                  onSelect={(key) => setActiveKey(key)}
                >
                  <Row className="w-100 py-4">
                    <Col sm={4}>
                      <h5>Our Solutions</h5>
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                          <Nav.Link
                            eventKey="first"
                            onMouseEnter={() => setActiveKey("first")}
                            as={Link}
                            to="/fleet-management"
                          >
                            <div className="flex items-center gap-2">
                              <MapPin className="w-5 h-5" />
                              Fleet Management
                            </div>
                            <ArrowRight className="w-5 h-5" />
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="second"
                            onMouseEnter={() => setActiveKey("second")}
                            as={Link}
                            to="/delivery-management"
                          >
                            <div>
                              <Package className="w-5 h-5" />
                              Delivery Management
                            </div>
                            <ArrowRight className="" />
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="third"
                            onMouseEnter={() => setActiveKey("third")}
                            as={Link}
                            to="/fieldforce-management"
                          >
                            <div>
                              <MapPinHouse />
                              Fieldforce Management
                            </div>
                            <ArrowRight className="" />
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="fourth"
                            onMouseEnter={() => setActiveKey("fourth")}
                            as={Link}
                            to="/route-optimization"
                          >
                            {" "}
                            <div>
                              <Radio className="w-5 h-5" />
                              Route Optimization
                            </div>
                            <ArrowRight className="" />
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={8}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <div className="tab-section-row">
                            <div className="col-6">
                              <div class="mega-menu-products">
                                <Link
                                  to="/fleet-management#iot-gps-tracking"
                                  class="product-item"
                                >
                                  <div class="product-content">
                                    <LocateFixed />
                                    <div>
                                      <h3> IOT GPS tracking →</h3>
                                      <p>
                                        Monitor vehicle movements with precision
                                        using advanced GPS and IoT technology
                                        for seamless fleet visibility.
                                      </p>
                                    </div>
                                  </div>
                                </Link>

                                <Link
                                  to="/fleet-management#sim-based-tracking"
                                  class="product-item"
                                >
                                  <div class="product-content">
                                    <AudioLines />
                                    <div>
                                      <h3>Sim Based Tracking →</h3>
                                      <p>
                                        Track fleet locations directly through
                                        SIM networks—no extra hardware required,
                                        just seamless connectivity
                                      </p>
                                    </div>
                                  </div>
                                </Link>

                                <Link
                                  to="/fleet-management#driver-mobile-app-tracking"
                                  class="product-item"
                                >
                                  <div class="product-content">
                                    <TabletSmartphone />
                                    <div>
                                      <h3>Driver Mobile App Tracking →</h3>
                                      <p>
                                        Real-time driver tracking via a mobile
                                        app, ensuring location updates, task
                                        completion, and seamless communication.
                                      </p>
                                    </div>
                                  </div>
                                </Link>

                                <Link
                                  to="/fleet-management#alert-&-notification"
                                  class="product-item"
                                >
                                  <div class="product-content">
                                    <Bell />
                                    <div>
                                      <h3>20+ Alerts & Notifications →</h3>
                                      <p>
                                        Receive instant alerts on geofencing,
                                        route deviations, fuel consumption, and
                                        more for proactive fleet management.
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </div>
                            <div className="col-6">
                              <div class="mega-menu-products">
                                <Link
                                  to="/fleet-management#supervisor-app"
                                  class="product-item"
                                >
                                  <div class="product-content">
                                    <Users />
                                    <div>
                                      <h3>Supervisor App →</h3>
                                      <p>
                                        Access real-time vehicle visibility and
                                        playback past routes to analyze
                                        performance.
                                      </p>
                                    </div>
                                  </div>
                                </Link>

                                <Link
                                  to="/fleet-management#rfid-based-plant-tracking"
                                  class="product-item"
                                >
                                  <div class="product-content">
                                    <AudioWaveform />
                                    <div>
                                      <h3>RFID based In Plant Tracking →</h3>
                                      <p>
                                        Optimize in-plant vehicle movements with
                                        RFID-based tracking for enhanced
                                        efficiency and asset security.
                                      </p>
                                    </div>
                                  </div>
                                </Link>

                                <Link
                                  to="/fleet-management#billing-automation"
                                  class="product-item"
                                >
                                  <div class="product-content">
                                    <Receipt />
                                    <div>
                                      <h3>Billing Automation →</h3>
                                      <p>
                                        Eliminate manual calculations with
                                        automated payout processing for vendors
                                        and drivers based on real-time data.
                                      </p>
                                    </div>
                                  </div>
                                </Link>

                                <Link
                                  to="/fleet-management#other-hardware-integration"
                                  class="product-item"
                                >
                                  <div class="product-content">
                                    <Blocks />
                                    <div>
                                      <h3>
                                        10000+ IOT and other Hardwares
                                        integrated →
                                      </h3>
                                      <p>
                                        Connect effortlessly with GPS, IoT, and
                                        other telematics hardware for a fully
                                        integrated fleet ecosystem.
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>

                        <Tab.Pane eventKey="second">
                          <div className="tab-section-row">
                            <div className="col-6">
                              <div class="mega-menu-products">
                                <Link
                                  to="/delivery-management#dispatcher-mobile-app"
                                  class="product-item"
                                >
                                  <div class="product-content">
                                    <MonitorSmartphone />
                                    <div>
                                      <h3>Dispatcher Mobile App →</h3>
                                      <p>
                                        Get complete visibility into order
                                        status from dispatch to doorstep using
                                        Dispatcher Mobile App.
                                      </p>
                                    </div>
                                  </div>
                                </Link>

                                <Link
                                  to="/delivery-management#delivery-proof-&-validation"
                                  class="product-item"
                                >
                                  <div class="product-content">
                                    <PackageCheck />
                                    <div>
                                      <h3>Delivery Proofs & Validation →</h3>
                                      <p>
                                        Capture digital proof of delivery with
                                        e-signatures, OTP verification, and
                                        real-time image uploads for complete
                                        order validation.
                                      </p>
                                    </div>
                                  </div>
                                </Link>

                                <Link
                                  to="/delivery-management#carrier-integration"
                                  class="product-item"
                                >
                                  <div class="product-content">
                                    <ChartSpline />
                                    <div>
                                      <h3>100+ OMS, Carrier Integration →</h3>
                                      <p>
                                        Integrate effortlessly with top-order
                                        management systems and carrier networks
                                        for unified logistics operations.
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                                <Link
                                  to="/delivery-management#customer-experience-management"
                                  class="product-item"
                                >
                                  <div class="product-content">
                                    <Contact />
                                    <div>
                                      <h3>Customer Experience Management →</h3>
                                      <p>
                                        Enhance customer satisfaction with
                                        real-time tracking, automated alerts,
                                        and seamless communication at every
                                        step.
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </div>
                            <div className="col-6">
                              <div class="mega-menu-products">
                                <Link
                                  to="/delivery-management#last-mile-delivery-management"
                                  class="product-item"
                                >
                                  <div class="product-content">
                                    <Package />
                                    <div>
                                      <h3>Last Mile Delivery Management →</h3>
                                      <p>
                                        Ensure faster, cost-effective, and
                                        seamless last-mile deliveries with
                                        AI-driven routing, real-time tracking,
                                        and automated workflows.
                                      </p>
                                    </div>
                                  </div>
                                </Link>

                                <Link
                                  to="/delivery-management#pickup-management"
                                  class="product-item"
                                >
                                  <div class="product-content">
                                    <SquareKanban />
                                    <div>
                                      <h3>Pickup Management →</h3>
                                      <p>
                                        Optimize pickup schedules, automate task
                                        assignments, and track real-time status
                                        for efficient first-mile logistics.
                                      </p>
                                    </div>
                                  </div>
                                </Link>

                                <Link
                                  to="/delivery-management#driver-mobile-app"
                                  class="product-item"
                                >
                                  <div class="product-content">
                                    <TabletSmartphone />
                                    <div>
                                      <h3>Driver Mobile App →</h3>
                                      <p>
                                        Enable drivers with intuitive mobile
                                        apps for optimized navigation, order
                                        updates, and easy proof-of-delivery
                                        submission.
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>

                        <Tab.Pane eventKey="third">
                          <div className="tab-section-row">
                            <div className="col-6">
                              <div class="mega-menu-products">
                                <Link
                                  to="/fieldforce-management#complete-fieldforce-visibility-in-real-time"
                                  class="product-item"
                                >
                                  <div class="product-content">
                                    <LocateFixed />
                                    <div>
                                      <h3>
                                        Complete Fieldforce Visibility in
                                        Real-Time →
                                      </h3>
                                      <p>
                                        Track, manage, and optimize your field
                                        workforce with live location updates,
                                        task progress, and automated reporting.
                                      </p>
                                    </div>
                                  </div>
                                </Link>

                                <Link
                                  to="/fieldforce-management#ai-optimized-beat-employee-pickup-planning"
                                  class="product-item"
                                >
                                  <div class="product-content">
                                    <AudioLines />
                                    <div>
                                      <h3>AI-Optimized Beat Planning →</h3>
                                      <p>
                                        Plan optimized fieldforce routes with
                                        over 24 constraints, ensuring better
                                        coverage and productivity.
                                      </p>
                                    </div>
                                  </div>
                                </Link>

                                <Link
                                  to="/fieldforce-management#effortless-employee-transport-solutions"
                                  class="product-item"
                                >
                                  <div class="product-content">
                                    <AudioWaveform />
                                    <div>
                                      <h3>
                                        Effortless Employee Transport Solutions
                                        →
                                      </h3>
                                      <p>
                                        Automate and optimize daily commutes
                                        with route planning, tracking, and
                                        real-time scheduling.
                                      </p>
                                    </div>
                                  </div>
                                </Link>

                                <Link
                                  to="/fieldforce-management#on-demand-ride-request-automation"
                                  class="product-item"
                                >
                                  <div class="product-content">
                                    <Bike />
                                    <div>
                                      <h3>
                                        On-Demand Ride Request Automation →
                                      </h3>
                                      <p>
                                        Enable employees to request rides on
                                        demand with automated dispatching and
                                        optimized routing.
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </div>
                            <div className="col-6">
                              <div class="mega-menu-products">
                                <Link
                                  to="/fieldforce-management#seamless-and-secure-employee-attendance-capture"
                                  class="product-item"
                                >
                                  <div class="product-content">
                                    <Users />
                                    <div>
                                      <h3>Automated Check-ins →</h3>
                                      <p>
                                        Enable seamless pickups using
                                        Geofencing, RFID, QR codes, Face
                                        Recognition, Biometrics, Chirp Sound,
                                        and Manual Check-ins.
                                      </p>
                                    </div>
                                  </div>
                                </Link>

                                <Link
                                  to="/fieldforce-management#smart-insights-performance-analytics"
                                  class="product-item"
                                >
                                  <div class="product-content">
                                    <FileText />
                                    <div>
                                      <h3>
                                        Data-Driven Decisions with Smart
                                        Insights →
                                      </h3>
                                      <p>
                                        Get detailed reports and analytics on
                                        fieldforce performance, task efficiency,
                                        and operational KPIs.
                                      </p>
                                    </div>
                                  </div>
                                </Link>

                                <Link
                                  to="/fieldforce-management#live-eta-updates-trackable-links"
                                  class="product-item"
                                >
                                  <div class="product-content">
                                    <Link2Icon />
                                    <div>
                                      <h3>
                                        Live ETA Updates & Trackable Links →
                                      </h3>
                                      <p>
                                        Share real-time tracking URLs with
                                        employees and customers for better
                                        visibility and trust.
                                      </p>
                                    </div>
                                  </div>
                                </Link>

                                <Link
                                  to="/fieldforce-management#intelligent-vendor-allocation-engine"
                                  class="product-item"
                                >
                                  <div class="product-content">
                                    <Navigation2 />
                                    <div>
                                      <h3>
                                        Intelligent Vendor Allocation Engine →
                                      </h3>
                                      <p>
                                        AI matches rides with optimal transport
                                        providers based on availability, cost,
                                        and performance.
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>

                        <Tab.Pane eventKey="fourth">
                          <div className="tab-section-row">
                            <div className="col-6">
                              <div class="mega-menu-products">
                                <Link
                                  to="/route-optimization#ai-power-route-planning"
                                  class="product-item"
                                >
                                  <div class="product-content">
                                    <Waypoints />
                                    <div>
                                      <h3>AI Power Route Planning →</h3>
                                      <p>
                                        Utilize machine learning to generate
                                        cost-effective, traffic-aware, and
                                        time-optimized delivery.
                                      </p>
                                    </div>
                                  </div>
                                </Link>

                                <Link
                                  to="/route-optimization#carbon-emission-reduction"
                                  class="product-item"
                                >
                                  <div class="product-content">
                                    <AlarmSmoke />
                                    <div>
                                      <h3>Carbon Emission Reduction →</h3>
                                      <p>
                                        Reduce fuel consumption and emissions
                                        with smart routing and optimized fleet
                                        operations.
                                      </p>
                                    </div>
                                  </div>
                                </Link>

                                <Link
                                  to="/route-optimization#driver-assigment-optimization"
                                  class="product-item"
                                >
                                  <div class="product-content">
                                    <Car />
                                    <div>
                                      <h3>Driver Assignment Optimization →</h3>
                                      <p>
                                        Assign the best driver for each task
                                        based on location, availability, and
                                        skill set.
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </div>
                            <div className="col-6">
                              <div class="mega-menu-products">
                                <Link
                                  to="/route-optimization#dynamic-re-routing"
                                  class="product-item"
                                >
                                  <div class="product-content">
                                    <Route />
                                    <div>
                                      <h3>Dynamic Re-Routing →</h3>
                                      <p>
                                        Optimize routes in real-time based on
                                        traffic, delays, and priority changes to
                                        improve efficiency.
                                      </p>
                                    </div>
                                  </div>
                                </Link>

                                <Link
                                  to="/route-optimization#customizable-parameters"
                                  class="product-item"
                                >
                                  <div class="product-content">
                                    <Component />
                                    <div>
                                      <h3>Customization Parameters →</h3>
                                      <p>
                                        Tailor the platform to your business
                                        needs with configurable workflows,
                                        rules, and automation.
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </div>
            </li>

            {/* {hideWorks && (
              <li>
                <a href="#how-it-works">How it Works</a>
              </li>
            )} */}
            {!hideWorks && (
              <li>
                <a href="#use-cases">Success Stories</a>
              </li>
            )}
            {!hideWorks && (
              <li>
                <a href="#pricing">Pricing</a>
              </li>
            )}
            <li>
              <Link to="/integrations">Integrations</Link>
            </li>
          </ul>

          <div className="right-header">
            {/* Hamburger Menu */}
            <div className="mobile-menu-icon" onClick={toggleSidebar}>
              <HumbergMenu />
            </div>

            <Link
              to="http://app.geofleet.ai/"
              className="primary-btn"
              data-aos="fade-down"
            >
              Sign In
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          ✖
        </button>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Features</Accordion.Header>
            <Accordion.Body className="mt-4">
              <ul>
                <li>
                  <Link to="/fleet-management" class="product-item">
                    <div class="product-content">
                      <h3>Fleet Management</h3>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link to="/delivery-management" class="product-item">
                    <div class="product-content">
                      <h3>Delivery Management</h3>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link to="/feildforce-management" class="product-item">
                    <div class="product-content">
                      <h3>Fieldforce Management</h3>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/route-optimization" class="product-item">
                    <div class="product-content">
                      <h3>Route Optimization</h3>
                    </div>
                  </Link>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          {!hideWorks && (
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <a href="#how-it-works" onClick={toggleSidebar}>
                  How it works
                </a>
              </Accordion.Header>
            </Accordion.Item>
          )}

          {!hideWorks && (
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <a href="#use-case" onClick={toggleSidebar}>
                  Success Stories
                </a>
              </Accordion.Header>
            </Accordion.Item>
          )}

          {!hideWorks && (
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <a href="#pricing" onClick={toggleSidebar}>
                  Pricing
                </a>
              </Accordion.Header>
            </Accordion.Item>
          )}

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <Link to="/integrations" onClick={toggleSidebar}>
                Integrations
              </Link>
            </Accordion.Header>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <Link to="http://app.geofleet.ai/">Sign In</Link>
            </Accordion.Header>
          </Accordion.Item>
        </Accordion>
      </div>

      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
}
