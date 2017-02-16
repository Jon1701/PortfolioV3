// React dependencies.
import React, { PropTypes } from 'react';
import classNames from 'classnames';

// React components.
import Icon from 'components/Icon';

/*
 *  Given a list of icon names, generate <Icon /> elements.
 */
const generateTechnologyIcons = (technologies) => {
  // Load icon data.
  const iconData = require('json/icons.json');

  // Generate <Icon/> components showing icon name and label.
  const techIcons = technologies.map((iconName) => {
    // Extract icon class name and icon label from icons.json.
    const iconClass = iconData[iconName].icon;
    const label = iconData[iconName].label;

    // Return one icon.
    return <Icon iconClass={iconClass} label={label} className={`${iconClass}-hover effect-transition-easeinout cursor-arrow`} key={`${label}`} />;
  });

  return (
    <div className="container-icons">
      {techIcons}
    </div>
  );
};

// Component definition.
const ProjectPanel = (props) => {
  // Destructure props.projectData.
  const { title, image, description, technologies, links, featured } = props.projectData;
  const { projectID, activeProjectID } = props;

  // Image URI.
  const imageURI = require(`images/portfolio/${image}`);

  const myClasses = classNames({
    'container-project-info': true,
    hidden: projectID !== activeProjectID,
  });

  // Template.
  return (
    <div className="responsive-container col-xs-12 col-sm-6 col-md-4 col-lg-4">
      <div className="container-project">
        <img src={imageURI} onClick={() => { props.handleClick(null, projectID); }} className="img-responsive cursor-hand" alt={`${title} - ${description}`} />
        <div className={myClasses}>
          <span className="btn-close cursor-hand" onClick={() => { props.handleClick(null, projectID); }}>&times;</span>
          <div className="title">{title}</div>
          <div className="description">{description}</div>
          <div className="technologies">{generateTechnologyIcons(technologies)}</div>
          <div className="container-buttons">
            <a href={links.demo} target="_blank" rel="noopener noreferrer" className="effect-transition-easeinout">
              View Demo
            </a>
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="effect-transition-easeinout">
              View Github Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Prop validation.
ProjectPanel.propTypes = {
  projectData: React.PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.array.isRequired,
    links: PropTypes.shape({
      demo: PropTypes.string.isRequired,
      github: PropTypes.string.isRequired,
    }).isRequired,
    featured: PropTypes.bool.isRequired,
  }).isRequired,
};

// Component export.
export default ProjectPanel;
