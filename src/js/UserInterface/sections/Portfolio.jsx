// React dependencies.
import React from 'react';

// Other components.
import ProjectPanel from './PortfolioComponents/ProjectPanel/ProjectPanel.jsx';

// Data containing portfolio projects.
//
// Returns a JSON object which is a list of objects containing
// information about each Portfolio Project.
var projectsData = require('json!projects.json');

// Component Definition.
export default class Portfolio extends React.Component {

  // Component Constructor.
  constructor() {
    super();

    // Initial state.
    this.state = {

      // List of projects.
      projects: projectsData,

      // Currently active popup.
      // Initially set to -1 so no More Info popups are displayed on Initially
      // render.
      activePopupId: -1
    };
  };

  // Callback function to update the activePopup attribute in the state with
  // a given project ID number.
  handleActivePopupIdChange(projId) {
    this.setState({
      activePopupId: projId
    });
  };

  // Component Render.
  render() {

    // Create an array of <ProjectPanel/>s.
    var panels = [];
    for(var i=0; i<this.state.projects.length; i++) {

      // Current project.
      var project = this.state.projects[i];

      // Display only featured projects.
      if (project.featured == true) {
        // Store the <ProjectPanel/> component.
        //
        // Props sent:
        //  projId: Unique number for this project.
        //  activePopupId: ID# of the currently active popover.
        //  updateActivePopupId: Callback function to update currently active popover.
        //  info: Information about this project.
        panels.push(
          <ProjectPanel
            key={i}
            projId={i}
            activePopupId={this.state.activePopupId}
            updateActivePopupId={this.handleActivePopupIdChange.bind(this)}
            info={project}
          />
        );
      };

    };

    return (
      <div className="section" id="section-portfolio">

        <div className="title">Portfolio</div>

        <div className="content">
          <div className="row">
            {panels}
          </div>
        </div>

      </div>
    ); // End return().
  }; // End render().

}; // End React.Component{}.
