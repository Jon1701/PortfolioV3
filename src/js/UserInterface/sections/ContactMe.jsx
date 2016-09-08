// React dependencies.
import React from 'react';
import classNames from 'classnames';

// Fields.
import ContactForm from './ContactMeComponents/ContactForm/ContactForm.jsx';

// GitHub, LinkedIn, Twitter icons array.
import IconArray from '../sections/HomeComponents/IconArray.jsx'

// Component Definition.
export default class ContactMe extends React.Component {

  // Component Constructor.
  constructor() {
    super();
  }

  // Component Render.
  render() {


    return (
      <div className="section" id="section-contactme">

        <div className="title">Contact Me</div>

        <div className="content text-center">

          <div className="notice">
            Feel free to contact me if you have any inquiries or questions!
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-6 col-lg-offset-3">
              <ContactForm/>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-6 col-lg-offset-3">
              <IconArray/>
            </div>
          </div>

        </div>

      </div>
    );
  } // End Component Render.

} // End Component Definition.
