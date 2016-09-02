// React dependencies.
import React from 'react';
import classNames from 'classnames';

// Fields.
import ContactForm from './ContactMeComponents/ContactForm/ContactForm.jsx';

// Home Icons
import IconContainer from './HomeComponents/IconContainer.jsx';

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
            If you have any inquires or questions please feel free to contact me!
          </div>

          { /* Responsive grid. */ }
          <div className="row">

            { /* Display Contact Form on left column */ }
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <ContactForm/>
            </div>

            { /* Display GitHub, LinkedIn, FCC icons on right column */ }
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="invisible status status-fail">Test</div>
              <IconContainer/>
            </div>

          </div>

        </div>

      </div>
    );
  } // End Component Render.

} // End Component Definition.
