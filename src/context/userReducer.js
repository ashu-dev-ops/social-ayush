const userReducer = (state, action) => {
  if (action.type === "SET_USER") {
    return { ...state, user: action.payload };
  }
};
export default userReducer;
