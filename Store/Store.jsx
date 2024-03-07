import { useContext, createContext, useReducer, useEffect } from "react";
import { nanoid } from "nanoid";

export const todoContext = createContext({
  currArray: [],
  handleAddTodo: () => {},
  handleDelete: () => {},
});

const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  STATE_UPDATE: "STATE_UPDATE",
};

const dataArray = [
  {
    id: nanoid(),
    desc: "Buy some groceries",
    date: "2024-02-15",
    completed: false,
    tagTitle: "Mark as Completed",
  },

  {
    id: nanoid(),
    desc: "Water the plants",
    date: "2024-01-08",
    completed: false,
    tagTitle: "Mark as Completed",
  },
];

//Actual reducer function with functionality

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [
        ...state,
        {
          id: nanoid(),
          desc: action.payload.text,
          date: action.payload.date,
          completed: false,
          tagTitle: "Mark as Completed",
        },
      ];
    case ACTIONS.REMOVE_TODO:
      return state.filter((item) => item.id !== action.payload.id);
    case ACTIONS.STATE_UPDATE:
      return action.payload.todosArray;
    default:
      return state;
  }
}

// eslint-disable-next-line react/prop-types
export const TodoContextProvider = ({ children }) => {
  //Handler function for dispatching events
  const [currArray, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("todosArray")) || dataArray
  );
  function handleAddTodo(todoObject) {
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: { text: todoObject.text, date: todoObject.date },
    });
  }
  function handleDelete(id) {
    dispatch({
      type: ACTIONS.REMOVE_TODO,
      payload: { id },
    });
  }

  //Effects for localStorage
  useEffect(() => {
    const todosArray = JSON.parse(localStorage.getItem("todosArray"));
    if (todosArray && todosArray.length > 0) {
      dispatch({
        type: ACTIONS.STATE_UPDATE,
        payload: { todosArray },
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todosArray", JSON.stringify(currArray));
  }, [currArray]);

  return (
    <todoContext.Provider
      value={{  handleAddTodo, handleDelete, currArray }}
    >
      {children}
    </todoContext.Provider>
  );
};

export const useTodoContextHook = () => {
  return useContext(todoContext);
};
