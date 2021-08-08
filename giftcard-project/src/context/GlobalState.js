import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  cards: [],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const removeCard = (id) => {
    dispatch({
      type: "REMOVE_CARD",
      payload: id,
    });
  };

  const addCard = (card) => {
    dispatch({
      type: "ADD_CARD",
      payload: card,
    });
  };

  const editCard = (card) => {
    dispatch({
      type: "EDIT_CARD",
      payload: card,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        cards: state.cards,
        removeCard,
        addCard,
        editCard,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
