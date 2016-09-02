// React dependencies.
import React from 'react';
import IconMatrix from './AboutMeComponents/IconMatrix.jsx';

// Component Definition.
export default class AboutMe extends React.Component {

  // Component Constructor.
  constructor() {
    super();
  };

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
            Here are some of the technologies I have used:
          </p>

          <IconMatrix/>

        </div>

      </div>
    );
  }; // End Component Render.

}; // End Component Definition.
