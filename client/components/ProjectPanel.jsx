// React dependencies.
import React, { PropTypes } from 'react';

import Icon from 'components/Icon';

const generateTechnologyIcons = (technologies) => {
  // Load icon data.
  const iconData = require('json/icons.json');

  // Generate <Icon/> components showing icon name and label.
  const techIcons = technologies.map((iconName) => {
    // Extract icon class name and icon label.
    const iconClass = iconData[iconName].icon;
    const label = iconData[iconName].label;

    // Return one icon.
    return <Icon iconClass={iconClass} label={label} key={`${label}`} />;
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

  // Image URI.
  const imageURI = require(`images/portfolio/${image}`);

  // Template.
  return (
    <div className="responsive-container col-xs-12 col-sm-6 col-md-4 col-lg-4">
      <div className="container-project">
        <img src={imageURI} className="img-responsive" alt={`${title} - ${description}`} />
        <div className="container-project-info">
          <div className="title">{title}</div>
          <div className="description">{description}</div>
          <div className="technologies">{generateTechnologyIcons(technologies)}</div>
          <div className="container-buttons">
            <a href={links.demo} target="_blank" rel="noopener noreferrer">
              View Demo
            </a>
            <a href={links.github} target="_blank" rel="noopener noreferrer">
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
