// React dependencies.
import React from 'react';

// Component Definition.
export default class Button extends React.Component {

  // Component Constructor.
  constructor() {
    super();
  }

  // Component Render.
  render() {

    return (
      <div className="button">
        <a href={this.props.link} target="_blank">
          <div className={"icon " +  this.props.iconClass}></div>
          <div className="icon-name">{this.props.iconName}</div>
        </a>
      </div>
    );
  } // End Component Render.

} // End Component Definition.
