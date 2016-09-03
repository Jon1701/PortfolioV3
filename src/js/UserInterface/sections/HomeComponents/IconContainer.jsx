// React dependencies.
import React from 'react';
import Icon from './Icon.jsx';

// Component Definition.
export default class IconContainer extends React.Component {

  // Component Constructor.
  constructor() {
    super();
  };

  // Component Render.
  render() {
    return (
      <div className="container-icons text-center noselect">
        <Icon iconClass="icon-github" link="https://github.com/Jon1701"/>
        <Icon iconClass="icon-linkedin" link="https://ca.linkedin.com/in/jonbalon"/>
        <Icon iconClass="icon-freecodecamp" link="https://www.freecodecamp.com/jon1701"/>

        <div className="clearfix"/>
      </div>
    ); // End return().
  }; // End render().

}; // End React.Component{}.
