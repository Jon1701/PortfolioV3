// React dependencies.
import React from 'react';

// Other components.
import ProjectPanel from './ProjectPanel/ProjectPanel.jsx';

// Component Definition.
export default class Portfolio extends React.Component {

  // Component Constructor.
  constructor() {
    super();

    // Initial state.
    this.state = {

      // List of projects.
      projects: [
        {
          'title': 'Timestamp Generator Microservice',
          'image': '../media/images/portfolio/cover-timestamp-generator.png',
          'description': 'Simple Node.js/Express.js application to convert between Natural Dates and Unix Epoch Dates',
          'technologies': ['html5', 'css3', 'react', 'nodejs'],
          'links': {
            'demo': 'https://ms-timestamp-jon1701.c9users.io/',
            'github': 'https://github.com/Jon1701/MS-Timestamp'
          }
        },
        {
          'title': 'Recipe Box',
          'image': '../media/images/portfolio/cover-recipebox.png',
          'description': 'Simple web application built using React.js and Materialize to store recipes using a web browser\'s local storage',
          'technologies': ['html5', 'css3', 'javascript', 'react', 'materialize'],
          'links': {
            'demo': 'https://www.jonbalon.io/portfolio/RecipeBox',
            'github': 'https://github.com/Jon1701/RecipeBox'
          }
        },
      ],

      // Currently active popup.

      // Initially set to -1 so no More Info popups are displayed on Initially
      // render.
      activePopupId: -1
    }
  }

  // Callback function to update the activePopup attribute in the state with
  // a given project ID number.
  handleActivePopupIdChange(projId) {
    this.setState({
      activePopupId: projId
    })
  }

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
    ); // End return().
  }; // End render().

}; // End React.Component{}.
