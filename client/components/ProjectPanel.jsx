// React dependencies.
import React from 'react';

// Redux dependencies.
import { connect } from 'react-redux';

// React components.
import Icon from 'components/Icon'
import MoreInfoPopover from 'components/MoreInfoPopover'

// Actions.
import { togglePopover } from 'actions/index.js';
import { bindActionCreators } from 'redux'

// Component definition.
class ProjectPanel extends React.Component {

  // Component render.
  render() {
    // Access ID of this project.
    const projectId = this.props.projectId;

    // Get Project data.
    const { title, description, technologies } = this.props.data;
    const { github, demo } = this.props.data.links;
    const imageUrl = require('images/portfolio/' + this.props.data.image);

    return (
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4" key={title}>

        <div className="project-panel">
          <div className="project-title">
            {title}
          </div>

          <div className="project-image-container noselect">
            <a href={demo} target="_blank" rel="noopener noreferrer">
              <img src={imageUrl} alt={description} className="project-image img-responsive" />
            </a>
          </div>

          <div className="project-buttons custom-row cursor-hand noselect">
            <Icon
              iconClass={'icon icon-demo'}
              iconName={'Demo'}
              ink={demo}
              containerClasses={'icon-hover-crimson col-xs-4 col-sm-4 col-md-4 col-lg-4'}
            />
            <Icon
              iconClass={'icon icon-moreinfo'}
              iconName={'More Info'}
              containerClasses={'icon-hover-crimson col-xs-4 col-sm-4 col-md-4 col-lg-4'}
              onClick={() => this.props.togglePopover(this.props.projectId)}
            />
            <Icon
              iconClass={'icon icon-github'}
              iconName={'GitHub'}
              link={github}
              containerClasses={'icon-hover-crimson col-xs-4 col-sm-4 col-md-4 col-lg-4'}
            />
          </div>

          <MoreInfoPopover description={description} tech={technologies} projectId={projectId} />
        </div>

      </div>
    );
  }
}

// Bind actions to props.
const mapDispatchToProps = dispatch => (
  bindActionCreators({ togglePopover }, dispatch)
);

// Prop validation.
ProjectPanel.propTypes = {
  data: React.PropTypes.shape({
    title: React.PropTypes.string,
    image: React.PropTypes.string,
    description: React.PropTypes.string,
    technologies: React.PropTypes.arrayOf(React.PropTypes.string),
    links: React.PropTypes.shape({
      demo: React.PropTypes.string,
      github: React.PropTypes.string,
    }),
    featured: React.PropTypes.bool,
  }),
  projectId: React.PropTypes.number,
  togglePopover: React.PropTypes.func,
};

// Allow access to Redux store.
export default connect(null, mapDispatchToProps)(ProjectPanel);
