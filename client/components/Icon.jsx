// React dependencies.
import React from 'react';
import classNames from 'classnames';

// Component definition.
export default class Icon extends React.Component {

  // Component render.
  render() {
    // Deconstruct props.
    const { iconName, containerClasses, link, iconClass } = this.props;

    // Classes to control visibility of the label.
    const iconLabelClasses = classNames({
      'icon-label': true,
      hidden: !iconName,
    })

    return (
      <div className={`container-button ${containerClasses}`} onClick={this.props.onClick}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className={`icon ${iconClass}`} />
          <div className={iconLabelClasses}>
            {iconName}
          </div>
        </a>
      </div>
    );
  }
}
