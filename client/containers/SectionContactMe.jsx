// React.
import React from 'react';

import ContactForm from 'components/ContactForm';

// Component definition.
const SectionContactMe = () => (
  <div id="section-contactme" className="viewport-fullpagemax page-container">
    <div className="page-content text-center">

      <div className="page-heading">Contact Me</div>

      <p>
        Feel free to contact me if you have any inquiries or questions!
      </p>

      <div className="container row">
        <ContactForm />
      </div>

    </div>
  </div>
);

// Component export;
export default SectionContactMe;
