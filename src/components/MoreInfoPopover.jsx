import React from 'react';

import classNames from 'classnames';

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
          containerClasses={ iconClass + "-hover"}
          />
      )

    })

  }

  render() {

    const myClasses = classNames({
      'project-popover': true,
      'bg-white': true,
      'hidden': true
    })

    return (
      <div className={myClasses}>

        <div className="project-description">{this.props.description}</div>

        <div className="project-tech">
          { this.buildIcons() }
        </div>

      </div>
    )
  }
}
