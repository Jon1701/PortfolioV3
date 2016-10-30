// React dependencies.
import React from 'react';
import classNames from 'classnames';

// Component definition.
export default class ContactFormAlertBox extends React.Component {

  // Component render.
  render() {

    const myClasses = classNames({
      'alertbox-invisible noselect': this.props.formSubmissionStatus == null,
      'alertbox': true,
      'alertbox-failure': this.props.formSubmissionStatus == 'FAILURE',
      'alertbox-success': this.props.formSubmissionStatus == 'SUCCESS',
      'alertbox-incomplete': this.props.formSubmissionStatus == 'INCOMPLETE'
    })

    return (
      <div className={myClasses}/>
    )
  }
}
