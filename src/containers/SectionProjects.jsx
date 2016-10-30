// React.
import React from 'react';

// Redux dependencies.
import { connect } from 'react-redux';

// Presentational components.
import ProjectPanel from 'components/ProjectPanel';
import ToggleFeaturedProjectsButton from 'components/ToggleFeaturedProjectsButton';

// Actions.
import { toggleFeaturedProjects } from 'actions/index.js';
import { bindActionCreators } from 'redux';

// Component definition.
class SectionProjects extends React.Component {

  // Function to generate project panels for each project in the array.
  generateProjectPanels() {

    // Load array of project data.
    let projectData = this.props.projectData;

    if (this.props.showOnlyFeaturedProjects) {
      projectData = projectData.filter((element, idx, arr) => {
        return element.featured == true;
      });
    }

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

        <ToggleFeaturedProjectsButton onClick={() => this.props.toggleFeaturedProjects()} featured={this.props.showOnlyFeaturedProjects}/>

        <div className="row">
          { this.generateProjectPanels() }
        </div>

        <p>with more to come in the future!</p>

      </div>
    )
  } // End Component render.

}

// Function which maps state to props.
//
// this.state.projectData --> this.props.projectData
const mapStateToProps = (state) => {
  return {
    projectData: state.projectData,
    showOnlyFeaturedProjects: state.showOnlyFeaturedProjects
  }
}

// Function to allow access of dispatch actions as props.
//
// this.props.togglePopover().
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    toggleFeaturedProjects: toggleFeaturedProjects
  }, dispatch)
}

// Allows this container to access the Redux store.
export default connect(mapStateToProps, mapDispatchToProps)(SectionProjects)
