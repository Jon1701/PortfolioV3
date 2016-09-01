// React dependencies.
import React from 'react';
import classNames from 'classnames';

// Navbar buttons.
import Button from './Button.jsx';

// Component Definition.
export default class Navbar extends React.Component {

  // Component Constructor.
  constructor() {
    super();
  }

  // Component Render.
  render() {
    return (
      <div className="navbar" id="navbar-main">

        <Button text="Home" iconClass="icon-home" link="#section-home"/>
        <Button text="About Me" iconClass="icon-aboutme" link="#section-aboutme"/>
        <Button text="Portfolio" iconClass="icon-codepen" link="#section-portfolio"/>
        <Button text="Contact" iconClass="icon-mail" link="#section-contactme"/>

      </div>
    ); // End return();
  }; // End render().

}; // End React.Component{}.
