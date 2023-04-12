import { Token } from "@mui/icons-material";
import { createContext, useContext, useReducer } from "react";
import reducer from "./userReducer";
const userContext = createContext();
const initialState = {
  user: {},

  // token:""
};
const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setUserAcc = (data) => {
    dispatch({
      type: "SET_USER",
      payload: data,
    });
  };
  return (
    <userContext.Provider value={{ ...state, setUserAcc }}>
      {children}
    </userContext.Provider>
  );
};
// export default UserContextProvider;
export default UserContextProvider;

export const useUserContext = () => {
  return useContext(userContext);
};
