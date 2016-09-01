// React dependencies.
import React from 'react';
import classNames from 'classnames';

// Component Definition.
export default class Message extends React.Component {

  // Component Constructor.
  constructor() {
    super();
  };

  // Function to update the state when the field contents change.
  updateValidate(e) {

    // Field name.
    var fieldName = e.target.getAttribute('message');

    // Field value.
    var fieldValue = e.target.value;

    // Get current validation flag. Either 'invalid', 'valid', or 'default'.
    var currentValidFlag = this.props.validFlag;

    // Check fields for validity.
    if (fieldValue.length == 0) {

      // Default if field is empty.
      currentValidFlag = 'default';

    } else if ((fieldValue.length > 0) && (fieldValue.length < 15) || (fieldValue.length > 300)) {

      // Invalid if length is greater than 0 and less than 15, or greater than 300.
      currentValidFlag = 'invalid';

    } else if ((fieldValue.length >= 15) && (fieldValue.length <= 300)) {

      // Valid if length between 15 and 300.
      currentValidFlag = 'valid';

    }; // End check for validity.

    // Update state.
    this.props.handleChange({
      'message': fieldValue,
      'messageValid': currentValidFlag
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
        <label htmlFor="message">Message:</label>
        <textarea name="message" className={myClasses} onChange={this.updateValidate.bind(this)} value={this.props.value}></textarea>
      </div>
    );
  }; // End Component Render.

}; // End Component Definition.
