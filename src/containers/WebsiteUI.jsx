import React from 'react';

import SectionHome from './SectionHome';
import SectionAboutMe from './SectionAboutMe';
import SectionProjects from './SectionProjects';
import SectionContactMe from './SectionContactMe';

// Stylesheets.
require('stylesheets/stylesheet.scss');

export default class WebsiteUI extends React.Component {
  render() {
    return (
      <div>
        <SectionProjects/>
        <SectionAboutMe/>
        <SectionHome/>
        <SectionContactMe/>
      </div>
    )
  }
}
