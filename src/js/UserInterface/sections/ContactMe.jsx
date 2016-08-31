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

     function cb() {
       console.log(xmlHttp.status)
       console.log(xmlHttp.responseText);
     };

     // Prevent form submission.
     e.preventDefault();

     var xmlHttp = new XMLHttpRequest();
     xmlHttp.onreadystatechange = cb;

     xmlHttp.open("GET", "/", true);
     xmlHttp.send(null);


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
