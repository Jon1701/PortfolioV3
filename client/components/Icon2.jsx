// Dependencies.
import React from 'react';

// Component definition.
const Icon = ({ link, iconClass, label, className }) => (
  <div className={`"container-icon ${className}`}>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className={`icon ${iconClass}`} />
      <div className="label">{label}</div>
    </a>
  </div>
);

// Prop typecheck.
Icon.propTypes = {
  className: React.PropTypes.string,
  link: React.PropTypes.string,
  iconClass: React.PropTypes.string.isRequired,
  label: React.PropTypes.string,
};

// Component export.
export default Icon;
