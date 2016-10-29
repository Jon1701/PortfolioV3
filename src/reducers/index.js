// Redux dependencies.
import { combineReducers } from 'redux';

// Reducers.
import projectData from './reducer_projectData';
import activePopoverId from './reducer_activePopoverId';
import showOnlyFeaturedProjects from './reducer_featuredProjects';
import contactForm from './reducer_contactForm';

// Combine all reducers together into one state object.
const reducers = combineReducers({
  projectData: projectData,         // Array of portfolio projects.

  activePopoverId: activePopoverId, // ID of the project whose More Info popover
                                    // should be displayed.

  showOnlyFeaturedProjects: showOnlyFeaturedProjects, // Toggle to show only featured
                                                      // projects or all projects.

  contactForm: contactForm,  // Contact form field contents.                        
})

// Export the reducers.
export default reducers;
