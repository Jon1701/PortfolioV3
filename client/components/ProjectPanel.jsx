// React dependencies.
import React, { PropTypes } from 'react';

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
