// Dependencies.
import React from 'react';
import Icon from 'components/Icon';

/*
 *  Helper function to generate an array of icons consisting of a
 *  technology icon and name.
 */
const generateIcons = () => {
  // Icon database with icon class names and labels.
  const iconData = require('json/icons.json');

  // Array of technology names.
  const techNames = [
    'html5', 'css3', 'javascript', 'react', 'redux', 'react-router',
    'jquery', 'bootstrap', 'd3', 'atom', 'git', 'github', 'gulp',
    'webpack', 'sass', 'postcss', 'npm', 'node', 'express', 'debian', 'ubuntu',
    'bash', 'mongodb', 'python', 'flask', 'java', 'heroku',
  ];

  // Return an array of <Icon/>.
  return techNames.map((name) => {
    const key = `aboutme-tech-${name}`;
    const iconClass = iconData[name].icon;  // Icon class name.
    const iconLabel = iconData[name].label; // Icon label.
    const iconHoverClass = `${iconData[name].icon}-hover`;  // Icon hover class name.
    const className = `col-xs-4 col-sm-3 col-md-2 col-lg-2 effect-transition-easeinout ${iconHoverClass}`;  // Classes.

    // Return an <Icon/>.
    return (
      <Icon key={key} iconClass={iconClass} label={iconLabel} className={className} />
    );
  });
};

/*
 *
 *  Component Definition.
 *
 */
const SectionAboutMe = () => (
  <div id="section-aboutme" className="viewport-fullpage">
    <div className="container-section-content text-center">

      <div className="heading">
        About Me
      </div>

      <p>
        Hi! My name is Jon and I'm a Full Stack Developer based in Toronto.
      </p>

      <p>
        Here are some of the technologies I have used:
      </p>

      <div className="container-icons row">
        {generateIcons()}
      </div>

    </div>
  </div>
);

// Component export.
export default SectionAboutMe;
