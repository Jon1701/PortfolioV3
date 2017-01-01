// React.
import React from 'react';

// Load icon data from JSON file.
const iconData = require('json/icons.json');

import Icon from 'components/Icon';
import IconMatrix from 'components/IconMatrix';

// Component definition.
export default class SectionAboutMe extends React.Component {

  // Component render.
  render() {
    return (
      <div id="section-aboutme" className="page-container text-center">
        <div className="page-content">

          <div className="page-heading">About Me</div>

          <p>Hi! My name is Jon and I'm a Full Stack Developer based in Toronto.</p>

          <p>Here are some of the technologies I have used:</p>

          <div className="row cursor-arrow">
            <IconMatrix/>
          </div>

        </div>
      </div>
    )
  } // End Component render.

}
