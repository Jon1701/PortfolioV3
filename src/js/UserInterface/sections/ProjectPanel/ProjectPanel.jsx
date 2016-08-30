// React dependencies.
import React from 'react';

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

    // Access the data given as a prop to this component.
    var project = this.props.info;

    return (
        <div className="project-panel container-fluid col-xs-12 col-md-6 col-lg-4">

          <div className="project-title">
            <p>{project.title}</p>
          </div>

          <div className="container-img">
            <img src={project.image} className="img-responsive"/>
          </div>

          <ButtonContainer demoLink={project.links.demo} githubLink={project.links.github}/>

          <MoreInfoPopup description={project.description} technologies={project.technologies}/>

        </div>
    );
  } // End Component Render.

} // End Component Definition.
