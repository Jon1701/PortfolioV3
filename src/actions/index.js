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

// Action to update Contact form Name field.
export const updateNameField = (text) => {
  return {
    type: 'UPDATE_NAME_FIELD',
    payload: text
  }
}

// Action to update Contact form Email field.
export const updateEmailField = (text) => {
  return {
    type: 'UPDATE_EMAIL_FIELD',
    payload: text
  }
}

// Action to update Contact form Subject field.
export const updateSubjectField = (text) => {
  return {
    type: 'UPDATE_SUBJECT_FIELD',
    payload: text
  }
}

// Action to update Contact form Gotcha field.
export const updateGotchaField = (text) => {
  return {
    type: 'UPDATE_GOTCHA_FIELD',
    payload: text
  }
}

// Action to update Contact form Message field.
export const updateMessageField = (text) => {
  return {
    type: 'UPDATE_MESSAGE_FIELD',
    payload: text
  }
}

export const resetForm = () => {
  return {
    type: 'RESET_FORM'
  }
}

export const enableSubmitButton = () => {
  return {
    type: 'ENABLE_SUBMIT_BUTTON'
  }
}

export const disableSubmitButton = () => {
  return {
      type: 'DISABLE_SUBMIT_BUTTON'
  }
}

export const setFormSubmissionStatusToSuccess = () => {
  return {
    type: 'SET_FORM_SUBMISSION_STATUS_SUCCESS'
  }
}

export const setFormSubmissionStatusToFailure = () => {
  return {
    type: 'SET_FORM_SUBMISSION_STATUS_FAILURE'
  }
}

export const setFormSubmissionStatusToIncomplete = () => {
  return {
    type: 'SET_FORM_SUBMISSION_STATUS_INCOMPLETE'
  }
}

export const resetFormSubmissionStatus = () => {
  return {
    type: 'RESET_FORM_SUBMISSION_STATUS'
  }
}
