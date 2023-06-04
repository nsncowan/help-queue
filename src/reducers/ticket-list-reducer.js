const reducer = (state = {}, action) => {
  const { names, location, isuue, id } = action;
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
    default:
      return state;
  }
};

export default reducer;