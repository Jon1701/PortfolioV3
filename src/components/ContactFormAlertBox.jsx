// React dependencies.
import React from 'react';
import classNames from 'classnames';

// Component definition.
export default class ContactFormAlertBox extends React.Component {

  getAlertBox(status) {

    switch (status) {
      case 'FAILURE':

        return (
          <div className="alertbox alertbox-failure">
            Server error. Message not sent!
          </div>
        )

      case 'SUCCESS':
        return (
          <div className="alertbox alertbox-success">
            Message sent!
          </div>
        )

      case 'INCOMPLETE':
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
