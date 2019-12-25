import React, { Component } from "react";
import "./About.scss";
export default class About extends Component {
  render() {
    return (
      <section className="bio-section" id="bio">
        <div className="bio-body">
          <section className="about-me">
            <h3>About Me</h3>
            <div className="about-me-essay">
              <p>
                {" "}
                I am a 24 year old Full-Stack developer from
                Gainesville, Florida who recently graduated from Thinkful's
                engineering immersion program. As a developer, I love learning
                different code everyday and eventually putting it together to
                make projects. I have an inescapable attention to detail, which
                sometimes means spending more time than I should adjusting
                pixels in CSS. I enjoy building and designing things, which
                brought me to Thinkful and programming in general.{" "}
              </p>
              <p>
                {" "}
                Before I started my dive into programming I was a business
                administration student at Flagler College, but realized business
                administration wasn’t for me. Besides being a student, I’ve been
                a dairy farmer in New Zealand, tradie in Australia, and a valet
                in DC.{" "}
              </p>
              <p>
                {" "}
                Other than programming, I enjoy hiking, photography, binging
                Twin Peaks on Netflix, watching the Washington Wizards
                disappoint me every year, and cheap beer.
              </p>
            </div>
          </section>
        </div>
      </section>
    );
  }
}
