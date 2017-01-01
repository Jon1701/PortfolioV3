// React dependencies.
import React from 'react';
import classNames from 'classnames';

// Redux dependencies.
import { connect } from 'react-redux';

// React components.
import Icon from 'components/Icon'

// Data.
const iconData = require('json/icons.json');  // Load icon data from JSON file.

// Component definition.
class MoreInfoPopover extends React.Component {

  render() {
    // Deconstruct props.
    const { tech, activePopoverId, projectId, description } = this.props;

    // Build DOM node for project icons.
    const projectIcons = tech.map((val, idx) => {
      // Get icon css class and icon name.
      const iconClass = iconData[val]['icon'];
      const iconName = iconData[val]['name'];

      return (
        <Icon
          key={idx}
          iconClass={iconClass}
          iconName={iconName}
          containerClasses={`${iconClass}-hover`}
        />
      );
    });

    // Classes to control visibility of Project Panel Popover.
    const myClasses = classNames({
      'project-popover': true,
      'bg-white': true,
      hidden: activePopoverId !== projectId,
    });

    return (
      <div className={myClasses}>
        <div className="project-description">{description}</div>

        <div className="project-tech">
          { projectIcons }
        </div>
      </div>
    );
  }
}

// Maps state to props.
const mapStateToProps = state => ({
  activePopoverId: state.activePopoverId,
});

// Prop validation.
MoreInfoPopover.propTypes = {
  tech: React.PropTypes.arrayOf(React.PropTypes.string),
  activePopoverId: React.PropTypes.number,
  projectId: React.PropTypes.number,
  description: React.PropTypes.string,
};

// Allow access to redux store.
export default connect(mapStateToProps, null)(MoreInfoPopover);
