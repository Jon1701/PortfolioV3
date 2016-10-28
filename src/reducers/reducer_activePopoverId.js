// Return the ID of the project, whose More Info button was pressed.
const activePopoverId = (state=-1, action) => {

  switch (action.type) {

    case 'TOGGLE_MOREINFO_POPOVER':

      // Set active project ID.
      if (action.payload == state) {

        // If the ID of the project which was just clicked is the same
        // as the currently active project, reset the active project ID
        // to -1, this will close all More Info popups.
        state = -1;

      } else {

        // Set the active project ID to the newly clicked one.
        state = action.payload;

      }

  }

  // By default, show no More Info popups.
  return state;
}

// Export reducer.
export default activePopoverId;
