// React dependencies.
import React from 'react';
import classNames from 'classnames';

// Component definition.
export default class Icon extends React.Component {

  // Component render.
  render() {

    // Classes to control visibility of the label.
    const iconLabelClasses = classNames({
      'icon-label': true,
      'hidden': !this.props.iconName
    })

    return (
      <div className={"container-button " + this.props.containerClasses} onClick={this.props.onClick}>
        <a href={this.props.link} target="_blank">
          <div className={"icon " + this.props.iconClass}></div>
          <div className={iconLabelClasses}>{this.props.iconName}</div>
        </a>
      </div>
    )
  }
  
}
