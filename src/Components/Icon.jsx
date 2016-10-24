import React from 'react';
import classNames from 'classnames';

export default class Icon extends React.Component {
  render() {

    // Classes to control visibility of the label.
    const iconLabelClasses = classNames({
      'icon-label': true,
      'hidden': !this.props.iconName
    })

    return (
      <div className={"container-button " + this.props.containerClasses}>
        <a href={this.props.link} target="_blank">
          <div className={"icon " + this.props.iconClass}></div>
          <div className={iconLabelClasses}>{this.props.iconName}</div>
        </a>
      </div>
    )
  }
}
