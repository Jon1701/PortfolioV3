// React dependencies.
import React from 'react';
import classNames from 'classnames';

// Redux dependencies.
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components.
import ContactFormAlertBox from 'components/ContactFormAlertBox'

// Actions.
import { resetForm } from 'actions/index.js';
import { resetFormSubmissionStatus, setFormSubmissionStatusToSuccess, setFormSubmissionStatusToFailure, setFormSubmissionStatusToIncomplete } from 'actions/actions_FormSubmissionStatus'
import { enableSubmitButton, disableSubmitButton } from 'actions/actions_FormSubmitButton';
import { updateNameField, updateEmailField, updateSubjectField, updateGotchaField, updateMessageField } from 'actions/actions_FormFieldUpdates';

// Other libraries.
import axios from 'axios';  // Requests.

// Component definition.
class ContactForm extends React.Component {

  // Handles form submission.
  handleSubmit(e) {

    // Reset form submit status.
    this.props.resetFormSubmissionStatus();

    // Prevent any default actions.
    e.preventDefault();

    // Check if all fields are valid.
    const allFieldsValid = this.props.nameIsValid && this.props.emailIsValid && this.props.subjectIsValid && this.props.gotchaIsValid && this.props.messageIsValid;

    // Send AJAX request if all fields are valid.
    if (allFieldsValid) {

      // Disable the submit button.
      this.props.disableSubmitButton();

      // Submit form.
      axios({
        method: 'post',
        //url: 'https://formspree.io/testyouremail@mailinator.com',
        url: atob('aHR0cHM6Ly9mb3Jtc3ByZWUuaW8vam9uLmouYmFsb25AZ21haWwuY29t'),
        data: {
          name: this.props.name,
          email: this.props.email,
          _subject: this.props.subject,
          _gotcha: this.props.gotcha,
          message: this.props.message
        }
      }).then((res) => {

        // Update form submit status to success.
        this.props.setFormSubmissionStatusToSuccess();

        // Reset form after 5 seconds.
        setTimeout(this.props.resetForm, 5000);

      }).catch((err) => {

        // Enable Submit button.
        this.props.enableSubmitButton();

        // Update form status to show indicator to user.
        this.props.setFormSubmissionStatusToFailure();

      })

    } else {

      // Update form submit status to incomplete.
      this.props.setFormSubmissionStatusToIncomplete();

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

        <ContactFormAlertBox formSubmissionStatus={this.props.formSubmissionStatus}/>

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
              name="subject"
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
            <button type="submit" disabled={!this.props.statusSubmitButton}>
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

    statusSubmitButton: state.contactForm.statusSubmitButton,

    formSubmissionStatus: state.contactForm.formSubmissionStatus,
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

    resetForm: resetForm,

    enableSubmitButton: enableSubmitButton,
    disableSubmitButton: disableSubmitButton,

    resetFormSubmissionStatus: resetFormSubmissionStatus,
    setFormSubmissionStatusToSuccess: setFormSubmissionStatusToSuccess,
    setFormSubmissionStatusToFailure: setFormSubmissionStatusToFailure,
    setFormSubmissionStatusToIncomplete: setFormSubmissionStatusToIncomplete,
  }, dispatch)
}


// Allows this component to access the Redux store.
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
