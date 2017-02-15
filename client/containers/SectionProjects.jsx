// React.
import React from 'react';

// React Components.
import ProjectPanel from 'components/ProjectPanel';

/*
 *  Helper function to generate <ProjectPanel /> elements.
 */
const generateProjectPanels = () => {
  // Load project data.
  const projectData = require('json/projects.json');

  // Generate <ProjectPanel /> elements.
  return projectData.map((project, idx) => (
    <ProjectPanel key={`project-panel-${idx}`} projectData={project} />
  ));
};

// Component definition.
const SectionProjects = () => (
  <div id="section-projects" className="viewport-fullpage">
    <div className="container-section-content text-center">
      <div className="heading">
        Portfolio
      </div>

      <p>
        Here's some of my work:
      </p>

      <div className="container-projects row">
        {generateProjectPanels()}
      </div>

      <p>
        with more to come in the future!
      </p>
    </div>
  </div>
);

// Component export.
export default SectionProjects;
