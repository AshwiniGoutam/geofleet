import React from "react";
import "./page.css";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

export default function OurServices() {
  return (
    <section className="our-solutions-section">
      <div className="container">
        <div className="row">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={4}>
                <Nav variant="pills" className="flex-column">
                  <h2>Empowering Smarter Logistics</h2>
                  <p className="mb-4">
                    Transform logistics with Geofleet.ai—a platform using AI to
                    streamline fleet management, optimize deliveries, and boost
                    efficiency for your business.
                  </p>
                  <Nav.Item>
                    <Nav.Link eventKey="first">Fleet Management</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Delivery Management</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Route Optimization</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="solution-content-box">
                      <h4>
                        Gain complete visibility and control over your fleet
                        operations with our advanced fleet management solutions.
                      </h4>
                      <ul>
                        <li>
                          IoT/GPS Tracking: Real-time vehicle monitoring with
                          precise location, speed, and trip history for
                          efficient fleet management.
                        </li>
                        <li>
                          SIM-Based Tracking: Track fleet movement and
                          performance with SIM-enabled devices for seamless
                          connectivity.
                        </li>
                        <li>
                          Driver App: A user-friendly mobile app for drivers to
                          manage tasks, log attendance, track trips, and stay on
                          schedule.
                        </li>
                      </ul>

                      <div className="d-flex align-items-center gap-2">
                        <button className="primary-btn">Explore More</button>
                        <button className="secondary-btn">Book a Demo</button>
                      </div>
                    </div>

                    <div className="row stat-row">
                      <div className="col-sm-4">
                        <div className="stat-boxes">
                          <img
                            src="../../assets/images/low-cost-icon.png"
                            alt="low-cost"
                          />
                          <h4><span>25% </span>Lower cost per delivery</h4>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="stat-boxes">
                          <img
                            src="../../assets/images/on-time-delivery.png"
                            alt="low-cost"
                          />
                          <h4><span>99% </span>On-time deliveries</h4>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="stat-boxes">
                          <img
                            src="../../assets/images/deliver-exp.png"
                            alt="low-cost"
                          />
                          <h4><span>5 Star </span>Delivery experience</h4>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    </section>
  );
}
