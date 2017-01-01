// React.
import React from 'react';

// React Components.
import Icon from 'components/Icon';
import IconMatrix from 'components/IconMatrix';

// Other.
const iconData = require('json/icons.json'); // Icon data.

/*
 *
 *  Component Definition.
 *
 */
const SectionAboutMe = () => (
  <div id="section-aboutme" className="viewport-fullpage page-container text-center">
    <div className="page-content">

      <div className="page-heading">
        About Me
      </div>

      <p>
        Hi! My name is Jon and I'm a Full Stack Developer based in Toronto.
      </p>

      <p>
        Here are some of the technologies I have used:
      </p>

      <div className="row cursor-arrow">
        <IconMatrix />
      </div>

    </div>
  </div>
);

// Component export.
export default SectionAboutMe;
