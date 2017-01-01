// String constants.
const constants = require('json/constants.json');

// Default form values.
const defaultForm = {
  name: '',     // Name field contents.
  email: '',    // Email field contents.
  subject: '',  // Subject field contents.
  gotcha: '',   // Gotcha field contents.
  message: '',  // Message field contents.

  nameIsValid: null,    // Name field validity.
  emailIsValid: null,   // Email field validity.
  subjectIsValid: null, // Subject field validity.
  gotchaIsValid: true,  // Gotcha field validity.
  messageIsValid: null, // Message field validity.

  formSubmissionStatus: null, // Form submit status.

  statusSubmitButton: true,

}

// Regular expressions for testing field validity.
const REGEX_VALID_NAME = /.{3,40}/;
const REGEX_VALID_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const REGEX_VALID_SUBJECT = /.{3,40}/;
const REGEX_VALID_MESSAGE = /.{5,1000}/;

// ContactForm reducer definition.
const contactForm = (state=defaultForm, action) => {

  switch(action.type) {

    case 'ENABLE_SUBMIT_BUTTON':
      return Object.assign({}, state, {statusSubmitButton: true});

    case 'DISABLE_SUBMIT_BUTTON':
      return Object.assign({}, state, {statusSubmitButton: false});

    case 'RESET_FORM_SUBMISSION_STATUS':
      return Object.assign({}, state, {formSubmissionStatus: null});

    case 'SET_FORM_SUBMISSION_STATUS_SUCCESS':
      return Object.assign({}, state, {formSubmissionStatus: constants.SUCCESS});

    case 'SET_FORM_SUBMISSION_STATUS_FAILURE':
      return Object.assign({}, state, {formSubmissionStatus: constants.FAILURE});

    case 'SET_FORM_SUBMISSION_STATUS_INCOMPLETE':
      return Object.assign({}, state, {formSubmissionStatus: constants.INCOMPLETE});

    case 'RESET_FORM':
      return Object.assign({}, state, defaultForm)

    /*
     *  In each case, the contents of the input field have their leading and
     *  trailing whitespace removed.
     *
     *  The contents of the input field is then stored into its corresponding
     *  state variable (name, email, _subject, _gotcha, message).
     *
     *  A regular expression is then used to test the field contents to see if
     *  they are valid. The result of this test is stored in its corresponding
     *  state variable (nameIsValid, emailIsValid, subjectIsValid,
     *  gotchaIsvalid, messageIsValid).
     */

    case 'UPDATE_NAME_FIELD':
      let name = action.payload.trim();
      return Object.assign({}, state, {name: name, nameIsValid: REGEX_VALID_NAME.test(name)})

    case 'UPDATE_EMAIL_FIELD':
      let email = action.payload.trim();
      return Object.assign({}, state, {email: email, emailIsValid: REGEX_VALID_EMAIL.test(email)})

    case 'UPDATE_SUBJECT_FIELD':
      let subject = action.payload.trim();
      return Object.assign({}, state, {subject: subject, subjectIsValid: REGEX_VALID_SUBJECT.test(subject)})

    case 'UPDATE_GOTCHA_FIELD':
      return Object.assign({}, state, {gotcha: action.payload, gotchaIsValid: true})

    case 'UPDATE_MESSAGE_FIELD':
      let message = action.payload.trim();
      return Object.assign({}, state, {message: message, messageIsValid: REGEX_VALID_MESSAGE.test(message)})

  }

  // Return default state.
  return state;
}

export default contactForm;
