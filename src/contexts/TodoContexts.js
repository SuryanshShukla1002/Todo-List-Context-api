import { createContext } from 'react';
import { useContext } from 'react';




export const TodoContexts = createContext({
    todos: [
        {
            id: 1,
            todo: "todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) = {},
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
});

export const useTodo = () => {
    return useContext(TodoContexts);
};

export const TodoProvider = TodoContexts.Provider;