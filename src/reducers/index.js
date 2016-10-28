// Redux dependencies.
import { combineReducers } from 'redux';

// Reducers.
import projectData from './reducer_projectData';
import activePopoverId from './reducer_activePopoverId';

// Combine all reducers together into one state object.
const reducers = combineReducers({
  projectData: projectData,         // Array of portfolio projects.
  activePopoverId: activePopoverId, // ID of the project whose More Info popover
                                    // should be displayed.
})

// Export the reducers.
export default reducers;
