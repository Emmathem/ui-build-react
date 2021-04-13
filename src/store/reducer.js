export const initialState = {
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case action.type:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
