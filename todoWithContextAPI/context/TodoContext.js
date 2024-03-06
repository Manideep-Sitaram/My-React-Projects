import { createContext, useContext } from "react";

const TodoContext = createContext({
    todos: [],
    addTodo: () => {},
    editTodo: () => {},
    deleteTodo: () => {},
    toggleTodo: () => {},
});

export const TodoContextProvider = TodoContext.Provider;

export default function useTodo() {
    return useContext(TodoContext);
}
