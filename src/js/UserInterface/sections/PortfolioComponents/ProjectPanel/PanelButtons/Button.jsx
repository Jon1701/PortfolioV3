// React dependencies.
import React from 'react';

// Component Definition.
export default class Button extends React.Component {

  // Component Constructor.
  constructor() {
    super();
  }

  // Function to display the project More Info window when the More Info Button
  // is clicked.
  displayPopover() {

    // Check to see if the More Info button was clicked.
    if (this.props.moreinfo == true) {

      // Get the ID# of the current project and the currently active popup.
      var projId = this.props.projId;
      var activePopupId = this.props.activePopupId;

      // If the ID numbers are the same, this means that the popup is open,
      // we want to close it.
      //
      // If the ID numbers are not the same, make them the same so the popup
      // can be open.
      if (projId == activePopupId) {

        // Set the currently active popup ID to -1 to close it.
        this.props.updateActivePopupId(-1);

      } else {

        // Set the ID of the active popup to this project ID.
        this.props.updateActivePopupId(this.props.projId);

      };

    }; // End More Info button check.

  }; // End displayPopover().

  // Component Render.
  render() {

    return (
      <div className="button" onClick={this.displayPopover.bind(this)}>
        <a href={this.props.link} target="_blank">
          <div className={"icon " +  this.props.iconClass}></div>
          <div className="icon-name">{this.props.iconName}</div>
        </a>
      </div>
    ); // End return().
  }; // End render().

}; // End React.Component{}.
