import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default function Privacy() {
  return (
    <>
      <Header border="border" />
      <section className="privacy-policy-section">
        <div className="container">
          <div className="row">
            <h1>Privacy Policy</h1>

            <div className="content-div">
              <div>
                <p>
                  At Geofleet.ai, we value your privacy and are committed to
                  protecting your personal information. This Privacy Policy
                  outlines how we collect, use, disclose, and safeguard your
                  information when you access our website and services.
                </p>
              </div>

              <div>
                <h4>1. Information We Collect</h4>
                <p className="mb-4">We collect the following types of information:</p>
                <h5>a. Personal Information</h5>
                <ul>
                  <li>
                    Name, email address, phone number, and other contact details
                    provided by you.
                  </li>
                  <li>Account login credentials (username and password).</li>
                </ul>
                <h5>b. Usage Data</h5>
                <ul>
                  <li>
                    Information about how you use our platform, including IP
                    addresses, browser types, operating systems, and access
                    times.
                  </li>
                  <li>Navigation and interaction details on the website.</li>
                </ul>
                <h5>c. Device Information</h5>
                <ul>
                  <li>
                    Information about the devices you use to access our
                    services, such as device type, operating system, and unique
                    device identifiers.
                  </li>
                </ul>
                <h5>d. Location Data</h5>
                <ul>
                  <li>
                    Real-time geographic location data, provided you have
                    granted us permission to collect it.
                  </li>
                </ul>
              </div>

              <div>
                <h4>2. How We Use Your Information</h4>
                <p className="mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul>
                  <li>To provide and maintain our services.</li>
                  <li>
                    To improve and personalize your experience on our platform.
                  </li>
                  <li>
                    To communicate with you about updates, promotions, and
                    service-related announcements.
                  </li>
                  <li>
                    To analyze usage patterns and improve our platform's
                    functionality.
                  </li>
                  <li>To comply with legal and regulatory requirements.</li>
                </ul>
              </div>

              <div>
                <h4>3. Sharing of Information</h4>
                <p className="mb-4">
                  We may share your information in the following situations:
                </p>
                <ul>
                  <li>
                    <strong>With Service Providers:</strong> To assist in
                    operating our services, such as payment processors, cloud
                    storage providers, and analytics services.
                  </li>
                  <li>
                    <strong>With Business Partners:</strong> For integrations
                    and partnerships that enhance your use of our platform.
                  </li>
                  <li>
                    <strong>As Required by Law:</strong> To comply with legal
                    obligations or to protect our rights.
                  </li>
                  <li>
                    <strong>In Case of Business Transfers:</strong> In
                    connection with a merger, acquisition, or sale of assets,
                    your information may be transferred to the new entity.
                  </li>
                </ul>
              </div>

              <div>
                <h4>4. Cookies and Tracking Technologies</h4>
                <p className="mb-4">We use cookies, web beacons, and similar technologies to:</p>
                <ul>
                  <li>Track your activity on our platform.</li>
                  <li>Improve website functionality and user experience.</li>
                  <li>Provide personalized content and advertisements.</li>
                </ul>
                <p>
                  You can control or disable cookies through your browser
                  settings. However, some parts of our platform may not function
                  properly without cookies.
                </p>
              </div>

              <div>
                <h4>5. Data Security</h4>
                <p>
                  We implement appropriate technical and organizational measures
                  to protect your personal information from unauthorized access,
                  disclosure, alteration, or destruction. Despite our efforts,
                  no method of transmission over the internet is completely
                  secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h4>6. Your Rights</h4>
                <p  className="mb-4">
                  You have the following rights concerning your personal
                  information:
                </p>
                <ul>
                  <li>
                    <strong>Access and Correction:</strong> Request access to or
                    correction of your personal data.
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your data,
                    subject to legal obligations.
                  </li>
                  <li>
                    <strong>Data Portability:</strong> Receive your data in a
                    structured, commonly used format.
                  </li>
                  <li>
                    <strong>Withdraw Consent:</strong> Withdraw your consent for
                    data collection and processing where applicable.
                  </li>
                </ul>
                <p>
                  To exercise these rights, contact us at{" "}
                  <a href="mailto:support@geofleet.ai">support@geofleet.ai</a>.
                </p>
              </div>

              <div>
                <h4>7. Third-Party Services</h4>
                <p>
                  Our platform may contain links to third-party websites or
                  services. We are not responsible for the privacy practices of
                  these external services. We encourage you to review their
                  privacy policies.
                </p>
              </div>

              <div>
                <h4>8. Children's Privacy</h4>
                <p>
                  Geofleet.ai does not knowingly collect personal information
                  from children under the age of 13. If we become aware that we
                  have collected information from a child without parental
                  consent, we will take steps to delete it.
                </p>
              </div>

              <div>
                <h4>9. Changes to This Privacy Policy</h4>
                <p>
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices or for legal, regulatory, or
                  operational reasons. We will notify you of significant changes
                  by posting the revised policy on our website.
                </p>
              </div>

              <div>
                <h4>10. Contact Us</h4>
                <p className="mb-4">
                  If you have any questions or concerns about this Privacy
                  Policy, please contact us:
                </p>
                <ul>
                  <li>
                    Email:{" "}
                    <a href="mailto:support@geofleet.ai">support@geofleet.ai</a>
                  </li>
                  <li>
                    Phone: <a href="tel:+917303993102">+91 730 3993 102</a>
                  </li>
                  <li>
                    Address: C-5, 1st Floor, 80 Feet Road, Kiran Path, Shanthi
                    Nagar, Mansarovar, Jaipur, Rajasthan 302019
                  </li>
                </ul>
              </div>

              <div>
                <p>
                  Thank you for trusting Geofleet.ai. Your privacy is our
                  priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
