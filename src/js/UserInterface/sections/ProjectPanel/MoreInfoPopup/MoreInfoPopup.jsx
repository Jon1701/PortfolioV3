// React dependencies.
import React from 'react';

import Technologies from './Technologies/Technologies.jsx';

// Component Definition.
export default class MoreInfoPopup extends React.Component {

  // Component Constructor.
  constructor() {
    super();
  }

  // Component Render.
  render() {
    return (
      <div className="container-moreinfopopup">

        <div className="container-description">
          {this.props.description}
        </div>

        <Technologies technologies={this.props.technologies}/>

      </div>
    );
  } // End Component Render.

} // End Component Definition.
