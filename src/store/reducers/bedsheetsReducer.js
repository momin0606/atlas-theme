const initState = {
  bedsheets: [],
};

const bedsheetsReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_BEDSHEETS":
      return {
        ...state,
        bedsheets: action.bedsheets,
      };
    default:
      return state;
  }
};

export default bedsheetsReducer;
