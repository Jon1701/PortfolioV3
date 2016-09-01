// React dependencies.
import React from 'react';

// Component Definition.
export default class ContactMe extends React.Component {

  // Component Constructor.
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      _subject: '',
      message: '',
      _gotcha: '',
    }
  }

  handleChange(e) {

    // Field name.
    var fieldName = e.target.getAttribute('name');

    // Field value.
    var fieldValue = e.target.value;

    // Update field values in this.state.
    this.setState({
      [fieldName]: fieldValue
    });

 }

 componentDidUpdate() {
   console.log(this.state)
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

     // Data to send to the server.
     var httpParams = {
       name: thisComp.state.name,
       email: thisComp.state.email,
       _subject: thisComp.state._subject,
       message: thisComp.state.message,
       _gotcha: thisComp.state._gotcha
     };

     // AJAX Request object.
     var xhr = new XMLHttpRequest();

     // POST request to email server.
     xhr.open('POST', '/', true);

     // Send data to server.
     xhr.send(httpParams);

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
           console.log(xhr.responseText);

         } else {

           // Error occurred.
           console.log('error: ' + xhr.status);

         }
       }

     };

   });
 }

  // Component Render.
  render() {
    return (
      <div className="section" id="section-contactme">

        <div className="title">Contact Me</div>

        <div className="content text-center">

          <form>
            <div className="form-field">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" className="border-default" onChange={this.handleChange.bind(this)} value={this.state.name}/>
            </div>

            <div className="form-field">
              <label htmlFor="email">Email:</label>
              <input type="text" name="email" className="border-default" onChange={this.handleChange.bind(this)} value={this.state.email}/>
            </div>

            <div className="form-field">
              <label htmlFor="subject">Subject:</label>
              <input type="text" name="_subject" className="border-default" onChange={this.handleChange.bind(this)} value={this.state._subject}/>
            </div>

            <div className="form-field">
              <label htmlFor="subject">Gotcha:</label>
              <input type="text" name="_gotcha" className="border-default" onChange={this.handleChange.bind(this)} value={this.state._gotcha}/>
            </div>

            <div className="form-field">
              <label htmlFor="message">Message:</label>
              <textarea className="border-default" name="message" onChange={this.handleChange.bind(this)} value={this.state.message}></textarea>
            </div>

            <button type="submit">Send Message</button>

          </form>



        </div>

      </div>
    );
  } // End Component Render.

} // End Component Definition.
