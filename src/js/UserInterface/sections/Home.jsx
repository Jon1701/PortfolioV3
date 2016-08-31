// React dependencies.
import React from 'react';

// Component Definition.
export default class Home extends React.Component {

  // Component Constructor.
  constructor() {
    super();
  }

  // Component Render.
  render() {
    return (
      <div className="section" id="section-home">

        <div className="name text-center">
          Jon Balon
        </div>

        <div className="position text-center">
          Front-end Web Developer
        </div>

        <div className="tagline text-center">
          I'm a web developer with a background in Computer Science, Statistics,
          Analytics, and Data Science.
        </div>

        <div className="hr"/>

        <div className="container-icons text-center noselect">
          <a href="" target="_blank">
            <i className="icon icon-github"></i>
          </a>

          <a href="" target="_blank">
            <i className="icon icon-linkedin"></i>
          </a>

          <a href="" target="_blank">
            <i className="icon icon-freecodecamp"></i>
          </a>
        </div>

      </div>
    ); // End return().
  }; // End render().

}; // End React.Component{}.
