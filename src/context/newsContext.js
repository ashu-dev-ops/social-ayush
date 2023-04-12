import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { getUserFromLocalStorage } from "../util/localStorage";
import newsReducer from "./newsReducer";
const NewsContext = createContext();
const NewsContextProvider = ({ children }) => {
  const initialState = {
    news: [],
    save: [],
    logIn: false,
    share: [],
    mode: "light",
    user: getUserFromLocalStorage(),
  };
  // const [mode, setMode] = useState("light");

  const [state, dispatch] = useReducer(newsReducer, initialState);
  const setNews = (data) => {
    dispatch({
      type: "SET_NEWS",
      payload: data,
    });
  };
  const setModeToDark = (data) => {
    console.log("running");
    dispatch({
      type: "DARK",
      payload: data,
    });
  };
  const saveNews = (data) => {
    dispatch({
      type: "SAVE_NEWS",
      payload: data,
    });
  };
  const setLogInTrue = (data) => {
    dispatch({
      type: "SET_LOGIN_True",
    });
  };
  const setLogInFalse = (data) => {
    dispatch({
      type: "SET_LOGIN_False",
    });
  };
  const setChipFeed = (data) => {
    dispatch({
      type: "SET_CHIP_FEED",
      payload: data,
    });
  };
  const setUser = (data) => {
    dispatch({
      type: "SET_USER",
      payload: data,
    });
  };
  // SET_LOGIN_False
  useEffect(() => {
    if (state.user) {
      dispatch({
        type: "SET_LOGIN_True",
      });
    }
  }, [state.user]);
  const fetchLocal = async () => {
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&pageSize=10&apiKey=40190166e70d4143a3dbdb032cea41a2`
    );
    setNews(data.articles);
    console.log(state.news);
  };
  useEffect(() => {
    fetchLocal();
  }, []);
  return (
    <NewsContext.Provider
      value={{
        ...state,
        setNews,
        saveNews,
        setLogInFalse,
        setLogInTrue,
        setModeToDark,
        setUser,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
export default NewsContextProvider;
export const useNewsContext = () => {
  return useContext(NewsContext);
};
