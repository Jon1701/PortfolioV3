// React dependencies.
import React from 'react';

// Component Definition.
export default class ProjectToggle extends React.Component {

  // Component Constructor.
  constructor() {
    super();

    // Default button icon and text.
    this.state = {
      iconClass: 'icon-chevron-circle-down',
      buttonText: 'Show All Projects'
    };
  };

  // Function to toggle Featured and All Projects.
  toggleFeatured() {

    // Flip the value of showOnlyFeatured only within the context of
    // this function.
    var showOnlyFeatured = !this.props.showOnlyFeatured;

    // Toggle button icon and text.
    if (showOnlyFeatured) {
      this.setState({
        iconClass: 'icon-chevron-circle-down',
        buttonText: 'Show All Projects'
      });
    } else {
      this.setState({
        iconClass: 'icon-chevron-circle-up',
        buttonText: 'Show Only Featured Projects'
      });
    }

    // Temporary variable to hold all or only featured projects.
    var data = null;

    // Check whether or not we should only show featured projects.
    if (showOnlyFeatured) {

      // Only keep featured projects.
      data = this.props.allProjectsData.filter(function(element, idx, arr) {
        return element.featured == true;
      });

    } else {

      // Keep all projects.
      data = this.props.allProjectsData;

    };

    // Update state with modified showOnlyFeatured and project data.
    this.props.refreshFeaturedProjects(showOnlyFeatured, data)

  };

  // Component Render.
  render() {

    return (
      <div className="btn-toggle-projects noselect" onClick={this.toggleFeatured.bind(this)}>
        <span className={"icon " + this.state.iconClass}></span> {this.state.buttonText} 
      </div>
    );

  }; // End Component Render.

}; // End Component Definition.
