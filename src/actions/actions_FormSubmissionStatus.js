// Sets form submission as a success.
export const setFormSubmissionStatusToSuccess = () => {
  return {
    type: 'SET_FORM_SUBMISSION_STATUS_SUCCESS'
  }
}

// Sets form submission as a failure.
export const setFormSubmissionStatusToFailure = () => {
  return {
    type: 'SET_FORM_SUBMISSION_STATUS_FAILURE'
  }
}

// Sets form submission as incomplete.
export const setFormSubmissionStatusToIncomplete = () => {
  return {
    type: 'SET_FORM_SUBMISSION_STATUS_INCOMPLETE'
  }
}

// Resets form submission status to default.
export const resetFormSubmissionStatus = () => {
  return {
    type: 'RESET_FORM_SUBMISSION_STATUS'
  }
}
