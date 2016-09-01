// React dependencies.
import React from 'react';
import classNames from 'classnames';

// Component Definition.
export default class Gotcha extends React.Component {

  // Component Constructor.
  constructor() {
    super();
  };

  // Function to update the state when the field contents change.
  updateValidate(e) {

    // Field name.
    var fieldName = e.target.getAttribute('_gotcha');

    // Field value.
    var fieldValue = e.target.value;

    // Update state.
    this.props.handleChange({
      '_gotcha': fieldValue,
      '_gotchaValid': 'valid'
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
        <label htmlFor="_gotcha">Gotcha:</label>
        <input type="text" name="_gotcha" className={myClasses} onChange={this.updateValidate.bind(this)} value={this.props.value}/>
      </div>
    );
  }; // End Component Render.

}; // End Component Definition.
