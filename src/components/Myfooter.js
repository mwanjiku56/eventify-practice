import React from "react";
import "./Myfooter.css";

function myfooter() {
  return (
    <div className="my-5">
      <footer className="text-center text-lg-start text-dark">
        <section className="d-flex justify-content-between p-4 text-dark">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Eventify</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  Eventify will help you find the next event in town. We notify
                  you about all events happening around you.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Services</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  <a href="#!" class="text-dark">
                    Ticket Booking
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-dark">
                    Ticket Advertising
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-dark">
                    BrandFlow
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-dark">
                    Event Management
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Quick links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  <a href="/" class="text-dark">
                    Home
                  </a>
                </p>
                <p>
                  <a href="/categories" class="text-dark">
                    Categories
                  </a>
                </p>
                <p>
                  <a href="/Contact Us" class="text-dark">
                    Contact Us
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-dark">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contacts</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" />
                <p>
                  <i className="fas fa-home mr-3"></i>Westlands, Nairobi, Kenya
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> eventify@example.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> + 254 234 567 883
                </p>
                <p>
                  <i className="fas fa-print mr-3"></i> + 254 234 567 897
                </p>
              </div>
              <div className="me-10">
                <span>Get connected with us on social networks:</span>
                <a href="Eventify" className="text-dark me-4">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="@Eventify" className="text-dark me-4">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="eventify@google.com" className="text-dark me-4">
                  <i class="fab fa-google"></i>
                </a>
                <a href="@Eventify" className="text-dark me-4">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="Eventify" className="text-dark me-4">
                  <i class="fab fa-linkedin"></i>
                </a>
                <a href="Eventify" className="text-dark me-4">
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-3 text-dark">
          &copy;{new Date().getFullYear()} Eventify | All Rights Reserved
        </div>
      </footer>
    </div>
  );
}

export default myfooter;
