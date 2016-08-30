// React dependencies.
import React from 'react';

import Technologies from './Technologies/Technologies.jsx';

import classNames from 'classnames';

// Component Definition.
export default class MoreInfoPopup extends React.Component {

  // Component Constructor.
  constructor() {
    super();
  }

  // Component Render.
  render() {

    var myClasses = classNames({
      'container-moreinfopopup': true,
      'hidden': this.props.projId != this.props.activePopup
    })

    return (
      <div className={myClasses}>

        <div className="container-description">
          {this.props.description}
        </div>

        <Technologies technologies={this.props.technologies}/>

      </div>
    );
  } // End Component Render.

} // End Component Definition.
