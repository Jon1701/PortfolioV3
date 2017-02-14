// React.
import React from 'react';

// React Components.
import Icon from 'components/Icon';

const responsiveColumns = 'col-xs-4 col-sm-3 col-md-2 col-lg-1';

/*
 *
 *  Component Definition.
 *
 */
const SectionAboutMe = () => (
  <div id="section-aboutme" className="viewport-fullpage">
    <div className="container-section-content text-center">

      <div>
        About Me
      </div>

      <p>
        Hi! My name is Jon and I'm a Full Stack Developer based in Toronto.
      </p>

      <p>
        Here are some of the technologies I have used:
      </p>

      <div className="container-icons row">
        <Icon iconClass="icon-html5" label="HTML" className={responsiveColumns} />
        <Icon iconClass="icon-css3" label="CSS" className={responsiveColumns} />
        <Icon iconClass="icon-javascript" label="JavaScript" className={responsiveColumns} />
        <Icon iconClass="icon-react" label="React" className={responsiveColumns} />
        <Icon iconClass="icon-redux" label="Redux" className={responsiveColumns} />
        <Icon iconClass="icon-react-router" label="React Router" className={responsiveColumns} />
        <Icon iconClass="icon-jquery" label="jQuery" className={responsiveColumns} />
        <Icon iconClass="icon-bootstrap" label="Bootstrap" className={responsiveColumns} />
        <Icon iconClass="icon-d3" label="D3" className={responsiveColumns} />
        <Icon iconClass="icon-atom" label="Atom" className={responsiveColumns} />
        <Icon iconClass="icon-git" label="Git" className={responsiveColumns} />
        <Icon iconClass="icon-github" label="GitHub" className={responsiveColumns} />
        <Icon iconClass="icon-gulp" label="Gulp" className={responsiveColumns} />
        <Icon iconClass="icon-webpack" label="Webpack" className={responsiveColumns} />
        <Icon iconClass="icon-sass" label="Sass" className={responsiveColumns} />
        <Icon iconClass="icon-npm" label="npm" className={responsiveColumns} />
        <Icon iconClass="icon-nodejs" label="Node.js" className={responsiveColumns} />
        <Icon iconClass="icon-nodejs" label="Express.js" className={responsiveColumns} />
        <Icon iconClass="icon-debian" label="Debian" className={responsiveColumns} />
        <Icon iconClass="icon-ubuntu" label="Ubuntu" className={responsiveColumns} />
        <Icon iconClass="icon-bash" label="Bash" className={responsiveColumns} />
        <Icon iconClass="icon-mongodb" label="MongoDB" className={responsiveColumns} />
        <Icon iconClass="icon-python" label="Python" className={responsiveColumns} />
        <Icon iconClass="icon-flask" label="Flask" className={responsiveColumns} />
        <Icon iconClass="icon-heroku" label="Heroku" className={responsiveColumns} />
      </div>

    </div>
  </div>
);

// Component export.
export default SectionAboutMe;
