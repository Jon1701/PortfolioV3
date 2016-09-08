// React dependencies.
import React from 'react';

// Other components.
import ProjectToggle from './PortfolioComponents/ProjectToggle.jsx';
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
      activePopupId: -1,

      // Setting to show only featured projects.
      showOnlyFeatured: true
    };
  };

  // By default, filter display featured or all projects.
  // This is dependant on the setting of this.state.showOnlyFeatured.
  componentWillMount() {

    // Variable to hold filtered/all projects.
    var data = null;

    // Check whether or not we should only show featured projects.
    if (this.state.showOnlyFeatured) {

      // Only keep featured projects.
      data = projectsData.filter(function(element, idx, arr) {
        return element.featured == true;
      });

    } else {

      // Keep all projects.
      data = projectsData;

    };

    // Update state with modified project data.
    this.setState({
      projects: data
    });

  };

  // Callback function to update the activePopup attribute in the state with
  // a given project ID number.
  handleActivePopupIdChange(projId) {
    this.setState({
      activePopupId: projId
    });
  };

  handleRefreshFeaturedProjects(showOnlyFeatured, projects) {
    this.setState({
      showOnlyFeatured: showOnlyFeatured,
      projects: projects
    });
  };

  // Component Render.
  render() {

    // Create an array of <ProjectPanel/>s.
    var panels = [];
    for(var i=0; i<this.state.projects.length; i++) {

      // Current project.
      var project = this.state.projects[i];

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

    return (
      <div className="section" id="section-portfolio">

        <div className="title">Portfolio</div>

        <div className="content">

          <div className="text-center">
            <p>
              Here's some of my work:
            </p>

            <ProjectToggle
              showOnlyFeatured={this.state.showOnlyFeatured}
              allProjectsData={projectsData}
              refreshFeaturedProjects={this.handleRefreshFeaturedProjects.bind(this)}
            />

          </div>

          <div className="row">
            {panels}
          </div>

        </div>

      </div>
    ); // End return().
  }; // End render().

}; // End React.Component{}.
