// React.
import React from 'react';

import Icon from 'components/Icon'

// Component definition.
export default class SectionHome extends React.Component {

  // Component render.
  render() {
    return (
      <div className="force-table viewport-maxheight">
        <div className="force-table-row">





          <div id="section-home" className="page-container text-center">
            <div className="page-content">
              <div className="name">Jon Balon</div>

              <div className="position">Full Stack Developer</div>

              <div className="tagline">I'm a Full Stack Developer with a background in Computer Science, Statistics, Analytics, and Data Science.</div>

              <div className="hr"></div>

              <div className="iconArray">

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
      </div>
    )
  } // End Component render.

}
