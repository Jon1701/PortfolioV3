// React dependencies.
import React from 'react';
import classNames from 'classnames';

// Component Definition.
export default class Email extends React.Component {

  // Component Constructor.
  constructor() {
    super();
  };

  // Function to update the state when the field contents change.
  updateValidate(e) {

    // Field name.
    var fieldName = e.target.getAttribute('email');

    // Field value.
    var fieldValue = e.target.value;

    // Get current validation flag. Either 'invalid', 'valid', or 'default'.
    var currentValidFlag = this.props.validFlag;

    // Regular expression to test if email address is valid.
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Check fields for validity.
    if (fieldValue.length == 0) {

      // Default if field is empty.
      currentValidFlag = 'default';

    } else if (!re.test(fieldValue) && fieldValue.length > 0) {

      // Invalid if field does not contain an email, and if length is more than 0.
      currentValidFlag = 'invalid';

    } else if (re.test(fieldValue)) {

      // Valid if field contains an email.
      currentValidFlag = 'valid';

    }; // End check for validity.

    // Update state.
    this.props.handleChange({
      'email': fieldValue,
      'emailValid': currentValidFlag
    });

  }; // End updateValidate().

  // Component Render.
  render() {

    // Classes for this component.
    var myClasses = classNames({
      'field-default': true,
      'field-invalid': this.props.validFlag == 'invalid',
      'field-valid': this.props.validFlag == 'valid'
    });

    return (
      <div className="form-field">
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" className={myClasses} onChange={this.updateValidate.bind(this)} value={this.props.value}/>
      </div>
    );
  }; // End Component Render.

}; // End Component Definition.
