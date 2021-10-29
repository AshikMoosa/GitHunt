import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import CompanyLogo from "../../images/jobs.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobeAsia,
  faClock,
  faLongArrowAltLeft,
} from "@fortawesome/free-solid-svg-icons";
class Job extends Component {
  render() {
    const { jobDetails } = this.props.location.state;
    return (
      <Fragment>
        <h1>jobs page</h1>
        {console.log(jobDetails)}
        {/* <div className="left">
          <Link to="/jobs">
            {" "}
            <FontAwesomeIcon
              icon={faLongArrowAltLeft}
              style={{ paddingRight: "1em" }}
            />
            Back to search
          </Link>

          <h3>HOW TO APPLY</h3>
          <p>
            Please email a copy of your resume and online portfolio to
            <span style={{ color: "blue" }}> wes@kasisto.com</span> & CC{" "}
            <span style={{ color: "blue" }}>eric@kasisto.com</span>
          </p>
        </div>
        <div className="right">
          <div>
            <h2 style={{ marginBottom: "0.5em" }}>
              Front-End Software Engineer
            </h2>
            <button
              className="btn text-dark"
              style={{
                width: "70px",
                height: "25px",
                background: "transparent",
                border: "1px solid blue",
              }}
            >
              Full time
            </button>
            <p>
              {"  "}
              <FontAwesomeIcon icon={faClock} />5 days ago
            </p>
          </div>
          <div
            style={{ display: "flex", columnGap: "1rem", margin: "2rem 0rem" }}
          >
            <img
              src={CompanyLogo}
              alt="Company Logo"
              style={{ width: "90px", height: "90px" }}
            />
            <div className="details">
              <h3>Kasisto</h3>
              <p style={{ marginBlockEnd: "auto" }}>
                {"  "}
                <FontAwesomeIcon icon={faGlobeAsia} />
                New York{"  "}
              </p>
            </div>
          </div>
          <p>
            Humanizing Digital Experiences® Kasisto’s Digital Experience
            Platform, KAI, is designed for financial institutions to deliver the
            industry’s most amazing Conversational AI powered intelligent
            virtual assistants to their customers. KAI is open and extensible,
            and also fluent in the language of banking and finance. From simple
            retail transactions to the complex demands of corporate banks and
            wealth management, financial institutions can deliver meaningful
            digital interactions with KAI that help build their digital brand.
            Financial institutions around the world use KAI, including DBS Bank,
            J.P. Morgan, Mastercard, Standard Chartered, TD Bank, and Manulife
            Bank among others. They chose KAI for its proven track record to
            drive business results while improving customer experiences. The
            platform is used by millions of consumers around the world, all the
            time, across multiple channels, in different languages, and is
            optimized for performance, scalability, security, and compliance.
            This position We are looking for a Full-Stack, client side software
            engineer to help build and integrate responsive chat interfaces,
            analytics dashboards and reporting tools. What you’ll be doing
            Working closely with clients and internal engineering, product and
            design teams to gather requirements Building and integrating
            front-end applications with CSS, HTML, Javascript, jQuery, Vue.js,
            Webpack, Handlebars.js, LESS, Backbone, Python, Django and Java
            Working to improve user experience and functionality for tools
            Writing testable code utilizing common front-end unit and BDD
            testing frameworks What you need for this position 3+ years in
            client-side web development with CSS, HTML, Javascript and jQuery
            Proven, full-stack front-end experience using Python and Django
            Other Modern Web Framework(s) experience is a plus (React, Vue,
            Angular, Ember) Experience working collaboratively to build
            scalable, modular, production software in an Agile environment
            Experience using RESTful json services Node.js and API development
            familiarity is plus D3.js is a plus What we offer: Competitive
            compensation package Ground floor opportunity within rapidly growing
            tech startup Great collaborative team environment Full Benefits Fun
            perks Location - NYC, Flatiron District We welcome your cover letter
            with a description of your previous complete experience and your
            resume. Applicants must be authorized to work in the US as we are
            unable to sponsor. Kasisto is an equal opportunity employer.
          </p>
        </div> */}
      </Fragment>
    );
  }
}

export default Job;
