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
      <div className="container-icon">
        <div className={"icon " + this.props.iconClass}></div>
        <div>{this.props.iconName}</div>
      </div>
    ); // End return().
  }; // End render().

}; // End React.Component{}.
