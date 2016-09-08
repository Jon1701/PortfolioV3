// React dependencies.
import React from 'react';
import Icon from './Icon.jsx';

// Component Definition.
export default class IconArray extends React.Component {

  // Component Constructor.
  constructor() {
    super();
  };

  // Component Render.
  render() {
    return (
      <div className="array-icons text-center noselect">

        <a href="https://github.com/Jon1701" target="_blank">
          <Icon iconClass="icon-github" iconLabel="GitHub"/>
        </a>

        <a href="https://ca.linkedin.com/in/jonbalon" target="_blank">
          <Icon iconClass="icon-linkedin" iconLabel="LinkedIn"/>
        </a>

        <a href="https://twitter.com/Jon1764" target="_blank">
          <Icon iconClass="icon-twitter" iconLabel="Twitter"/>
        </a>
        
      </div>
    ); // End return().
  }; // End render().

}; // End React.Component{}.
