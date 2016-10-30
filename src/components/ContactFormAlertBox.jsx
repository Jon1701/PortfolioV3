// React dependencies.
import React from 'react';
import classNames from 'classnames';

// Component definition.
export default class ContactFormAlertBox extends React.Component {

  // Component render.
  render() {

    const myClasses = classNames({
      'invisible': this.props.formSubmitStatus == null,
      'alertbox': true,
      'alertbox-failure': this.props.formSubmitStatus == 'failure',
      'alertbox-success': this.props.formSubmitStatus == 'success',
      'alertbox-incomplete': this.props.formSubmitStatus == 'incomplete'
    })

    return (
      <div className={myClasses}/>
    )
  }
}
