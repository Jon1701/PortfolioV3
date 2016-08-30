// React dependencies.
import React from 'react';

import Icon from './Icon.jsx';

var iconDB = require('json!icons.json')

// Component Definition.
export default class Technologies extends React.Component {

  // Component Constructor.
  constructor() {
    super();
  }

  // Component Render.
  render() {

    // Array of <Icon/>.
    var icons = [];

    // Array of technologies this project uses.
    var tech = this.props.technologies;

    // Go through all the tech.
    for (var i=0; i<tech.length; i++) {

      // Get the icon class and name
      var iconData = iconDB[tech[i]];

      // Create an <Icon/> with the icon class and name, and store it.
      icons.push(<Icon key={i} iconClass={iconData.icon} iconName={iconData.name}/>)

    }

    return (
      <div className="container-technologies">
        {icons}
      </div>
    );
  } // End Component Render.

} // End Component Definition.
