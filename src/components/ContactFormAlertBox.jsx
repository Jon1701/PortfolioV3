// React dependencies.
import React from 'react';
import classNames from 'classnames';

// String constants.
const constants = require('json/constants.json');

// Component definition.
export default class ContactFormAlertBox extends React.Component {

  getAlertBox(status) {

    switch (status) {
      case constants.FAILURE:

        return (
          <div className="alertbox alertbox-failure">
            Server error. Message not sent!
          </div>
        )

      case constants.SUCCESS:
        return (
          <div className="alertbox alertbox-success">
            Message sent!
          </div>
        )

      case constants.INCOMPLETE:
        return (
          <div className="alertbox alertbox-incomplete">
            Please fill out all fields.
          </div>
        )
      default:
        return (
          <div className="alertbox alertbox-invisible noselect">
            Invisible
          </div>
        )

    }// end switch.

  }

  // Component render.
  render() {

    // Get the form submission status.
    const status = this.props.formSubmissionStatus;

    // Return corresponding alertbox.
    return this.getAlertBox(status)
  }
}
