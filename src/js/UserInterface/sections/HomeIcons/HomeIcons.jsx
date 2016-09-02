// React dependencies.
import React from 'react';

// Component Definition.
export default class HomeIcons extends React.Component {

  // Component Constructor.
  constructor() {
    super();
  }

  // Component Render.
  render() {
    return (
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
    ); // End return().
  }; // End render().

}; // End React.Component{}.
