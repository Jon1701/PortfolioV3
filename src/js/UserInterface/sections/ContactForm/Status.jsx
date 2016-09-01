// React dependencies.
import React from 'react';
import classNames from 'classnames';

// Component Definition.
export default class Status extends React.Component {

  // Component Constructor.
  constructor() {
    super();
  };

  // Component Render.
  render() {

    // Classes for this component.
    var myClasses = classNames({
      'status': true,
      'status-success': this.props.validFlag == 'valid',
      'status-fail': this.props.validFlag == 'invalid'
    });

    return (
      <div className={myClasses}>
        <div className="message"/>
      </div>
    );
  }; // End Component Render.

}; // End Component Definition.
