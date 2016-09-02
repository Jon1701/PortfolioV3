// React dependencies.
import React from 'react';
import classNames from 'classnames';

// Fields.
import ContactForm from './ContactForm/ContactForm.jsx';

// Home Icons
import HomeIcons from './HomeIcons/HomeIcons.jsx';

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

          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <ContactForm/>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="invisible status status-fail">Test</div>

              <HomeIcons/>
            </div>
          </div>

        </div>

      </div>
    );
  } // End Component Render.

} // End Component Definition.
