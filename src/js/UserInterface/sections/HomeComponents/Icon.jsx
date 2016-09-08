// React dependencies.
import React from 'react';
import classNames from 'classnames';

// Component Definition.
export default class IconContainer extends React.Component {

  // Component Constructor.
  constructor() {
    super();
  };

  // Component Render.
  render() {
    return (
      <div className="single-icon">
        <div className={"icon " + this.props.iconClass}></div>
        <div className="icon-label">{this.props.iconLabel}</div>
      </div>
    ); // End return();
  }; // End render().

}; // End React.Component{}.
