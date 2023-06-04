// reducers take 2 params: the first param is the current state, in this example it's {}
// the second param is an object, which contains a 'type' property. This determines the action that will be taken.
const reducer = (state = {}, action) => {
  const { names, location, issue, id } = action;
  switch (action.type) {
    case 'ADD_TICKET':
      return Object.assign({}, state, {
        [id]: {
          names: names,
          location: location,
          issue: issue,
          id: id
        }
      });
    case 'DELETE_TICKET':
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};

export default reducer;