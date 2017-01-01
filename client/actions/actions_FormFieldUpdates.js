
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
