// React.
import React from 'react';

// React Components.
import ProjectPanel from 'components/ProjectPanel';

/*
 *  Helper function to generate <ProjectPanel /> elements.
 */
const generateProjectPanels = (activeProjectID, handleToggleProjectDetails) => {
  // Load project data.
  const projectData = require('json/projects.json');

  // Generate <ProjectPanel /> elements.
  return projectData.map((project, idx) => (
    <ProjectPanel key={`project-panel-${idx}`} projectData={project} projectID={idx} activeProjectID={activeProjectID} handleClick={handleToggleProjectDetails} />
  ));
};

// Component definition.
class SectionProjects extends React.Component {

  // Component constructor.
  constructor(props) {
    super(props);

    // Default state.
    this.state = {
      activeProjectID: null,
    };

    // Bind methods to component instance.
    this.handleToggleProjectDetails = this.handleToggleProjectDetails.bind(this);
  }

  // Method to handle project details toggling.
  handleToggleProjectDetails(e, projectID) {
    let activeProjectID;

    // Sets the active project ID depending.
    if (this.state.activeProjectID === null) {
      // If no project is currently active, set it to the new projectID.
      activeProjectID = projectID;
    } else if (this.state.activeProjectID === projectID) {
      // If the same active project is clicked again, clear it.
      activeProjectID = null;
    } else if (this.state.activeProjectID !== projectID) {
      // If a project is active, but a different one is clicked, set it to the new one.
      activeProjectID = projectID;
    }

    // Update state with the new active project ID.
    this.setState({
      activeProjectID,
    });
  }

  // Component render.
  render() {
    return (
      <div id="section-projects" className="viewport-fullpage">
        <div className="container-section-content text-center">
          <div className="heading">
            Portfolio
          </div>

          <p>
            Click on a project to see more information.
          </p>

          <div className="container-projects row">
            {generateProjectPanels(this.state.activeProjectID, this.handleToggleProjectDetails)}
          </div>

          <p>
            More to come in the future!
          </p>
        </div>
      </div>
    );
  }

}

// Component export.
export default SectionProjects;
