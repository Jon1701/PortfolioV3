// React dependencies.
import React from 'react';
import classNames from 'classnames';

// Component Definition.
export default class Subject extends React.Component {

  // Component Constructor.
  constructor() {
    super();
  };

  // Function to update the state when the field contents change.
  updateValidate(e) {

    // Field name.
    var fieldName = e.target.getAttribute('subject');

    // Field value.
    var fieldValue = e.target.value;

    // Get current validation flag. Either 'invalid', 'valid', or 'default'.
    var currentValidFlag = this.props.validFlag;

    // Check fields for validity.
    if (fieldValue.length == 0) {

      // Default if field is empty.
      currentValidFlag = 'default';

    } else if ((fieldValue.length > 0) && (fieldValue.length < 3) || (fieldValue.length > 20)) {

      // Invalid if length is greater than 0 and less than 3, or greater than 20.
      currentValidFlag = 'invalid';

    } else if ((fieldValue.length >= 3) && (fieldValue.length <= 20)) {

      // Valid if length between 3 and 20.
      currentValidFlag = 'valid';

    }; // End check for validity.

    // Update state.
    this.props.handleChange({
      '_subject': fieldValue,
      '_subjectValid': currentValidFlag
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
        <label htmlFor="name">Subject:</label>
        <input type="text" name="_subject" className={myClasses} onChange={this.updateValidate.bind(this)} value={this.props.value}/>
      </div>
    );
  }; // End Component Render.

}; // End Component Definition.
