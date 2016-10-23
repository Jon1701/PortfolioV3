import React from 'react';

import SectionHome from './SectionHome';
import SectionAboutMe from './SectionAboutMe';
import SectionProjects from './SectionProjects';
import SectionContactMe from './SectionContactMe';


export default class WebsiteUI extends React.Component {
  render() {
    return (
      <div>
        <SectionHome/>
        <SectionAboutMe/>
        <SectionProjects/>
        <SectionContactMe/>
      </div>
    )
  }
}
