import { combineReducers } from 'redux';

// Project Data reducer.
import projectData from './reducer_projectData'

// Combine all reducers together into one state object.
const reducers = combineReducers({
  projectData: projectData
})

// Export the state.
export default reducers;
