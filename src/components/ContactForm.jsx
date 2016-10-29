// React dependencies.
import React from 'react';
import classNames from 'classnames';

// Redux dependencies.
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components.
import ContactFormAlertBox from 'components/ContactFormAlertBox'

// Actions.
import { updateNameField, updateEmailField, updateSubjectField, updateGotchaField, updateMessageField, updateAllFieldsValidFlag } from 'actions/index.js';





const sendAjaxRequest = (formData) => {

  // Create AJAX request.
  var xhr = new XMLHttpRequest();

  // Server URLs.
  //
  // Base64 decode of formspree.
  var url = 'https://formspree.io/testyouremail@mailinator.com';

  // POST request to email server.
  xhr.open('POST', url, true);

  // Send request data as type application/json.
  xhr.setRequestHeader('Content-Type', 'application/json');

  // Send data to server.
  xhr.send(JSON.stringify(formData));

  // Handle response from the server.
  xhr.onreadystatechange = function() {

    // Status codes.
    var DONE = 4;  // Request done.
    var OK = 200;  // Success.

    // Check if the POST request is done.
    if (xhr.readyState === DONE) {

      // Check if the request was a success, and no errors occurred.
      if (xhr.status === OK) {

        console.log(xhr.status)

        // Reset all fields, and validity states by setting this.state
        // back to default.

        // After 3 seconds, hide the status window.
        //setTimeout(resetState, 3000);

      } else {

        // Error occurred.
        console.log('error: ' + xhr.status);

      }; // End xhr status check.

    }; // End xhr ready state check.

  }; // End xhr onreadystatechange.
}














// Component definition.
class ContactForm extends React.Component {

  // Handles form submission.
  handleSubmit(e) {

    // Prevent any default actions.
    e.preventDefault();

    // Check if all fields are valid.
    const allFieldsValid = this.props.nameIsValid && this.props.emailIsValid && this.props.subjectIsValid && this.props.gotchaIsValid && this.props.messageIsValid;

    // Update allFieldsValid in state.
    this.props.updateAllFieldsValidFlag(allFieldsValid);

    // Send AJAX request if all fields are valid.
    if (allFieldsValid) {

      const formData = {
        name: this.props.name,
         email: this.props.email,
         _subject: this.props.subject,
         _gotcha: this.props.gotcha,
         message: this.props.message
      }

      sendAjaxRequest(formData)

    }

  }

  // Component render.
  render() {

    // CSS classes to indicate to the user if the Name field
    // is valid or not.
    const nameFieldClasses = classNames({
      'field-validation-default': true,
      'field-validation-fail': this.props.nameIsValid == false,
      'field-validation-success': this.props.nameIsValid == true
    });

    // CSS classes to indicate to the user if the Email field
    // is valid or not.
    const emailFieldClasses = classNames({
      'field-validation-default': true,
      'field-validation-fail': this.props.emailIsValid == false,
      'field-validation-success': this.props.emailIsValid == true
    });

    // CSS classes to indicate to the user if the Subject field
    // is valid or not.
    const subjectFieldClasses = classNames({
      'field-validation-default': true,
      'field-validation-fail': this.props.subjectIsValid == false,
      'field-validation-success': this.props.subjectIsValid == true
    });

    // CSS classes to indicate to the user if the Message field
    // is valid or not.
    const messageFieldClasses = classNames({
      'field-validation-default': true,
      'field-validation-fail': this.props.messageIsValid == false,
      'field-validation-success': this.props.messageIsValid == true
    });

    return (
      <div>

        <ContactFormAlertBox flag={this.props.allFieldsValid}/>

        <form onSubmit={this.handleSubmit.bind(this)}>

          <div className="form-field">
            <input
              className={nameFieldClasses}
              value={this.props.name}
              name="name"
              type="text"
              placeholder="Name"
              onChange={ (e) => {this.props.updateNameField(e.target.value)} }
            />
          </div>

          <div className="form-field">
            <input
              className={emailFieldClasses}
              value={this.props.email}
              name="email"
              type="text"
              placeholder="E-mail address"
              onChange={ (e) => {this.props.updateEmailField(e.target.value)} }
            />
          </div>

          <div className="form-field">
            <input
              className={subjectFieldClasses}
              value={this.props.subject}
              name="_subject"
              type="text"
              placeholder="Subject"
              onChange={ (e) => {this.props.updateSubjectField(e.target.value)} }
            />
          </div>

          <div className="form-field hidden">
            <input
              value={this.props.gotcha}
              name="_gotcha"
              type="text"
              placeholder="Gotcha"
              onChange={ (e) => {this.props.updateGotchaField(e.target.value)} }
            />
          </div>

          <div className="form-field">
            <textarea
              className={messageFieldClasses}
              value={this.props.message}
              name="message"
              type="text"
              placeholder="Message"
              onChange={ (e) => {this.props.updateMessageField(e.target.value)} }
            />
          </div>

          <div className="form-submit-container">
            <button type="submit">
              <span className="icon icon-paperplane"/> Send Message
            </button>
          </div>

        </form>
      </div>
    )
  }

}

// Function to map state to props.
//
// this.state.contactForm.name -> this.props.name
// this.state.contactForm.email -> this.props.email
// this.state.contactForm.nameIsValid -> this.props.nameIsValid
//
// and so on...
const mapStateToProps = (state) => {
  return {
    name: state.contactForm.name,
    email: state.contactForm.email,
    subject: state.contactForm.subject,
    gotcha: state.contactForm.gotcha,
    message: state.contactForm.message,

    nameIsValid: state.contactForm.nameIsValid,
    emailIsValid: state.contactForm.emailIsValid,
    subjectIsValid: state.contactForm.subjectIsValid,
    gotchaIsValid: state.contactForm.gotchaIsValid,
    messageIsValid: state.contactForm.messageIsValid,

    allFieldsValid: state.contactForm.allFieldsValid
  }
}

// Function to allow access of dispatch actions as props.
//
// this.props.updateNameField().
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateNameField: updateNameField,
    updateEmailField: updateEmailField,
    updateSubjectField: updateSubjectField,
    updateGotchaField: updateGotchaField,
    updateMessageField: updateMessageField,
    updateAllFieldsValidFlag: updateAllFieldsValidFlag
  }, dispatch)
}


// Allows this component to access the Redux store.
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
