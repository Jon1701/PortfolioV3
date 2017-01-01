// React.
import React from 'react';

// Components.
import ContactFormAlertBox from 'components/ContactFormAlertBox'

// Redux dependencies.
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions.
import { resetForm } from 'actions/index.js';
import { resetFormSubmissionStatus, setFormSubmissionStatusToSuccess, setFormSubmissionStatusToFailure, setFormSubmissionStatusToIncomplete } from 'actions/actions_FormSubmissionStatus'
import { enableSubmitButton, disableSubmitButton } from 'actions/actions_FormSubmitButton';
import { updateNameField, updateEmailField, updateSubjectField, updateGotchaField, updateMessageField } from 'actions/actions_FormFieldUpdates';

// Other libraries.
import axios from 'axios';  // Requests.
import classNames from 'classnames';  // Toggleable classes.

// Component definition.
class ContactForm extends React.Component {

  // Component constructor.
  constructor(props) {
    super(props);

    // Bind methods to component instance.
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Handles form submission.
  handleSubmit(e) {
    // Deconstruct props: form field validity.
    const { nameIsValid, emailIsValid, subjectIsValid, gotchaIsValid, messageIsValid } = this.props;

    // Deconstruct props: form fields.
    const { name, email, subject, gotcha, message } = this.props;

    // Reset form submit status.
    this.props.resetFormSubmissionStatus();

    // Prevent any default actions.
    e.preventDefault();

    // Check if all fields are valid.
    const allFieldsValid = nameIsValid && emailIsValid && subjectIsValid
      && gotchaIsValid && messageIsValid;

    // Send AJAX request if all fields are valid.
    if (allFieldsValid) {
      // Disable the submit button.
      this.props.disableSubmitButton();

      // Submit form.
      axios({
        method: 'post',
        url: atob('aHR0cHM6Ly9mb3Jtc3ByZWUuaW8vam9uLmouYmFsb25AZ21haWwuY29t'),
        data: {
          name,
          email,
          message,
          _subject: subject,
          _gotcha: gotcha,
        },
      }).then(() => {
        // Update form submit status to success.
        this.props.setFormSubmissionStatusToSuccess();

        // Reset form after 5 seconds.
        setTimeout(this.props.resetForm, 5000);
      }).catch(() => {
        // Enable Submit button.
        this.props.enableSubmitButton();

        // Update form status to show indicator to user.
        this.props.setFormSubmissionStatusToFailure();
      });
    } else {
      // Update form submit status to incomplete.
      this.props.setFormSubmissionStatusToIncomplete();
    }
  }

  // Component render.
  render() {
    // Deconstruct props: form field validity.
    const { nameIsValid, emailIsValid, subjectIsValid, messageIsValid } = this.props;

    // Deconstruct props: form fields.
    const { name, email, subject, gotcha, message } = this.props;

    // CSS classes to indicate if the Name field is valid or not.
    const nameFieldClasses = classNames({
      'field-validation-default': true,
      'field-validation-fail': nameIsValid === false,
      'field-validation-success': nameIsValid === true,
    });

    // CSS classes to indicate if the Email field is valid or not.
    const emailFieldClasses = classNames({
      'field-validation-default': true,
      'field-validation-fail': emailIsValid === false,
      'field-validation-success': emailIsValid === true,
    });

    // CSS classes to indicate if the Subject field is valid or not.
    const subjectFieldClasses = classNames({
      'field-validation-default': true,
      'field-validation-fail': subjectIsValid === false,
      'field-validation-success': subjectIsValid === true,
    });

    // CSS classes to indicate if the Message field is valid or not.
    const messageFieldClasses = classNames({
      'field-validation-default': true,
      'field-validation-fail': messageIsValid === false,
      'field-validation-success': messageIsValid === true,
    });

    return (
      <form onSubmit={this.handleSubmit}>
        <ContactFormAlertBox formSubmissionStatus={this.props.formSubmissionStatus} />
        <div className="form-field">
          <input
            className={nameFieldClasses}
            value={name}
            name="name"
            type="text"
            placeholder="Name"
            onChange={(e) => { this.props.updateNameField(e.target.value); }}
          />
        </div>

        <div className="form-field">
          <input
            className={emailFieldClasses}
            value={email}
            name="email"
            type="text"
            placeholder="E-mail address"
            onChange={(e) => { this.props.updateEmailField(e.target.value); }}
          />
        </div>

        <div className="form-field">
          <input
            className={subjectFieldClasses}
            value={subject}
            name="subject"
            type="text"
            placeholder="Subject"
            onChange={(e) => { this.props.updateSubjectField(e.target.value); }}
          />
        </div>

        <div className="form-field hidden">
          <input
            value={gotcha}
            name="_gotcha"
            type="text"
            placeholder="Gotcha"
            onChange={(e) => { this.props.updateGotchaField(e.target.value); }}
          />
        </div>

        <div className="form-field">
          <textarea
            className={messageFieldClasses}
            value={message}
            name="message"
            type="text"
            placeholder="Message"
            onChange={(e) => { this.props.updateMessageField(e.target.value); }}
          />
        </div>

        <div className="form-submit-container">
          <button type="submit" disabled={!this.props.statusSubmitButton}>
            <span className="icon icon-paperplane" /> Send Message
          </button>
        </div>

      </form>
    );
  }

}

// Map state to props.
const mapStateToProps = state => ({
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
});

// Maps actions to props.
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    updateNameField,
    updateEmailField,
    updateSubjectField,
    updateGotchaField,
    updateMessageField,

    resetForm,

    enableSubmitButton,
    disableSubmitButton,

    resetFormSubmissionStatus,
    setFormSubmissionStatusToSuccess,
    setFormSubmissionStatusToFailure,
    setFormSubmissionStatusToIncomplete,
  }, dispatch)
);

// Allows this component to access the Redux store.
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

// Prop validation.
ContactForm.propTypes = {
  nameIsValid: React.PropTypes.bool,
  emailIsValid: React.PropTypes.bool,
  subjectIsValid: React.PropTypes.bool,
  gotchaIsValid: React.PropTypes.bool,
  messageIsValid: React.PropTypes.bool,
  name: React.PropTypes.string,
  email: React.PropTypes.string,
  subject: React.PropTypes.string,
  gotcha: React.PropTypes.string,
  message: React.PropTypes.string,
  //formSubmissionStatus: React.PropTypes.bool,
  updateNameField: React.PropTypes.func,
  updateEmailField: React.PropTypes.func,
  updateSubjectField: React.PropTypes.func,
  updateGotchaField: React.PropTypes.func,
  updateMessageField: React.PropTypes.func,
  resetForm: React.PropTypes.func,
  enableSubmitButton: React.PropTypes.func,
  disableSubmitButton: React.PropTypes.func,
  resetFormSubmissionStatus: React.PropTypes.func,
  setFormSubmissionStatusToSuccess: React.PropTypes.func,
  setFormSubmissionStatusToFailure: React.PropTypes.func,
  setFormSubmissionStatusToIncomplete: React.PropTypes.func,
  //statusSubmitButton: React.PropTypes.func,
};
