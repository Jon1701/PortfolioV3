// React dependencies.
import React from 'react';
import classNames from 'classnames';

// Redux dependencies.
import { connect } from 'react-redux';

// React components.
import Icon from 'components/Icon'

// Component definition.
class MoreInfoPopover extends React.Component {

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
      'hidden': this.props.activePopoverId != this.props.projectId
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

// Function to map state to props.
//
// this.state.activePopoverId -> this.props.activePopoverId.
const mapStateToProps = (state) => {
  return {
    activePopoverId: state.activePopoverId
  }
}

// Allows this component to access the Redux store.
export default connect(mapStateToProps)(MoreInfoPopover);
