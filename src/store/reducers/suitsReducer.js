const initState = {
  suits: [],
};

const suitsReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_SUITS":
      return {
        ...state,
        suits: action.suits,
      };
    default:
      return state;
  }
};

export default suitsReducer;
