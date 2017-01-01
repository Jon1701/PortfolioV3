// React.
import React from 'react';

// React components.
import SectionHome from './SectionHome';
import SectionAboutMe from './SectionAboutMe';
import SectionProjects from './SectionProjects';
import SectionContactMe from './SectionContactMe';

// Stylesheets.
require('stylesheets/stylesheet.scss');

// Component definition.
const WebsiteUI = () => (
  <div>
    <SectionHome />
    <SectionAboutMe />
    <SectionProjects />
    <SectionContactMe />
  </div>
);

// Component export.
export default WebsiteUI;
