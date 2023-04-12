import { act } from "react-dom/test-utils";

const newsReducer = (state, action) => {
  console.log(action.type);
  if (action.type === "DARK") {
    console.log("running reducer");
    return { ...state, mode: action.payload };
  }
  if (action.type === "SET_NEWS") {
    const tempNews = action.payload;
    return { ...state, news: tempNews };
  }
  if (action.type === "SET_LOGIN_True") {
    return { ...state, logIn: true };
  }
  if (action.type === "SET_USER") {
    return { ...state, user: action.payload };
  }

  if (action.type === "SET_LOGIN_False") {
    return { ...state, logIn: false };
  }
  if (action.type === "SAVE_NEWS") {
    // if(state)
    const tempNews = state.save;
    // tempNews.map((i)=>i.includes)
    // console.log()
    const g = tempNews.some((i) => i.title === action.payload.title);
    if (g) {
      return { ...state, save: [...state.save] };
    }
    console.log(typeof action.payload);
    // tempNews.push(action.payload);

    return { ...state, save: [...state.save, action.payload] };
  }
  return { ...state };
};
export default newsReducer;
