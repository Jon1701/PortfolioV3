// React dependencies.
import React from 'react';

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

    this.state = {
      iconDB: {
        'bootstrap': {
          icon: 'icon-bootstrap',
          name: 'Bootstrap'
        },

        'css3': {
          icon: 'icon-css3',
          name: 'CSS3'
        },

        'debian': {
          icon: 'icon-debian',
          name: 'Debian'
        },

        'atom': {
          icon: 'icon-atom',
          name: 'Atom'
        },

        'freecodecamp': {
          icon: 'icon-freecodecamp',
          name: 'FreeCodeCamp'
        },

        'git': {
          icon: 'icon-git',
          name: 'Git'
        },

        'github': {
          icon: 'icon-github',
          name: 'GitHub'
        },

        'gulp': {
          icon: 'icon-gulp',
          name: 'Gulp'
        },

        'html5': {
          icon: 'icon-html5',
          name: 'HTML5'
        },

        'jquery': {
          icon: 'icon-jquery',
          name: 'jQuery'
        },

        'javascript': {
          icon: 'icon-javascript',
          name: 'JavaScript'
        },

        'linkedin': {
          icon: 'icon-linkedin',
          name: 'LinkedIn'
        },

        'materialize': {
          icon: 'icon-materialize',
          name: 'Materialize'
        },

        'mongodb': {
          icon: 'icon-mongodb',
          name: 'MongoDB'
        },

        'nodejs': {
          icon: 'icon-nodejs',
          name: 'NodeJS'
        },

        'python': {
          icon: 'icon-python',
          name: 'Python'
        },

        'react': {
          icon: 'icon-react',
          name: 'React'
        },

        'sass': {
          icon: 'icon-sass',
          name: 'Sass'
        },

        'bash': {
          icon: 'icon-terminal',
          name: 'Bash'
        },

        'ubuntu': {
          icon: 'icon-ubuntu',
          name: 'Ubuntu'
        }
      }
    }
  }

  // Component Render.
  render() {
    return (
      <div>
        <Home/>
        <AboutMe iconDB={this.state.iconDB}/>
        <Portfolio/>
        <ContactMe/>
      </div>
    );
  } // End Component Render.

} // End Component Definition.
