// Action to toggle the currently active popover.
export const togglePopover = (projectId) => {
  return {
    type: 'TOGGLE_MOREINFO_POPOVER',
    payload: projectId
  }
}
