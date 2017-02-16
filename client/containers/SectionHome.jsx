// React.
import React from 'react';
import Icon from 'components/Icon';
/*
 *
 *  Component Definition.
 *
 */
const SectionHome = () => (
  <div id="section-home" className="viewport-fullpagemax">
    <div className="container-section-content text-center">

      <div className="name">
        Jon Balon
      </div>

      <div className="title">
        React & Node.js Developer
      </div>

      <div className="tagline">
        I'm a Developer with a background in Computer Science,
        Statistics, Analytics, and Data Science.
      </div>

      <div className="container-icons">
        <Icon link="https://github.com/Jon1701" iconClass="icon-github effect-transition-easeinout hover-heavenlyglow" />
        <Icon link="https://ca.linkedin.com/in/jonbalon" iconClass="icon-linkedin effect-transition-easeinout hover-heavenlyglow" />
        <Icon link="https://twitter.com/Jon1764" iconClass="icon-twitter effect-transition-easeinout hover-heavenlyglow" />
      </div>

    </div>
  </div>
);


// Component export.
export default SectionHome;
