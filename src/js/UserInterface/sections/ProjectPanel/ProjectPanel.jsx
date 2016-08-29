// React dependencies.
import React from 'react';

import Button from './Button.jsx';

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

          <div className="container-buttons">

            <Button iconClass="icon-demo" iconName="Demo" link={project.links.demo}/>
            <Button iconClass="icon-moreinfo" iconName="More Info"/>
            <Button iconClass="icon-github" iconName="GitHub" link={project.links.github}/>

            <div className="clearfix"/>

          </div>

        </div>
    );
  } // End Component Render.

} // End Component Definition.
