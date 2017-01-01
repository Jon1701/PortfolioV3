// React dependencies.
import React from 'react';

// Redux dependencies.
import { connect } from 'react-redux';

// React components.
import Icon from 'components/Icon'
import MoreInfoPopover from 'components/MoreInfoPopover'

// Actions.
import { togglePopover } from 'actions/index.js';
import { bindActionCreators } from 'redux'

// Component definition.
class ProjectPanel extends React.Component {

  // Component render.
  render() {

    // Shorthand access to data props.
    const project = this.props.data;

    // Access ID of this project.
    const projectId = this.props.projectId;

    // Project metadata.
    const title = project['title'];
    const imageUrl = require('images/portfolio/' + project['image']);
    const description = project['description'];
    const technologies = project['technologies'];
    const featured = project['featured'];

    // Project links.
    const linkGithub = project['links']['github'];
    const linkDemo = project['links']['demo'];

    return (

      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4" key={title}>

        <div className="project-panel">
          <div className="project-title">
            {title}
          </div>

          <div className="project-image-container noselect">
            <a href={linkDemo} target="_blank">
              <img src={imageUrl} className="project-image img-responsive"/>
            </a>
          </div>

          <div className="project-buttons custom-row cursor-hand noselect">
            <Icon iconClass={"icon icon-demo"} iconName={"Demo"} link={linkDemo} containerClasses={"icon-hover-crimson col-xs-4 col-sm-4 col-md-4 col-lg-4"}/>
            <Icon iconClass={"icon icon-moreinfo"} iconName={"More Info"} containerClasses={"icon-hover-crimson col-xs-4 col-sm-4 col-md-4 col-lg-4"} onClick={() => this.props.togglePopover(this.props.projectId)}/>
            <Icon iconClass={"icon icon-github"} iconName={"GitHub"} link={linkGithub} containerClasses={"icon-hover-crimson col-xs-4 col-sm-4 col-md-4 col-lg-4"}/>
          </div>

          <MoreInfoPopover description={description} tech={technologies} projectId={projectId}/>

        </div>

      </div>

    )
  }
}

// Function to allow access of dispatch actions as props.
//
// this.props.togglePopover().
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    togglePopover: togglePopover
  }, dispatch)
}

// Allows this component to access the Redux store.
export default connect(null, mapDispatchToProps)(ProjectPanel);
