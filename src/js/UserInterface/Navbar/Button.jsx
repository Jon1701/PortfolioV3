// React dependencies.
import React from 'react';
import classNames from 'classnames';

// Component Definition.
export default class Button extends React.Component {

  // Component Constructor.
  constructor() {
    super();
  };

  // Component Render.
  render() {
    return (
      <div className="navbar-button noselect">
        <a href={this.props.link}>
          <span className={"icon " + this.props.iconClass}> </span>
          <span className="name">{this.props.text}</span>
        </a>
      </div>
    ); // End return();
  }; // End render().

}; // End React.Component{}.
