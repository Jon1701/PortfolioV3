// React dependencies.
import React from 'react';

import Button from './Button.jsx';

// Component Definition.
export default class ButtonContainer extends React.Component {

  // Component Constructor.
  constructor() {
    super();
  }

  // Component Render.
  render() {

    return (
      <div className="container-buttons">

        <Button iconClass="icon-demo" iconName="Demo" link={this.props.demoLink}/>
        <Button iconClass="icon-moreinfo" iconName="More Info" moreinfo={true} updateActivePopup={this.props.updateActivePopup} activePopup={this.props.activePopup} projId={this.props.projId}/>
        <Button iconClass="icon-github" iconName="GitHub" link={this.props.githubLink}/>

        <div className="clearfix"/>

      </div>
    );
  } // End Component Render.

} // End Component Definition.
