import React, { createContext, useContext, useReducer } from "react";
import { Link } from "react-router-dom";

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "INSTA": {
      return window.open("https://www.instagram.com/slowsteadyclub/");
    }
    case "YOUTUBE": {
      return window.open(
        "https://www.youtube.com/channel/UCA3xtMr5p_oYH3XPpqugvoA"
      );
    }
    case "HOME": {
      return <Link to="/"></Link>;
    }
    default: {
      throw new Error("잘못됬다");
    }
  }
}

const initialState = {};

const PageDispatchContext = createContext();
const PageStateContext = createContext();

export function IconContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PageDispatchContext.Provider value={dispatch}>
      <PageStateContext.Provider value={state}>
        {children}
      </PageStateContext.Provider>
    </PageDispatchContext.Provider>
  );
}

export function useIconDispatch() {
  return useContext(PageStateContext);
}
