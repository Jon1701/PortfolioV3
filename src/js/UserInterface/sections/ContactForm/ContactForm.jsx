// React dependencies.
import React from 'react';
import classNames from 'classnames';

// Fields.
import Name from './Name.jsx';
import Email from './Email.jsx';
import Subject from './Subject.jsx';
import Gotcha from './Gotcha.jsx';
import Message from './Message.jsx';

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
      formValid: false
    }
  }

/*
 componentDidUpdate() {
   console.log(this.state)
 }
*/

  updateFieldAndValidate(newState) {
    this.setState(newState);
  }

 componentDidMount() {

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
     if (formValid) {
       console.log(formValid);
     } else {
       console.log(formValid);
     }

     // Data to be sent to the server.
     var data = {
       name: thisComp.state.name,
       email: thisComp.state.email,
       _subject: thisComp.state._subject,
       message: thisComp.state.message,
       _gotcha: thisComp.state._gotcha
     };

     // Create AJAX request.
     var xhr = new XMLHttpRequest();

     // POST request to email server.
     xhr.open('POST', '/email', true);

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

         // Check if the request was a success.
         if (xhr.status === OK) {

           // No errors.
           console.log('response: ' + xhr.responseText);

         } else {

           // Error occurred.
           console.log('error: ' + xhr.status);

         }; // End xhr status check.

       }; // End xhr ready state check.

     }; // End xhr onreadystatechange.

   }); // End button onclick.

 } // End componentDidMount().

  // Component Render.
  render() {


    return (
      <div>

        <form id="form-contact">
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

          <button type="submit">Send Message</button>
        </form>

      </div>
    );
  } // End Component Render.

} // End Component Definition.
