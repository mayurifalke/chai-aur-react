import { createContext } from "react";
import { useReducer} from "react";

export const TododataContext = createContext([{
  tododata: [],
  handleOnClick: ()=>{},
  handleClickDelete: ()=>{},
}]); 

//function for state management
function todoItemsReducer(currTodoItems, action) {
  //based on action and current state it return the new state
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { itemName: action.payload.inputText, date: action.payload.inputDate },
    ];
  }
  else if(action.type === "DELETE_ITEM"){
    newTodoItems = currTodoItems.filter((item)=>item.itemName != action.payload.itemName)
  }
  return newTodoItems;
}

function TododataContextProvider({children}){
   
  const [tododata, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  //handleOnClick and handleClickDelete this two function handling the state updation/management thus we will use Reducerfor it

  function handleOnClick(inputText, inputDate) {
    //creating the action object and dispatch it using dispatch function
    let newItemAction = {
      type: "NEW_ITEM", //to understand which type of action is happened
      payload: {
        inputText,
        inputDate,
      },
    };

    dispatchTodoItems(newItemAction);
  }

  function handleClickDelete(itemName) {
    const newDeleteAction = {
      type:"DELETE_ITEM",
      payload:{
        itemName
      }
    }
    dispatchTodoItems(newDeleteAction)
  }

  return(
    <TododataContext.Provider
    value={{
      tododata: tododata,
      handleOnClick: handleOnClick,
      handleClickDelete: handleClickDelete,
    }}
  >
  {children}
</TododataContext.Provider>
  )
}

export default TododataContextProvider;