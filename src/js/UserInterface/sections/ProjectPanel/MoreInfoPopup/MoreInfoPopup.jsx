// React dependencies.
import React from 'react';
import classNames from 'classnames';

// Other components.
import Technologies from './Technologies/Technologies.jsx';

// Component Definition.
export default class MoreInfoPopup extends React.Component {

  // Component Constructor.
  constructor() {
    super();
  }

  // Component Render.
  render() {

    // CSS classes for the More Info popover.
    // Hide component if project ID# does not match the active popover ID#.
    var myClasses = classNames({
      'container-moreinfopopup': true,
      'hidden': this.props.projId != this.props.activePopupId
    })

    return (
      <div className={myClasses}>

        <div className="container-description">
          {this.props.info.description}
        </div>

        {
          // Displays the Technologies used within this project.
          //
          // Passes down the following props:
          //  tech: List of technologies used within this project.
        }
        <Technologies tech={this.props.info.technologies}/>

      </div>
    ); // End return().
  }; // End render().

}; // End React.Component{}.
