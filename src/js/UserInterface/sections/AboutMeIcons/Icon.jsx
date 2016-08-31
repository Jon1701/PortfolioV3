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
      <div className={
                      "container-icon " +
                      "container-" + this.props.iconClass +
                      " col-xs-4 col-sm-3 col-lg-2"
                      }>
        <div className={'icon ' + this.props.iconClass}></div>
        <div className="name">{this.props.iconName}</div>
      </div>
    ); // End return().
  } // End render().

} // End React.Component{}.
