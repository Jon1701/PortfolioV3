// React dependencies.
import React from 'react';

// Component Definition.
export default class Icon extends React.Component {

  // Component Constructor.
  constructor() {
    super();
  }

  // Component Render.
  render() {
    return (
      <div className="container-single-icon">
        <a href={this.props.link} target="_blank">
          <span className={"icon " + this.props.iconClass}></span>
        </a>
      </div>
    ); // End return().
  }; // End render().

}; // End React.Component{}.
