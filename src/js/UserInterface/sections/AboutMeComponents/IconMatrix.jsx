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
export default class IconMatrix extends React.Component {

  // Component Constructor.
  constructor() {
    super();

    // Icons used within this component.
    this.state = {
      tech: [
        'html5', 'css3', 'javascript', 'jquery', 'jsx', 'bootstrap',
        'materialize', 'react', 'mustachejs', 'd3', 'atom', 'git', 'github', 'gulp',
        'webpack', 'sass', 'nodejs', 'expressjs', 'debian', 'ubuntu', 'bash', 'mongodb',
        'python', 'flask']
    };
  };

  // Component Render.
  render() {

    // Array of <Icon/> components.
    var icons = [];

    // Array of technologies.
    var tech = this.state.tech;

    // Go through all the technologies used within this project, and look up
    // the icon CSS class and icon name, create an <Icon/> component and pass
    // the class and name as a prop.
    for (var i=0; i<tech.length; i++) {

      // Get icon class.
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
      <div className="row">
        {icons}
      </div>
    ); // End return().
  }; // End render().

}; // End React.Component{}.
