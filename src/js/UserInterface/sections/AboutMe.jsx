// React dependencies.
import React from 'react';

// About Me Icon Grid.
import AboutMeIcons from './AboutMeIcons/AboutMeIcons.jsx';

// Component Definition.
export default class AboutMe extends React.Component {

  // Component Constructor.
  constructor() {
    super();
  }

  // Component Render.
  render() {
    return (
      <div className="section" id="section-aboutme">

        <div className="title">About Me</div>

        <div className="content text-center">

          <p>
            Hi! My name is Jon and I'm a Front-end Web Developer based in
            Toronto.
          </p>

          <p>
            For the past year I have been focusing on building responsive
            websites to complement various back-end technologies such as Debian
             Linux, Python, Flask, and MongoDB.
          </p>

          <p>
            I am currently in the process of completing the Full Stack Developer
             Certification on FreeCodeCamp.com and learning advanced libraries
             and frameworks such as React.js and AngularJS 2.0.
          </p>

          <AboutMeIcons iconDB={this.props.iconDB}/>

        </div>

      </div>
    );
  } // End Component Render.

} // End Component Definition.
