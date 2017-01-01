// React.
import React from 'react';

// Other dependencies.
import classNames from 'classnames';

// String constants.
const constants = require('json/constants.json');

/*
 *
 *  Component definition.
 *
 */
export default class ContactFormAlertBox extends React.Component {

  // Component constructor.
  constructor(props) {
    super(props);

    // Bind methods to component instance.
    this.getAlertBox = this.getAlertBox.bind(this);
  }

  // Method to get the correct Alert Box.
  getAlertBox(status) {
    // Different Alert Box components based on Succes, Failure, or Incomplete.
    switch (status) {
      case constants.FAILURE:
        return <AlertBoxFail />;
      case constants.SUCCESS:
        return <AlertBoxSuccess />;
      case constants.INCOMPLETE:
        return <AlertBoxIncomplete />;
      default:
        return <AlertBoxInvisible />;
    }
  }

  // Component render.
  render() {
    // Return corresponding Alert Box based on the status of form submission.
    return this.getAlertBox(this.props.formSubmissionStatus);
  }
}

/*
 *
 *  Presentational Components.
 *
 */

// Alert Box: Success.
const AlertBoxSuccess = () => (
  <div className="alertbox alertbox-success">
    Message sent!
  </div>
);

// Alert Box: Fail.
const AlertBoxFail = () => (
  <div className="alertbox alertbox-failure">
    Server error. Message not sent!
  </div>
);

// Alert Box: Incomplete.
const AlertBoxIncomplete = () => (
  <div className="alertbox alertbox-incomplete">
    Please fill out all fields.
  </div>
);

// Alert Box: Invisible.
const AlertBoxInvisible = () => (
  <div className="alertbox alertbox-invisible noselect">
    Invisible
  </div>
);
