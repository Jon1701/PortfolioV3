// React.
import React from 'react';

// Component definition.
export default class SectionHome extends React.Component {

  // Component render.
  render() {
    return (
      <div id="section-home" className="height-100vmin height-100vmax text-center">

        <h1 className="text-center">Jon Balon</h1>

        <h2 className="text-center">Full Stack Developer</h2>

        <h4 className="text-center">I'm a Full Stack Developer with a background in Computer Science, Statistics, Analytics, and Data Science.</h4>

        <div className="text-center iconarray">
          <a href="https://github.com/Jon1701" target="_blank"><span className="icon icon-github icon-hover-heavenlyglow"/></a>
          <a href="https://ca.linkedin.com/in/jonbalon" target="_blank"><span className="icon icon-linkedin icon-hover-heavenlyglow"/></a>
          <a href="https://twitter.com/Jon1764" target="_blank"><span className="icon icon-twitter icon-hover-heavenlyglow"/></a>
        </div>

      </div>
    )
  } // End Component render.

}
