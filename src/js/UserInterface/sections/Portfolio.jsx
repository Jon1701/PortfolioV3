// React dependencies.
import React from 'react';

import ProjectPanel from './ProjectPanel/ProjectPanel.jsx';

// Component Definition.
export default class Portfolio extends React.Component {

  // Component Constructor.
  constructor() {
    super();

    // Default list of projects.
    this.state = {
      projects: [
        {
          'title': 'Timestamp Generator Microservice',
          'image': '../media/images/portfolio/cover-timestamp-generator.png',
          'description': 'Simple Node.js/Express.js application to convert between Natural Dates and Unix Epoch Dates',
          'links': {
            'demo': 'https://ms-timestamp-jon1701.c9users.io/',
            'github': 'https://github.com/Jon1701/MS-Timestamp'
          }
        },
        {
          'title': 'Recipe Box',
          'image': '../media/images/portfolio/cover-recipebox.png',
          'description': 'Simple web application built using React.js and Materialize to store recipes using a web browser\'s local storage',
          'links': {
            'demo': 'https://www.jonbalon.io/portfolio/RecipeBox',
            'github': 'https://github.com/Jon1701/RecipeBox'
          }
        },
      ]
    }
  }

  // Component Render.
  render() {

    // Create an array of <ProjectPanel/>s.
    var panels = [];
    for(var i=0; i<this.state.projects.length; i++) {

      // Current project.
      var project = this.state.projects[i];

      // Store the <ProjectPanel/> component, and pass
      // current project info down as a prop.
      panels.push(<ProjectPanel key={i} info={project}/>)
    }

    return (
      <div className="section" id="section-portfolio">

        <div className="title">Portfolio Projects</div>

        <div className="content">
          <div className="row">
            {panels}
          </div>
        </div>

      </div>
    );
  } // End Component Render.

} // End Component Definition.
