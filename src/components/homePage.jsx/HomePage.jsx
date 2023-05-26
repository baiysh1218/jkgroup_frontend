import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <main>
      <section className="section-one-box">
        <video autoplay muted loop id="homepage-video">
          <source src="../video/Night City_ Video Edit.mp4" type="video/mp4" />
        </video>
        <div className="content-box">
          <div className="mainsection-content-box">
            <div className="mainsection-content">
              <div className="mainsection-content-text">
                <h1>Transforming society together</h1>
                <p>Making a difference in everything we do</p>
              </div>
              <form className="mainsection-content-form" action="submit">
                <input
                  className="mainsection-content-search"
                  placeholder="What are you looking for?"
                  type="text"
                />
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
          <div className="mainsection-options">
            <a
              className="mainsection-options-item"
              onClick={() => navigate("/secondPage")}>
              Building and urban areas
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16">
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </a>
            <a className="mainsection-options-item">
              Water, Energy and Industry
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16">
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </a>
            <a className="mainsection-options-item">
              Transportation Infrastracture
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16">
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </a>
            <a className="mainsection-options-item">
              Architechture
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16">
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section className="second-section-box">
        <div className="second-section-left-box">
          <h2>
            Sweco is Europe’s leading architecture and engineering consultancy
          </h2>
        </div>
        <div className="second-section-right-box">
          <p className="second-section-right-number">20,000</p>
          <p className="second-section-right-text">
            ARCHITECTS, ENGINEERS AND SPECIALISTS
          </p>
        </div>
      </section>

      <section className="third-section-box">
        <h3 className="third-section-header-mobile">
          Transforming society together
        </h3>
        <video controls autoplay muted className="third-section-media">
          <source src="./video/Night City_ Video Edit.mp4" type="video/mp4" />
        </video>
        <div className="third-section-content-box">
          <h3>Transforming society together</h3>
          <p>
            Transforming society has never been a more relevant, daring, and
            inspiring challenge. Throughout our history, we have combined
            perspectives to solve the challenges of our time.​
          </p>
          <p>
            Together with our clients and the collective knowledge of our 20,000
            architects, engineers and specialists, we co-create solutions that
            address urbanisation, capture the power of digitalisation, and make
            our societies more sustainable.​
          </p>
          <div>
            <button>This is sweco</button>
            <button>careers</button>
            <button>sustainability</button>
            <button>out services</button>
          </div>
        </div>
      </section>

      <section className="stories-section-box">
        <h2>Stories worth telling</h2>
        <div className="stories-box">
          <a className="story-card">
            <img
              src="https://www.swecogroup.com/wp-content/uploads/sites/2/2023/02/Engineers-on-construction-building-with-digital-drawing-520x296.jpg"
              alt="women builders"
            />
            <div className="story-card-content">
              <div className="story-card-tag-date">
                <div className="story-card-tag">Digitalisation</div>
                <div className="story-card-date">February 7, 2023</div>
              </div>
              <h3>Harnessing the power of digitalisation</h3>
              <p className="story-card-text">
                In all Sweco construction drawings a QR code is added which
                gives instant access to the Building Information Models (BIM)
                where detailed information about the construction can be found.
                This service is called SmartDrawings™.
                <span className="story-card-read">Read more</span>
              </p>
            </div>
          </a>
          <a className="story-card">
            <img
              src="https://www.swecogroup.com/wp-content/uploads/sites/2/2023/02/Engineers-on-construction-building-with-digital-drawing-520x296.jpg"
              alt="women builders"
            />
            <div className="story-card-content">
              <div className="story-card-tag-date">
                <div className="story-card-tag">Digitalisation</div>
                <div className="story-card-date">February 7, 2023</div>
              </div>
              <h3>Harnessing the power of digitalisation</h3>
              <p className="story-card-text">
                In all Sweco construction drawings a QR code is added which
                gives instant access to the Building Information Models (BIM)
                where detailed information about the construction can be found.
                This service is called SmartDrawings™.
                <span className="story-card-read">Read more</span>
              </p>
            </div>
          </a>
          <a className="story-card">
            <img
              src="https://www.swecogroup.com/wp-content/uploads/sites/2/2023/02/Engineers-on-construction-building-with-digital-drawing-520x296.jpg"
              alt="women builders"
            />
            <div className="story-card-content">
              <div className="story-card-tag-date">
                <div className="story-card-tag">Digitalisation</div>
                <div className="story-card-date">February 7, 2023</div>
              </div>
              <h3>Harnessing the power of digitalisation</h3>
              <p className="story-card-text">
                In all Sweco construction drawings a QR code is added which
                gives instant access to the Building Information Models (BIM)
                where detailed information about the construction can be found.
                This service is called SmartDrawings™.
                <span className="story-card-read">Read more</span>
              </p>
            </div>
          </a>
        </div>
        <button className="stories-section-see-all-btn">See all</button>
      </section>

      <section className="events-section">
        <div className="events-section-press-box">
          <a href="#" className="events-section-all-btns">
            <button className="whitebtn">All press realeases</button>
            <button className="greenbtn">
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

          <h2>Latest press realeases</h2>
          <div className="events-cards-box">
            <div className="events-press-card">
              <a>Year-end Report 2022 Sweco AB (publ)</a>
              <div className="events-press-date-tag">
                <time>February 9, 2023</time>
                <p className="events-press-tag">Interim report</p>
              </div>
              <span className="story-card-read">Read more</span>
            </div>
            <div className="events-press-card">
              <a>Year-end Report 2022 Sweco AB (publ)</a>
              <div className="events-press-date-tag">
                <time>February 9, 2023</time>
                <p className="events-press-tag">Interim report</p>
              </div>
              <span className="story-card-read">Read more</span>
            </div>
            <div className="events-press-card">
              <a>
                Circular use of aggregates could save carbon emissions and
                reduce raw material costs by EUR 6 billion per year in Europe
              </a>
              <div className="events-press-date-tag">
                <time>February 9, 2023</time>
                <p className="events-press-tag">Interim report</p>
              </div>
              <span className="story-card-read">Read more</span>
            </div>
          </div>
        </div>
        <div className="events-section-calendar-box">
          <a href="#" className="events-section-all-btns">
            <button className="whitebtn">All press realeases</button>
            <button className="greenbtn">
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
          <h2>Financial calendar</h2>

          <div className="events-cards-box">
            <div className="events-calendar-card">
              <a>Annual and Sustainability Report 2022</a>
              <time>March 30, 2023 – 09:00</time>
            </div>
            <div className="events-calendar-card">
              <a>Annual General Meeting 2023</a>
              <time>March 30, 2023 – 09:00</time>
            </div>
            <div className="events-calendar-card">
              <a>Annual General Meeting 2023</a>
              <time>March 30, 2023 – 09:00</time>
            </div>
          </div>
        </div>
      </section>

      <section className="third-section-box">
        <h3 className="third-section-header-mobile">
          Transforming society together
        </h3>
        <img
          src="https://c4.wallpaperflare.com/wallpaper/586/603/742/minimalism-4k-for-mac-desktop-wallpaper-preview.jpg"
          alt=""
          className="third-section-media"
        />
        <div className="third-section-content-box">
          <h3>Urban Insight</h3>
          <p>
            Urban Insight is a platform where we invite experts from all over
            the world to come together to develop and share insights, data,
            facts and solutions for how to plan and design the sustainable
            societies, towns and cities of the future. Experts from different
            disciplines and fields, generating insights and publishing reports,
            trend analysis, articles and podcasts.​
          </p>
          <p>
            Global and local activities will be organised during the year to
            inspire, and to open up for discussions about sustainable urban
            planning.
          </p>
          <button>discover insights and reports</button>
        </div>
      </section>

      <section className="featured-projects-box">
        <h2>Featured projects</h2>
        <div className="featured-projects-cards-box">
          <div className="featured-projects-card">
            <img
              src="https://www.swecogroup.com/wp-content/uploads/sites/2/2023/02/Bridge-construction-lake-view-780x530.jpg"
              alt=""
            />

            <div className="featured-projects-title-btn">
              <a href="#">Building future-proof bridges with digitalisation</a>
              <button>
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
            </div>
          </div>
          <div className="featured-projects-card">
            <img
              src="https://www.swecogroup.com/wp-content/uploads/sites/2/2023/02/Bridge-construction-lake-view-780x530.jpg"
              alt=""
            />

            <div className="featured-projects-title-btn">
              <a href="#">Building future-proof bridges with digitalisation</a>
              <button>
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
            </div>
          </div>
          <div className="featured-projects-card">
            <img
              src="https://www.swecogroup.com/wp-content/uploads/sites/2/2023/02/Bridge-construction-lake-view-780x530.jpg"
              alt=""
            />

            <div className="featured-projects-title-btn">
              <a href="#">Building future-proof bridges with digitalisation</a>
              <button>
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
            </div>
          </div>
          <div className="featured-projects-card">
            <img
              src="https://www.swecogroup.com/wp-content/uploads/sites/2/2023/02/Bridge-construction-lake-view-780x530.jpg"
              alt=""
            />

            <div className="featured-projects-title-btn">
              <a href="#">Building future-proof bridges with digitalisation</a>
              <button>
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
            </div>
          </div>
        </div>
        <button className="green-btn-text">More projects</button>
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

      <section className="submit-form-section">
        <div className="submit-form-section-text-intro">
          <h2>Let us connect</h2>
          <p>
            Please fill out this form and we will ensure that you get in contact
            with the right Sweco expert.
          </p>
        </div>
        <div className="submit-form-box">
          <div className="submit-form-box-top">
            <div className="submit-form-left-inputs">
              <input type="text" placeholder="name*" name="" id="" />
              <input placeholder="company" type="text" name="" id="" />
              <input placeholder="phone number" type="text" name="" id="" />
            </div>
            <div className="submit-form-right-inputs">
              <input placeholder="email" type="text" name="" id="" />
              <input
                placeholder="country of residence"
                type="text"
                name=""
                id=""
              />
            </div>
          </div>
          <input
            className="input-question"
            type="text"
            placeholder="type your question"
          />
          <div className="consent-box">
            <input id="checkbox-input" type="checkbox" />
            <p>
              By ticking this box I consent to Sweco processing my data for the
              purpose of sending me news from Sweco in accordance with Sweco’s
              Privacy Policy. To learn about the way Sweco processes your
              subscription data, please click <span>here.</span>
            </p>
          </div>
          <button className="green-btn-text">Submit</button>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
