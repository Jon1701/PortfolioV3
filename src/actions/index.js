// Action to toggle the currently active popover.
export const togglePopover = (projectId) => {
  return {
    type: 'TOGGLE_MOREINFO_POPOVER',
    payload: projectId
  }
}

// Action to toggle visibility between displaying only featured projects,
// or all projects.
export const toggleFeaturedProjects = () => {
  return {
    type: 'TOGGLE_FEATURED_PROJECTS'
  }
}

// Resets the entire form to defaults.
export const resetForm = () => {
  return {
    type: 'RESET_FORM'
  }
}
