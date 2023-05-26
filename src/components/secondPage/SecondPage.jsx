import React from "react";
import "./SecondPage.css";

const SecondPage = () => {
  return (
    <>
      <section className="path-section">
        <a href="./index.html">Home</a>
        <span>/</span>
        <a href="#">About us</a>
        <span>/</span>
        <a href="#">Our services</a>
        <span>/</span>
        <a href="#">Buildings and urban areas</a>
      </section>

      <section className="page-intro-section">
        <div className="page-intro-section-img-block">
          <h1>Buildings and Urban Areas</h1>
          <div className="page-intro-section-text">
            <p>
              The cities of the world grow, and they grow quick. Sweco offers a
              perspective that guarantees long-term sustainable solutions
              without compromising on aesthetics.
            </p>
          </div>
        </div>
      </section>
      <section className="filler-section-box">
        <div className="filler-section-img-box">
          <img
            src="https://www.swecogroup.com/wp-content/uploads/sites/2/2021/09/bosco_verticale_milan2_article7_dubai-780x460.jpg"
            alt=""
          />
        </div>

        <div className="filler-section-content-box">
          <h3>Urban Areas</h3>
          <p>
            Half of the world’s population lives in cities. We at Sweco are
            experts at designing with a holistic perspective, whether it’s a
            brand-new city district or a building in need of modernisation. Our
            collective expertise, insight into local conditions and long
            experience of working closely alongside our clients are all key to
            our work.
          </p>
        </div>
      </section>

      <section className="filler-section-box">
        <div className="filler-section-content-box">
          <h3>Building service systems</h3>
          <p>
            Our building service systems consultants create comfortable indoor
            climates in buildings and facilities.
          </p>
          <ul>
            <li>Energy analysis and environmental certification</li>
            <li>Design of electrical, telecom and security systems</li>
            <li>Fire safety engineering and risk analysis</li>
            <li>HVAC and sanitation</li>
          </ul>
        </div>

        <div className="filler-section-img-box">
          <img
            src="https://www.swecogroup.com/wp-content/uploads/sites/2/2021/09/bosco_verticale_milan2_article7_dubai-780x460.jpg"
            alt=""
          />
        </div>
      </section>

      <section className="more-section">
        <a className="more-section-card">
          <h3>Careers</h3>
          <p>Thinking about the future? Join us and help us build it.</p>
          <button className="green-btn-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16">
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </button>
        </a>
        <a className="more-section-card">
          <h3>Careers</h3>
          <p>Thinking about the future? Join us and help us build it.</p>
          <button className="green-btn-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16">
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </button>
        </a>
        <a className="more-section-card">
          <h3>Careers</h3>
          <p>Thinking about the future? Join us and help us build it.</p>
          <button className="green-btn-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16">
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </button>
        </a>
      </section>
    </>
  );
};

export default SecondPage;
