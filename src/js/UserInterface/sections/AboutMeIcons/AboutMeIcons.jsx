// React dependencies.
import React from 'react';

import Icon from './Icon.jsx';

var iconDB = require('json!icons.json')

// Component Definition.
export default class AboutMeIcons extends React.Component {

  // Component Constructor.
  constructor() {
    super();

    this.state = {
      icons: [
        'html5', 'css3', 'javascript', 'jquery', 'bootstrap',
        'materialize', 'react', 'atom', 'git', 'github', 'gulp',
        'sass', 'nodejs', 'debian', 'ubuntu', 'bash', 'mongodb',
        'python']
    }
  }

  // Component Render.
  render() {

    // Array of icons.
    var arrayIcons = [];

    // Go through all icons in this.state.
    for (var i=0; i<this.state.icons.length; i++) {

      // Get icon class.
      var iconClass = iconDB[this.state.icons[i]]['icon'];
      var iconName = iconDB[this.state.icons[i]]['name'];

      arrayIcons.push(<Icon key={i} iconClass={iconClass} iconName={iconName}/>);
    }

    return (
      <div className="row">
        {arrayIcons}
      </div>
    );
  } // End Component Render.

} // End Component Definition.
