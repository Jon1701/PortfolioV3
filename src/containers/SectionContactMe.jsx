// React.
import React from 'react';

import ContactForm from 'components/ContactForm';

// Component definition.
export default class SectionContactMe extends React.Component {

  // Component render.
  render() {
    return (
      <div id="section-contactme" className="section height-min-100vh text-center">

        <h1 className="text-center text-uppercase">Contact Me</h1>

        <div className="row">

          <div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-6 col-lg-offset-3">

            <ContactForm/>

          </div>

        </div>

      </div>
    )
  } // End Component render.

}
