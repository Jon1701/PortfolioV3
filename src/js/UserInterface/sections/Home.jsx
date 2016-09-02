// React dependencies.
import React from 'react';
import IconContainer from './HomeComponents/IconContainer.jsx';

// Component Definition.
export default class Home extends React.Component {

  // Component Constructor.
  constructor() {
    super();
  };

  // Component Render.
  render() {
    return (
      <div className="section" id="section-home">

        <div className="name text-center">
          Jon Balon
        </div>

        <div className="position text-center">
          Full Stack Developer
        </div>

        <div className="tagline text-center">
          I'm a Full Stack Developer with a background in Computer Science, Statistics,
          Analytics, and Data Science.
        </div>

        <div className="hr"/>

        <IconContainer/>

      </div>
    ); // End return().
  }; // End render().

}; // End React.Component{}.
