// React dependencies.
import React from 'react';

// Redux dependencies.
import { connect } from 'react-redux';

// Component definition.
export default class ToggleFeaturedProjectsButton extends React.Component {

  // Function to display the correct toggle button.
  displayCorrectButton() {

    if (this.props.featured) {

      // If we are displaying only featured projects, button should display
      // "Show All"
      return (
        <div onClick={this.props.onClick}>
          <span className="icon icon-chevron-circle-down"></span> Show All Projects
        </div>
      )

    } else {

      // If we are displaying all projects, button should display
      // "Only Featured".
      return (
        <div onClick={this.props.onClick}>
          <span className="icon icon-chevron-circle-up"></span> Show Only Featured Projects
        </div>
      )

    }

  }

  // Component render.
  render() {
    return (
      <div className="btn-toggle-featured-projects noselect icon-hover-crimson cursor-hand">
        { this.displayCorrectButton() }
      </div>
    )
  }

}
