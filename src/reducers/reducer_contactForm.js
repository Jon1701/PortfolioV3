// Default form values.
const defaultForm = {
  name: '',     // Name.
  email: '',    // Email.
  _subject: '', // Subject.
  _gotcha: '',  // Gotcha.
  message: '',  // Message.

  nameIsValid: null,    // Name field validity.
  emailIsValid: null,   // Email field validity.
  subjectIsValid: null, // Subject field validity.
  gotchaIsValid: true,  // Gotcha field validity.
  messageIsValid: null, // Message field validity.

  allFieldsValid: null, // Indicates if all fields valid.
}

// Regular expressions for testing field validity.
const REGEX_VALID_NAME = /.{3,40}/;
const REGEX_VALID_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const REGEX_VALID_SUBJECT = /.{3,40}/;
const REGEX_VALID_MESSAGE = /.{5,1000}/;

// ContactForm reducer definition.
const contactForm = (state=defaultForm, action) => {

  switch(action.type) {

    // Updates value which indicates whether or not all form fields are valid.
    //
    // This action is called from the view, not from the reducer.
    case 'UPDATE_ALL_FIELDS_VALID_FLAG':
      return Object.assign({}, state, {allFieldsValid: action.payload})

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
      return Object.assign({}, state, {_subject: subject, subjectIsValid: REGEX_VALID_SUBJECT.test(subject)})

    case 'UPDATE_GOTCHA_FIELD':
      return Object.assign({}, state, {_gotcha: action.payload, gotchaIsValid: true})

    case 'UPDATE_MESSAGE_FIELD':
      let message = action.payload.trim();
      return Object.assign({}, state, {message: message, messageIsValid: REGEX_VALID_MESSAGE.test(message)})

  }

  // Return default state.
  return state;
}

export default contactForm;
