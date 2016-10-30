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

export const updateAllFieldsValidFlag = (value) => {
  return {
    type: 'UPDATE_ALL_FIELDS_VALID_FLAG',
    payload: value
  }
}

export const updateFormSubmitStatus = (status) => {
  return {
    type: 'UPDATE_FORM_SUBMIT_STATUS',
    payload: status
  }
}
