import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import music from "../images/background 2.webp";
import tech from "../images/tech.jpg";
import buss from "../images/buss.jpg";
import tribal from "../images/calender.jpg";

function Home() {
  return (
    <div className="container">
      <div className="home-banner">
        <div className="row">
          <div className="col-md-6 col-sm-12" >
            <div className="jumbtron">
              <p>
                Welcome to Eventify. This is the ultimate App that will help you
                find the next event in town. Eventify notifys you about all
                events happening around you.
              </p>
              <div className="home-banner-img col-md-6 col-sm-12">
                <img src={tribal} alt="Banner" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="about-us">
              <div className="row">
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Music Concerts</h5>
                      <p className="card-text">
                        Eventify ensures that you are updated on all your best artist's performances.Dont be left out!
                      <img src={music} alt="Banner" />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Hackathons</h5>
                      <p className="card-text">
                        Tech is the future! At Eventify we hook you up with all tech related events such as Hackathons.
                        <img src={tech} alt="Banner" />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Business </h5>
                      <p className="card-text">
                        Business? We got you! Eventify helps you sell your business.This gives you a networking platform too.
                        <img src={buss} alt="Banner" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/categories">
                <button type="button">Upcoming Events</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
