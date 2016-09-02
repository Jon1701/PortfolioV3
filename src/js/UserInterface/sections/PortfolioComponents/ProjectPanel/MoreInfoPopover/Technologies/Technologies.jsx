// React dependencies.
import React from 'react';

// Other components.
import Icon from './Icon.jsx';

// Data containing icon class and icon name information.
//
// Returns a JSON object which maps a string containing the
// technology name (eg: html, css3, javascript), and returns
// another object consisting of the CSS class of the icon,
// and the name of the icon.
var iconDB = require('json!icons.json');

// Component Definition.
export default class Technologies extends React.Component {

  // Component Constructor.
  constructor() {
    super();
  };

  // Component Render.
  render() {

    // Array of <Icon/> components.
    var icons = [];

    // Array of technologies this project uses.
    var tech = this.props.tech;

    // Go through all the technologies used within this project, and look up
    // the icon CSS class and icon name, create an <Icon/> component and pass
    // the class and name as a prop.
    for (var i=0; i<tech.length; i++) {

      // Get the icon class and name.
      var iconData = iconDB[tech[i]];

      // Create an <Icon/> component with the icon class and name, and store it
      // in an array.
      icons.push(

        // <Icon/> component.
        // Passes down the following props:
        //  iconClass: CSS class of the icon.
        //  iconName: Name of the icon to be displayed.
        <Icon
          key={i}
          iconClass={iconData.icon}
          iconName={iconData.name}
        />
      );

    };

    return (
      <div className="container-technologies">
        {icons}
      </div>
    ); // End return().
  }; // End render().

}; // End React.Component{}.
