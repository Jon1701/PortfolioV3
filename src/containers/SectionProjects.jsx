// React.
import React from 'react';

import ProjectPanel from 'components/ProjectPanel'

// Component definition.
export default class SectionProjects extends React.Component {

  generateProjectPanels() {

    // Load array of project data.
    const projectData = require('json/projects.json');

    return projectData.map((project, idx, arr) => {
      return (
        <ProjectPanel key={idx} data={project}/>
      )
    })



  }

  // Component render.
  render() {
    return (
      <div id="section-projects" className="height-min-100vh text-center">

        <h1 className="text-uppercase">Portfolio</h1>

        <p>Here's some of my work:</p>

        <div className="row">
          { this.generateProjectPanels() }
        </div>

      </div>
    )
  } // End Component render.

}
