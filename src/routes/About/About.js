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
                I am a Full-Stack developer from Gainesville, Florida who
                recently graduated from Thinkful's engineering immersion
                program. As a developer, I love learning different code everyday
                and eventually putting it together to make projects. I have a
                strong attention to detail, which means that I will work until
                the webpage looks exactly how it is supposed too. I enjoy
                building and designing things, which brought me to Thinkful and
                programming in general.{" "}
              </p>
              <p>
                {" "}
                While attending Thinkful's program I worked on projects that
                varied from solo, paired programming, to a team of 5 people. I'm
                grateful for this experience because it showed me how much I
                love working with other people. I learned how to balance the
                work flow between my team with git branches and pull requests. I
                would love to work on a team because I believe collaboration
                brings out the best in projects.
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
