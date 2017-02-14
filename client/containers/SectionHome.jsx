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

      <div>Jon Balon</div>

      <div>
        Full Stack Developer
      </div>

      <div>
        I'm a Full Stack Developer with a background in Computer Science,
        Statistics, Analytics, and Data Science.
      </div>

      <div className="container-icons">
        <Icon link="https://github.com/Jon1701" iconClass="icon-github" />
        <Icon link="https://ca.linkedin.com/in/jonbalon" iconClass="icon-linkedin" />
        <Icon link="https://twitter.com/Jon1764" iconClass="icon-twitter" />
      </div>

    </div>
  </div>
);


// Component export.
export default SectionHome;
