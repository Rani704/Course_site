import React from "react";
import "./certificate.css";

const Certificate = () => {
  return (
    <>
      <div id="Certificate">
        <div class="container">
          <h1 class="subtitle">
            Unlock 6 <span> Certificates</span> &{" "}
            <span> Internship Opportunities!</span>
          </h1>
          <div class="certificate-list">
            <div className="list1">
              <h2>Get 6 Industry Recognized Certificates! </h2>
              <img src="./new-certiciate-design.png" alt="" />
              <div  className="list1-button">
              <button>Official and Verified</button>
              <button>Enhances Credibility</button>
              </div>
            </div>
            <div className="list2">
              <h2>Bag Internship Opportunities!</h2>
              <p>
                With every course,we make you not only industry-ready but also
                help you crack your first internship.{" "}
              </p>
              <img src="./girl.png" alt="girl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificate;
