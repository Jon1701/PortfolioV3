// React.
import React from 'react';

import Icon from 'components/Icon';

// Component definition.
const SectionContactMe = () => (
  <div id="section-contactme" className="viewport-fullpage">
    <div className="container-section-content text-center">

      <div className="heading">
        Contact Me
      </div>

      <p>
        I can be contacted via LinkedIn.
      </p>

      <div className="container-btn-linkedin">
        <Icon
          link={'https://ca.linkedin.com/in/jonbalon'}
          iconClass={'icon-linkedin'}
          label={'LinkedIn'}
          className="btn-contactme btn-linkedin effect-transition-easeinout"
        />

        <Icon
          link={'https://twitter.com/Jon1764'}
          iconClass={'icon-twitter'}
          label={'Twitter'}
          className="btn-contactme btn-twitter effect-transition-easeinout"
        />

        <Icon
          link={'https://github.com/Jon1701'}
          iconClass={'icon-github'}
          label={'GitHub'}
          className="btn-contactme btn-github effect-transition-easeinout"
        />
      </div>

    </div>
  </div>
);

// Component export;
export default SectionContactMe;
