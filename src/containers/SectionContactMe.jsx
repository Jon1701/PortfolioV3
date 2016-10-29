// React.
import React from 'react';

import ContactForm from 'components/ContactForm';

// Component definition.
export default class SectionContactMe extends React.Component {

  // Component render.
  render() {
    return (

      <div className="force-table height-minmax-100vh">
        <div className="force-table-row">

          <div id="section-contactme" className="section text-center">
            <div className="section-main-heading text-uppercase">Contact Me</div>

            <div className="row">

              <div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-6 col-lg-offset-3">

                <ContactForm/>

              </div>
            </div>

          </div>

      </div>
    </div>
    )
  } // End Component render.

}
