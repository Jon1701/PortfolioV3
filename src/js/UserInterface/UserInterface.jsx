// React dependencies.
import React from 'react';

// Navigation Bar.
import Navbar from './navbar/Navbar.jsx';

// Sections.
import Home from './sections/Home.jsx';
import AboutMe from './sections/AboutMe.jsx';
import Portfolio from './sections/Portfolio.jsx';
import ContactMe from './sections/ContactMe.jsx';
import Footer from './sections/Footer.jsx';

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
        <Navbar/>
        <Home/>
        <AboutMe/>
        <Portfolio/>
        <ContactMe/>
        <Footer/>
      </div>
    ); // End return();
  }; // End render().

}; // End React.Component{}.
