// React dependencies.
import React from 'react';
import classNames from 'classnames';

// Component definition.
export default class ContactFormAlertBox extends React.Component {

  // Component render.
  render() {

    const myClasses = classNames({
      'invisible': this.props.flag == null,
      'alertbox': true,
      'alertbox-success': this.props.flag == true,
      'alertbox-failure': this.props.flag == false
    })

    return (
      <div className={myClasses}/>
    )
  }
}
