// Toggles the visibility of only featured projects, or all projects.
const showOnlyFeaturedProjects = (state=true, action) => {

  switch (action.type) {

    case 'TOGGLE_FEATURED_PROJECTS':
      state = !state;

  }

  // By default, show only featured projects
  return state;
}

// Export reducer.
export default showOnlyFeaturedProjects;
