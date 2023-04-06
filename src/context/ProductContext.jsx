import React, { createContext, useReducer, useContext } from "react";
import { ACTIONS, API } from "../utils/consts";
import axios from "axios";

const productContext = createContext();
export function useProductContext() {
  return useContext(productContext);
}

const initState = {
  products: [],
  oneProduct: null,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.products:
      return { ...state, products: action.payload };
    case ACTIONS.oneProduct:
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
}

function ProductContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  async function getProducts() {
    const { data } = await axios.get(API);
    dispatch({
      type: ACTIONS.products,
      payload: data,
    });
  }

  async function addProduct(newProduct) {
    try {
      await axios.post(API, newProduct);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }

  async function getOneProduct(id) {
    try {
      const { data } = await axios.get(`${API}/${id}`);
      dispatch({
        type: ACTIONS.oneProduct,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteProduct(id) {
    try {
      await axios.delete(`${API}/${id}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }

  const value = {
    products: state.products,
    oneProduct: state.oneProduct,
    getProducts,
    addProduct,
    deleteProduct,
    getOneProduct,
  };
  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
}

export default ProductContext;
