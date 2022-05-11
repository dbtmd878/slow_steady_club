import React, { useReducer } from "react";

const InitialItemState = {
  type: "CLOTHING",
  item: {
    categories: "PANTS",
    company: "MEPEN",
    name: "Classic TROUSERS(WARM BAIGE)",
  },
};

function reducer(state, action) {}

function ItemState(props) {
  const [state, dispatch] = useReducer(reducer, InitialItemState);
}

export default ItemState;
