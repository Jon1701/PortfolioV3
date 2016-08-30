// React dependencies.
import React from 'react';

// Component Definition.
export default class Description extends React.Component {

  // Component Constructor.
  constructor() {
    super();
  }

  // Component Render.
  render() {
    return (
      <div className="container-moreinfo">
        {this.props.description}
      </div>
    );
  } // End Component Render.

} // End Component Definition.
