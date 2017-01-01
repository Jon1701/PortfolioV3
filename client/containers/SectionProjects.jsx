// React.
import React from 'react';

// Redux dependencies.
import { connect } from 'react-redux';

// Presentational components.
import ProjectPanelMatrix from 'components/ProjectPanelMatrix';

// Component definition.
const SectionProjects = () => (
  <div id="section-projects" className="section height-min-100vh text-center">

    <div className="text-uppercase section-main-heading">
      Portfolio
    </div>

    <p>
      Here's some of my work:
    </p>

    <ProjectPanelMatrix />

    <p>
      with more to come in the future!
    </p>

  </div>
);

// Component export.
export default SectionProjects;
