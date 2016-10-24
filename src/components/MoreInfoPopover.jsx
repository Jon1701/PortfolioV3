import React from 'react';

import Icon from 'components/Icon'

export default class MoreInfoPopover extends React.Component {

  buildIcons() {

    // Load icon data from JSON file.
    const iconData = require('json/icons.json');

    const tech = this.props.tech;

    return tech.map((val, idx, arr) => {

      const iconClass = iconData[val]['icon'];
      const iconName = iconData[val]['name'];

      return (
        <Icon
          key={ idx }
          iconClass={ iconClass }
          iconName={ iconName }
          containerClasses={ "col-xs-2 col-sm-2 col-lg-2 " + iconClass + "-hover"}
          />
      )

    })

  }

  render() {
    return (
      <div className="project-popover bg-white">

        <div className="project-description">{this.props.description}</div>

        <div className="project-tech row">
          { this.buildIcons() }
        </div>

      </div>
    )
  }
}
