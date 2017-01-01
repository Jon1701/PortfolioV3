// React dependencies.
import React from 'react';

// Redux dependencies.
import { connect } from 'react-redux';

// Component definition.
export default class ToggleFeaturedProjectsButton extends React.Component {

  // Component render.
  render() {
    // Deconstruct props.
    const { featured, onClick } = this.props;

    return (
      <div className="btn-toggle-featured-projects noselect icon-hover-crimson cursor-hand">
        {featured
          ? <OnlyFeaturedProjects handleClick={onClick} />
          : <AllProjects handleClick={onClick} />}
      </div>
    );
  }

}

// Prop validation.
ToggleFeaturedProjectsButton.propTypes = {
  featured: React.PropTypes.bool,
  onClick: React.PropTypes.func,
};

/*
 *
 *  Presentational components.
 *
 */

// Display all projects.
const AllProjects = ({ handleClick }) => (
  <div onClick={handleClick}>
    <span className="icon icon-chevron-circle-up" /> Show Only Featured Projects
  </div>
);

// Prop validation.
AllProjects.propTypes = {
  handleClick: React.PropTypes.func,
};

// Display only featured projects.
const OnlyFeaturedProjects = ({ handleClick }) => (
  <div onClick={handleClick}>
    <span className="icon icon-chevron-circle-down" /> Show All Projects
  </div>
);

// Prop validation.
OnlyFeaturedProjects.propTypes = {
  handleClick: React.PropTypes.func,
};
