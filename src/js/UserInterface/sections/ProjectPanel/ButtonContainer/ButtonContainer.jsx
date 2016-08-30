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

        <Button iconClass="icon-demo" iconName="Demo" link={this.props.links.demo}/>
        <Button iconClass="icon-moreinfo" iconName="More Info" moreinfo={true} updateActivePopupId={this.props.updateActivePopupId} activePopupId={this.props.activePopupId} projId={this.props.projId}/>
        <Button iconClass="icon-github" iconName="GitHub" link={this.props.links.github}/>

        <div className="clearfix"/>

      </div>
    ); // End return().
  }; // End render().

}; // End React.Component{}.
