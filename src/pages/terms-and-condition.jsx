import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default function Terms() {
  return (
    <>
      <Header border="border" />
      <section className="terms-of-service-section">
        <div className="container">
          <div className="row">
            <h1>Terms of Service</h1>

            <div className="content-div mt-5">
              <div>
                <p>
                  Welcome to Geofleet.ai. By accessing or using our website and
                  services, you agree to comply with and be bound by the
                  following terms and conditions. Please read these terms
                  carefully. If you do not agree with these terms, you may not
                  use our services.
                </p>
              </div>

              <div>
                <h4  className="mt-4">1. Definitions</h4>
                <ul>
                  <li>
                    <strong>Geofleet.ai</strong>: Refers to the website,
                    platform, and services provided by our company.
                  </li>
                  <li>
                    <strong>User</strong>: Any individual or entity accessing
                    or using Geofleet.ai’s services.
                  </li>
                  <li>
                    <strong>Services</strong>: All features, functionalities,
                    and tools provided by Geofleet.ai, including but not limited
                    to route optimization, fleet tracking, analytics, and
                    notifications.
                  </li>
                </ul>
              </div>

              <div>
                <h4>2. Acceptance of Terms</h4>
                <p>
                  By accessing or using Geofleet.ai, you confirm that you are at
                  least 18 years old and have the legal capacity to enter into a
                  binding agreement. These terms constitute a legally binding
                  agreement between you and Geofleet.ai.
                </p>
              </div>

              <div  className="mt-4">
                <h4>3. User Obligations</h4>
                <p>
                  You agree to use our services only for lawful purposes and in
                  compliance with all applicable laws and regulations. You shall
                  not:
                </p>
                <ul>
                  <li>
                    Use the platform to transmit harmful, offensive, or illegal
                    content.
                  </li>
                  <li>
                    Attempt to gain unauthorized access to our systems or
                    interfere with our services.
                  </li>
                  <li>
                    Reverse engineer or copy any part of Geofleet.ai’s platform.
                  </li>
                </ul>
              </div>

              <div>
                <h4>4. Intellectual Property</h4>
                <p>
                  All content, features, and functionalities of Geofleet.ai,
                  including but not limited to text, graphics, logos, and
                  software, are the exclusive property of Geofleet.ai or its
                  licensors. Users are granted a limited, non-exclusive,
                  non-transferable license to access and use the platform
                  strictly in accordance with these terms.
                </p>
              </div>

              <div className="mt-4">
                <h4>5. Service Availability</h4>
                <p>
                  We aim to provide uninterrupted access to our platform but do
                  not guarantee availability at all times. Scheduled maintenance
                  or unforeseen issues may result in temporary downtime.
                  Geofleet.ai is not responsible for any loss or damage
                  resulting from service interruptions.
                </p>
              </div>

              <div className="mt-4">
                <h4>6. Limitation of Liability</h4>
                <p>
                  Geofleet.ai is not liable for indirect, incidental, or
                  consequential damages arising out of your use or inability to
                  use the platform. In no event shall our liability exceed the
                  fees paid by you for the use of our services within the
                  preceding 12 months.
                </p>
              </div>

              <div className="mt-4">
                <h4>7. User Data and Privacy</h4>
                <p>
                  Geofleet.ai respects your privacy and is committed to
                  protecting your data. Please review our Privacy Policy for
                  details on how we collect, use, and safeguard your
                  information. You are responsible for ensuring the accuracy of
                  the data you provide and for maintaining the confidentiality
                  of your account credentials.
                </p>
              </div>

              <div className="mt-4">
                <h4>8. Third-Party Services</h4>
                <p>
                  Geofleet.ai may integrate with third-party services to enhance
                  functionality. We are not responsible for the performance or
                  terms of these services. Use of third-party services is
                  subject to their respective terms and conditions.
                </p>
              </div>

              <div className="mt-4">
                <h4>9. Modifications to Terms</h4>
                <p>
                  Geofleet.ai reserves the right to modify these terms at any
                  time. Changes will be effective upon posting to the website.
                  Continued use of the platform after changes constitutes your
                  acceptance of the revised terms.
                </p>
              </div>

              <div className="mt-4">
                <h4>10. Termination</h4>
                <p>
                  Geofleet.ai may suspend or terminate your access to the
                  platform at its sole discretion for any breach of these terms.
                  Upon termination, all rights granted to you under these terms
                  will cease immediately.
                </p>
              </div>

              <div className="mt-4">
                <h4>11. Governing Law and Dispute Resolution</h4>
                <p>
                  These terms are governed by the laws of India. Any disputes
                  arising out of or in connection with these terms shall be
                  subject to the exclusive jurisdiction of the courts in Jaipur,
                  Rajasthan.
                </p>
              </div>

              <div className="mt-4">
                <h4>12. Contact Us</h4>
                <p>
                  If you have any questions or concerns about these terms,
                  please contact us:
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
                  Thank you for choosing Geofleet.ai. Your trust and compliance
                  help us deliver a seamless and efficient experience.
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
