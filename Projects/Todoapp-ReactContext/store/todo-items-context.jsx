import { createContext } from "react";

export const TododataContext = createContext([{
  tododata: [],
  handleOnClick: ()=>{},
  handleClickDelete: ()=>{},
}]); 