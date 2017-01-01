// React.
import React from 'react';

// React components.
import ProjectPanel from 'components/ProjectPanel';
import ToggleFeaturedProjectsButton from 'components/ToggleFeaturedProjectsButton';

// Redux dependencies.
import { connect } from 'react-redux';

// Actions.
import { toggleFeaturedProjects } from 'actions/index.js';
import { bindActionCreators } from 'redux';

// Component definition.
class ProjectPanelMatrix extends React.Component {

  // Component render.
  render() {
    // Deconstruct props.
    let { projectData } = this.props;
    const { showOnlyFeaturedProjects } = this.props;

    // Toggle showing only featured projects.
    if (showOnlyFeaturedProjects) {
      projectData = projectData.filter(key => (key.featured === true));
    }

    // Build a <ProjectPanel/> component for each project.
    const displayProjectPanels = projectData.map((project, idx) => (
      <ProjectPanel key={idx} data={project} projectId={idx} />
    ));

    return (
      <div>
        <ToggleFeaturedProjectsButton
          onClick={this.props.toggleFeaturedProjects}
          featured={showOnlyFeaturedProjects}
        />

        <div className="row">
          {displayProjectPanels}
        </div>
      </div>
    );
  }
}

// Map state to props.
const mapStateToProps = state => ({
  projectData: state.projectData,
  showOnlyFeaturedProjects: state.showOnlyFeaturedProjects,
});

// Map actions to props.
const mapDispatchToProps = dispatch => (bindActionCreators({ toggleFeaturedProjects }, dispatch));

// Allows access the Redux store.
export default connect(mapStateToProps, mapDispatchToProps)(ProjectPanelMatrix);

// Prop validation.
ProjectPanelMatrix.propTypes = {
  projectData: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      title: React.PropTypes.string,
      image: React.PropTypes.string,
      description: React.PropTypes.string,
      technologies: React.PropTypes.arrayOf(React.PropTypes.string),
      links: React.PropTypes.shape({
        demo: React.PropTypes.string,
        link: React.PropTypes.string,
      }),
      featured: React.PropTypes.bool,
    }),
  ),
  showOnlyFeaturedProjects: React.PropTypes.bool,
  toggleFeaturedProjects: React.PropTypes.func,
};
