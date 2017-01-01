// React.
import React from 'react';

import ContactForm from 'components/ContactForm';

// Component definition.
const SectionContactMe = () => (
  <div id="section-contactme" className="viewport-fullpagemax page-container text-center">
    <div className="page-content">

      <div className="page-heading">Contact Me</div>

      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 col-lg-6 col-lg-offset-3">

          <p>
            Feel free to contact me if you have any inquiries or questions!
          </p>

          <ContactForm />

        </div>
      </div>

    </div>
  </div>
);

// Component export;
export default SectionContactMe;
