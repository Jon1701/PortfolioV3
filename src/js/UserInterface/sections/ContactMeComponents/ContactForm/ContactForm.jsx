// React dependencies.
import React from 'react';
import classNames from 'classnames';

// Form status.
import FormStatus from './FormStatus.jsx';

// Fields.
import Name from './Fields/Name.jsx';
import Email from './Fields/Email.jsx';
import Subject from './Fields/Subject.jsx';
import Gotcha from './Fields/Gotcha.jsx';
import Message from './Fields/Message.jsx';

// Component Definition.
export default class ContactForm extends React.Component {

  // Component Constructor.
  constructor() {
    super();

    this.state = {

      // Form field values.
      name: '',
      email: '',
      _subject: '',
      message: '',
      _gotcha: '',

      // Form field validation.
      nameValid: 'default',
      emailValid: 'default',
      _subjectValid: 'default',
      messageValid: 'default',
      _gotchaValid: 'valid',

      // Form validation.
      formValid: 'default',

      // Submit button disabled.
      submitDisabled: false
    }
  }

  updateFieldAndValidate(newState) {
    this.setState(newState);
  };

 componentDidMount() {

   // Helper function.
   // Sends an AJAX request.
   var sendAjax = function(data, thisComp) {

     // Create AJAX request.
     var xhr = new XMLHttpRequest();

     // Server URLs.
     //
     // Base64 decode of formspree.
     var url = atob('aHR0cHM6Ly9mb3Jtc3ByZWUuaW8vam9uLmouYmFsb25AZ21haWwuY29t');

     // Debug URL to prevent spamming my inbox.
     // Make sure node server.js is running.
     //
     // Use this to test parameters the server receives.
     var debugUrl = '/email';

     // POST request to email server.
     xhr.open('POST', url, true);

     // Send request data as type application/json.
     xhr.setRequestHeader('Content-Type', 'application/json');

     // Send data to server.
     xhr.send(JSON.stringify(data));

     // Handle response from the server.
     xhr.onreadystatechange = function() {

       // Status codes.
       var DONE = 4;  // Request done.
       var OK = 200;  // Success.

       // Check if the POST request is done.
       if (xhr.readyState === DONE) {

         // Check if the request was a success, and no errors occurred.
         if (xhr.status === OK) {

           // Reset all fields, and validity states by setting this.state
           // back to default.
           var resetState = function() {
             thisComp.setState({
               name: '',
               email: '',
               _subject: '',
               message: '',
               _gotcha: '',
               nameValid: 'default',
               emailValid: 'default',
               _subjectValid: 'default',
               messageValid: 'default',
               _gotchaValid: 'valid',
               formValid: 'default',
               submitDisabled: false
             });
           };

           // After 3 seconds, hide the status window.
           setTimeout(resetState, 3000);

         } else {

           // Error occurred.
           console.log('error: ' + xhr.status);

         }; // End xhr status check.

       }; // End xhr ready state check.

     }; // End xhr onreadystatechange.

   };

   // Reference to this component.
   var thisComp = this;

   // Find the Submit button.
   var btnSubmit = document.querySelector("form > button[type='submit']");

   // Handle onclick events.
   btnSubmit.addEventListener('click', function(e) {

     // Prevent form submission.
     e.preventDefault();

     // Check to see if the form is valid.
     var formValid = thisComp.state.nameValid == 'valid' &&
                      thisComp.state.emailValid == 'valid' &&
                      thisComp.state._subjectValid == 'valid' &&
                      thisComp.state._gotchaValid == 'valid' &&
                      thisComp.state.messageValid == 'valid';

    // Check to see if all fields in the form are valid.
     if (formValid) {

        // Set the form validity state to 'valid',
        // and disabled Submit button.
        thisComp.setState({
         formValid: 'valid',
         submitDisabled: true
        });

        // Data to be sent to the server.
        var data = {
          name: thisComp.state.name,
          email: thisComp.state.email,
          _subject: thisComp.state._subject,
          message: thisComp.state.message,
          _gotcha: thisComp.state._gotcha
        };

        // Send AJAX request.
        sendAjax(data, thisComp);

     } else {

       // Set form validity to 'invalid'.
       thisComp.setState({
         formValid: 'invalid'
       });

       // Callback to set form validity to 'default'.
       // This hides the error message.
       var hideErrorMsg = function() {
         thisComp.setState({
           formValid: 'default'
         });
       };

       // Hide error message after 3 seconds.
       setTimeout(hideErrorMsg, 3000);

     };

   }); // End button onclick.

 }; // End componentDidMount().

  // Component Render.
  render() {


    return (
      <div>

        <form id="form-contact">

          <FormStatus validFlag={this.state.formValid}/>

          <Name
            value={this.state.name}
            validFlag={this.state.nameValid}
            handleChange={this.updateFieldAndValidate.bind(this)}
          />

          <Email
            value={this.state.email}
            validFlag={this.state.emailValid}
            handleChange={this.updateFieldAndValidate.bind(this)}
          />

          <Subject
            value={this.state._subject}
            validFlag={this.state._subjectValid}
            handleChange={this.updateFieldAndValidate.bind(this)}
          />

          <Gotcha
            value={this.state._gotcha}
            validFlag={this.state._gotchaValid}
            handleChange={this.updateFieldAndValidate.bind(this)}
          />

          <Message
            value={this.state.message}
            validFlag={this.state.messageValid}
            handleChange={this.updateFieldAndValidate.bind(this)}
          />

          <button type="submit" disabled={this.state.submitDisabled}>
            <span className="icon icon-paperplane"/> Send Message
          </button>

        </form>

      </div>
    );
  }; // End Component Render.

}; // End Component Definition.
