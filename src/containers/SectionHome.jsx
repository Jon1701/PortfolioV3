// React.
import React from 'react';

import Icon from 'components/Icon'

// Component definition.
export default class SectionHome extends React.Component {

  // Component render.
  render() {
    return (
      <div className="force-table height-minmax-100vh">
        <div className="force-table-row">





          <div id="section-home" className=" text-center">

            <div className="text-center name">Jon Balon</div>

            <div className="text-center position">Full Stack Developer</div>

            <div className="text-center tagline">I'm a Full Stack Developer with a background in Computer Science, Statistics, Analytics, and Data Science.</div>

            <div className="hr"></div>

            <div className="text-center iconArray">

              <Icon
                iconClass={"icon-github"}
                link={"https://github.com/Jon1701"}
                containerClasses={"icon-hover-heavenlyglow"}
              />
              <Icon
                iconClass={"icon-linkedin"}
                link={"https://ca.linkedin.com/in/jonbalon"}
                containerClasses={"icon-hover-heavenlyglow"}
              />
              <Icon
                iconClass={"icon-twitter"}
                link={"https://twitter.com/Jon1764"}
                containerClasses={"icon-hover-heavenlyglow"}
              />

            </div>

          </div>





        </div>
      </div>
    )
  } // End Component render.

}
