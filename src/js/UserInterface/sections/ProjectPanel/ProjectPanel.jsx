// React dependencies.
import React from 'react';

// Other components.
import ButtonContainer from './ButtonContainer/ButtonContainer.jsx';
import MoreInfoPopup from './MoreInfoPopup/MoreInfoPopup.jsx';

// Component Definition.
export default class ProjectPanel extends React.Component {

  // Component Constructor.
  constructor() {
    super();
  }

  // Component Render.
  render() {

    // Access the project data given as a prop to this component.
    var project = this.props.info;

    return (
        <div className="project-panel container-fluid col-xs-12 col-md-6 col-lg-4">

          <div className="project-title">
            {project.title}
          </div>

          <div className="container-img noselect">
            <a href={project.links.demo} target="_blank">
              <img src={project.image} className="img-responsive"/>
            </a>
          </div>

          {
            // Displays the Demo, More Info, and GitHub buttons.
            //
            // Passes the following props.
            //  projId: Unique ID# of the current project.
            //  activePopupId: ID# of the currently active popover.
            //  updateActivePopupId: Callback to set the ID# of the currently active popover.
            //  links: GitHub and Demo links for this project.
          }
          <ButtonContainer
            projId={this.props.projId}
            activePopupId={this.props.activePopupId}
            updateActivePopupId={this.props.updateActivePopupId}
            links={project.links}
          />

          {
            // Displays the Demo, More Info, and GitHub buttons.
            //
            // Passes the following props.
            //  projId: Unique ID# of the current project.
            //  activePopupId: ID# of the currently active popover.
            //  updateActivePopupId: Callback to set the ID# of the currently active popover
            //  info: Project information.
          }
          <MoreInfoPopup
            projId={this.props.projId}
            activePopupId={this.props.activePopupId}
            updateActivePopupId={this.props.updateActivePopupId}
            info={this.props.info}
          />

        </div>
    );
  } // End Component Render.

} // End Component Definition.
