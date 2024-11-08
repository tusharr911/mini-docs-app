// use Reducer and Context API

//Shifted to Redux Toolkit so now use ReduxStore.js and TodoSlice.js

// import { useContext, createContext, useReducer, useEffect } from "react";
// import { nanoid } from "nanoid";

// export const todoContext = createContext({
//   currArray: [],
//   handleAddTodo: () => {},
//   handleUpdate: () => {},
//   handleDelete: () => {},
//   handleToggleComplete: () => {},
// });

// const ACTIONS = {
//   ADD_TODO: "ADD_TODO",
//   REMOVE_TODO: "REMOVE_TODO",
//   STATE_UPDATE: "STATE_UPDATE",
//   UPDATE_TODO: "UPDATE_TODO",
//   TOGGLE_COMPLETE: "TOGGLE_COMPLETE",
// };

// const dataArray = [
//   {
//     id: nanoid(),
//     text: "Buy some groceries",
//     date: "2024-02-15",
//     completedStatus: false,
//     tagTitle: "Mark as Completed",
//   },

//   {
//     id: nanoid(),
//     text: "Water the plants",
//     date: "2024-01-08",
//     completedStatus: false,
//     tagTitle: "Mark as Completed",
//   },
// ];

// //Actual reducer function with functionality

// function reducer(state, action) {
//   switch (action.type) {
//     case ACTIONS.ADD_TODO:

//       return [
//         ...state,
//         {
//           id: nanoid(),
//           text: action.payload.text,
//           date: action.payload.date,
//           completedStatus: false,
//           tagTitle: "Mark as Completed",
//         },
//       ];
//     case ACTIONS.REMOVE_TODO:
//       return state.filter((item) => item.id !== action.payload.id);
//     case ACTIONS.STATE_UPDATE:
//       return action.payload.todosArray;
//     case ACTIONS.UPDATE_TODO:
//       return state.map((item) =>
//         item.id === action.payload.id
//           ? { ...item, text: action.payload.todoText }
//           : item
//       );
//     case ACTIONS.TOGGLE_COMPLETE:
//       return state.map((item) =>
//         item.id === action.payload.id
//           ? { ...item, completedStatus: !item.completedStatus }
//           : item
//       );
//     default:
//       return state;
//   }
// }

// // eslint-disable-next-line react/prop-types
// export const TodoContextProvider = ({ children }) => {
//   //Handler function for dispatching events
//   const [currArray, dispatch] = useReducer(
//     reducer,
//     JSON.parse(localStorage.getItem("todosArray")) || dataArray || []
//   );
//   function handleAddTodo(todoObject) {

//     dispatch({
//       type: ACTIONS.ADD_TODO,
//       payload: { text: todoObject.text, date: todoObject.date },
//     });
//   }
//   function handleDelete(id) {
//     dispatch({
//       type: ACTIONS.REMOVE_TODO,
//       payload: { id },
//     });
//   }
//   function handleUpdate(id, todoText) {
//     if (id.length > 0 && todoText.length > 0) {
//       dispatch({
//         type: ACTIONS.UPDATE_TODO,
//         payload: { id, todoText },
//       });
//     }
//   }
//   function handleToggleComplete(id) {
//     if (id.length > 0) {
//       dispatch({
//         type: ACTIONS.TOGGLE_COMPLETE,
//         payload: { id },
//       });
//     }
//   }
//   //Effects for localStorage
//   useEffect(() => {
//     const todosArray = JSON.parse(localStorage.getItem("todosArray"));

//     if (todosArray && todosArray.length > 0) {
//       dispatch({
//         type: ACTIONS.STATE_UPDATE,
//         payload: { todosArray },
//       });
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("todosArray", JSON.stringify(currArray));
//   }, [currArray]);

//   return (
//     <todoContext.Provider
//       value={{
//         handleAddTodo,
//         handleDelete,
//         currArray,
//         handleUpdate,
//         handleToggleComplete,
//       }}
//     >
//       {children}
//     </todoContext.Provider>
//   );
// };

// export const useTodoContextHook = () => {
//   return useContext(todoContext);
// };
