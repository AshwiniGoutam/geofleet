import React, { useState } from "react";
import "./page.css";
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
} from "lucide-react";
import { Link } from "react-router-dom";
import PricingModal from "../pricing/pricing-model";

export default function OurServices() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <section className="our-solutions-section" id="our-services">
      <PricingModal show={modalShow} onHide={() => setModalShow(false)} />
      <div className="container">
        <div className="row">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={12} md={12} lg={4}>
                <Nav variant="pills" className="flex-column">
                  <h2>Empowering Smarter Logistics</h2>
                  <p className="mb-4">
                    Transform logistics with Geofleet.ai—a platform using AI to
                    streamline fleet management, optimize deliveries, and boost
                    efficiency for your business.
                  </p>
                  <Nav.Item>
                    <Nav.Link eventKey="first">
                      {" "}
                      <div>
                        <MapPin className="w-5 h-5" />
                        Fleet Management{" "}
                      </div>
                      <ArrowRight className="" />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                      <div>
                        <Package className="w-5 h-5" />
                        Delivery Management
                      </div>
                      <ArrowRight className="" />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">
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
              <Col sm={12} md={12} lg={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="solution-content-box">
                      <h4>
                        Gain complete visibility and control over your fleet
                        operations with our advanced fleet management solutions.
                      </h4>
                      <ul>
                        <li>
                          <div className="svg-box">
                            <MapPin />
                          </div>{" "}
                          <div>
                            <h4> IoT/GPS Tracking: </h4>
                            <p>
                              Real-time vehicle monitoring with precise
                              location, speed, and trip history for efficient
                              fleet management.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="svg-box">
                            <Radio />
                          </div>{" "}
                          <div>
                            <h4> SIM-Based Tracking:</h4>{" "}
                            <p>
                              Track fleet movement and performance with
                              SIM-enabled devices for seamless connectivity.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="svg-box">
                            <Smartphone />
                          </div>
                          <div>
                            <h4>Driver App:</h4>
                            <p>
                              A user-friendly mobile app for drivers to manage
                              tasks, log attendance, track trips, and stay on
                              schedule.
                            </p>
                          </div>
                        </li>
                      </ul>

                      <div className="d-flex align-items-center gap-4">
                        <Link to="/fleet-management">
                          <button className="primary-btn">
                            Explore More <ArrowRight />
                          </button>
                        </Link>
                        <a href={undefined} onClick={() => setModalShow(true)}>
                          Book a Demo{" "}
                        </a>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className="solution-content-box">
                      <h4>
                        Streamline every stage of your delivery process, from
                        the first mile to the last, with tools designed to
                        simplify operations for all stakeholders.
                      </h4>
                      <ul>
                        <li>
                          <div className="svg-box">
                            {/* <MapPin /> */}
                            <Smartphone />
                          </div>{" "}
                          <div>
                            <h4>Driver Mobile App:</h4>
                            <p>
                              Ensure on-the-ground delivery efficiency with a
                              mobile app built for drivers to access their
                              routes, complete assigned deliveries, and capture
                              proof of delivery.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="svg-box">
                            <User />
                          </div>{" "}
                          <div>
                            <h4>Supervisor Mobile App:</h4>{" "}
                            <p>
                              Equip supervisors with the tools to monitor live
                              delivery status, track driver performance, and
                              address issues in real time to maintain delivery
                              SLAs.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="svg-box">
                            <LayoutGrid />
                          </div>
                          <div>
                            <h4>Dispatcher Web App:</h4>
                            <p>
                              Optimize route planning and delivery assignment
                              with an easy-to-use web app for dispatchers,
                              enabling them to manage workflows, track delivery
                              KPIs, and address delivery bottlenecks.
                            </p>
                          </div>
                        </li>
                      </ul>

                      <div className="d-flex align-items-center gap-4">
                        <Link to="/delivery-management">
                          <button className="primary-btn">
                            Explore More <ArrowRight />
                          </button>
                        </Link>
                        <a href={undefined} onClick={() => setModalShow(true)}>
                          Book a Demo{" "}
                        </a>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <div className="solution-content-box">
                      <h4>
                        Achieve faster deliveries and reduced costs with
                        Geofleet.ai’s advanced route optimization technology.
                      </h4>
                      <ul>
                        <li>
                          <div className="svg-box">
                            <Route />
                          </div>{" "}
                          <div>
                            <h4>Smart Route Optimization Algorithm:</h4>
                            <p>
                              Utilize a powerful algorithm to generate optimized
                              routes that minimize delivery time and distance,
                              reducing fuel consumption and operational
                              expenses.
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="svg-box">
                            <Blocks />
                          </div>{" "}
                          <div>
                            <h4>Seamless API Integration:</h4>{" "}
                            <p>
                              Integrate our routing engine with your existing
                              systems to automate route planning and provide
                              dynamic updates for real-time adjustments based on
                              changing conditions, such as traffic or delivery
                              priorities.
                            </p>
                          </div>
                        </li>
                      </ul>

                      <div className="d-flex align-items-center gap-4">
                        <Link to="/route-optimization">
                          <button className="primary-btn">
                            Explore More <ArrowRight />
                          </button>
                        </Link>
                        <a href={undefined} onClick={() => setModalShow(true)}>
                          Book a Demo{" "}
                        </a>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>

            <div className="row stat-row">
              <div className="col-sm-4">
                <div className="stat-boxes">
                  <div className="stat-svg">
                    <DollarSign />
                    <span>15% </span>
                  </div>
                  <h4>Reduction in Fleet Operating Costs</h4>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="stat-boxes">
                  <div className="stat-svg">
                    <Clock />
                    <span>98% </span>
                  </div>
                  <h4>Fleet Uptime</h4>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="stat-boxes">
                  <div className="stat-svg">
                    <Package />
                    <span>20% </span>
                  </div>
                  <h4>Higher Fleet Utilization</h4>
                </div>
              </div>
            </div>
          </Tab.Container>
        </div>
      </div>
    </section>
  );
}
