import React from 'react';

import Icon from 'components/Icon'

export default class ProjectPanel extends React.Component {
  render() {

    const project = this.props.data;

    const title = project['title'];
    const imageUrl = require('images/portfolio/' + project['image']);
    const description = project['description'];
    const technologies = project['technologies'];
    const featured = project['featured'];

    const linkGithub = project['links']['github'];
    const linkDemo = project['links']['demo'];

    return (

      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4" key={title}>

        <div className="project-panel">
          <div className="project-title">
            {title}
          </div>

          <div className="project-image-container">
            <a href={linkDemo} target="_blank">
              <img src={imageUrl} className="project-image img-responsive"/>
            </a>
          </div>

          <div className="project-buttons custom-row">
            <Icon iconClass={"icon icon-demo"} iconName={"Demo"} link={linkDemo} containerClasses={"icon-hover-crimson col-xs-4 col-sm-4 col-md-4 col-lg-4"}/>
            <Icon iconClass={"icon icon-moreinfo"} iconName={"More Info"} containerClasses={"icon-hover-crimson col-xs-4 col-sm-4 col-md-4 col-lg-4"}/>
            <Icon iconClass={"icon icon-github"} iconName={"GitHub"} link={linkGithub} containerClasses={"icon-hover-crimson col-xs-4 col-sm-4 col-md-4 col-lg-4"}/>
          </div>

        </div>

      </div>

    )
  }
}
