// React dependencies.
import React from 'react';
import classNames from 'classnames';
import axios from 'axios';

// Redux dependencies.
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components.
import ContactFormAlertBox from 'components/ContactFormAlertBox'

// Actions.
import { enableSubmitButton, disableSubmitButton, updateNameField, updateEmailField, updateSubjectField, updateGotchaField, updateMessageField, updateFormSubmitStatus, resetForm } from 'actions/index.js';

// Component definition.
class ContactForm extends React.Component {

  // Handles form submission.
  handleSubmit(e) {

    // Reset form submit status.
    this.props.updateFormSubmitStatus(null);

    // Prevent any default actions.
    e.preventDefault();

    // Check if all fields are valid.
    const allFieldsValid = this.props.nameIsValid && this.props.emailIsValid && this.props.subjectIsValid && this.props.gotchaIsValid && this.props.messageIsValid;

    // Send AJAX request if all fields are valid.
    if (allFieldsValid) {

      this.props.disableSubmitButton();

      axios({
        method: 'post',
        url: '1https://formspree.io/testyouremail@mailinator.com',
        data: {
          name: this.props.name,
          email: this.props.email,
          _subject: this.props.subject,
          _gotcha: this.props.gotcha,
          message: this.props.message
        }
      }).then((res) => {

        // Update form submit status to success.
        this.props.updateFormSubmitStatus('success');

        // Reset form after 5 seconds.
        setTimeout(this.props.resetForm, 5000);

      }).catch((err) => {

        // Some error occurred.
        // Display error in console.
        console.log(err);

        this.props.enableSubmitButton()

        // Update form status to show indicator to user.
        this.props.updateFormSubmitStatus('failure');

      })

    } else {

      // Update form submit status to incomplete.
      this.props.updateFormSubmitStatus('incomplete');

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

        <ContactFormAlertBox formSubmitStatus={this.props.formSubmitStatus}/>

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

    formSubmitStatus: state.contactForm.formSubmitStatus,
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

    updateFormSubmitStatus: updateFormSubmitStatus,
    resetForm: resetForm,

    enableSubmitButton: enableSubmitButton,
    disableSubmitButton: disableSubmitButton
  }, dispatch)
}


// Allows this component to access the Redux store.
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
