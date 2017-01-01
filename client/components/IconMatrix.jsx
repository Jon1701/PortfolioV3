// React.
import React from 'react';

// React components.
import Icon from 'components/Icon';

// Other.
const iconData = require('json/icons.json');  // Load icon data from JSON file.

// Component definition.
export default class IconMatrix extends React.Component {

  // Component render.
  render() {

    // Get an array of Icon Names.
    const iconNames = [
      'html5', 'css3', 'javascript', 'react', 'redux', 'react-router', 'jquery',
      'bootstrap', 'materialize', 'mustachejs', 'd3', 'atom',
      'git', 'github', 'gulp', 'webpack', 'sass', 'npm', 'nodejs', 'expressjs',
      'debian', 'ubuntu', 'bash', 'mongodb', 'python', 'flask', 'cloud9',
      'heroku'
    ];

    const matrix = iconNames.map((name, idx, arr) => {

      // Get Icon CSS class and Icon Name.
      const iconClass = iconData[name]['icon'];
      const iconName = iconData[name]['name'];

      return (
        <Icon
          key={ "icon-aboutme-" + idx }
          iconClass={ iconClass }
          iconName={ iconName }
          containerClasses={ "col-xs-4 col-sm-3 col-lg-2 " + iconClass + "-hover"}
        />
      )
    });

    return (
      <div>
        {matrix}
      </div>
    )
  }
}
