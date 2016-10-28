// React.
import React from 'react';

// Redux dependencies.
import { connect } from 'react-redux';

// Presentational components.
import ProjectPanel from 'components/ProjectPanel'

// Component definition.
class SectionProjects extends React.Component {

  // Function to generate project panels for each project in the array.
  generateProjectPanels() {

    // Load array of project data.
    const projectData = this.props.projectData;

    // Build a <ProjectPanel/> component for each project in the
    // array of projects.
    return projectData.map((project, idx, arr) => {
      return <ProjectPanel key={idx} data={project} projectId={idx}/>
    })

  }

  // Component render.
  render() {
    return (
      <div id="section-projects" className="section height-min-100vh text-center">

        <div className="text-uppercase section-main-heading">Portfolio</div>

        <p>Here's some of my work:</p>

        <div className="row">
          { this.generateProjectPanels() }
        </div>

      </div>
    )
  } // End Component render.

}

// Function which maps state to props.
//
// this.state.projectData --> this.props.projectData
const mapStateToProps = (state) => {
  return {
    projectData: state.projectData
  }
}

// Allows this container to access the Redux store.
export default connect(mapStateToProps)(SectionProjects)
