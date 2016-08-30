// React dependencies.
import React from 'react';

// Other components.
// Sections.
import Home from './sections/Home.jsx';
import AboutMe from './sections/AboutMe.jsx';
import Portfolio from './sections/Portfolio.jsx';
import ContactMe from './sections/ContactMe.jsx';

// Component Definition.
export default class UserInterface extends React.Component {

  // Component Constructor.
  constructor() {
    super();
  }

  // Component Render.
  render() {
    return (
      <div>
        <Home/>
        <AboutMe/>
        <Portfolio/>
        <ContactMe/>
      </div>
    ); // End return();
  }; // End render().

}; // End React.Component{}.
