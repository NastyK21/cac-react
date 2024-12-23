import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos :[{id:1,
        text :"hello world"
    }]
}
//state and action will always be needed 
//state gives idea of the initial state
//action gives the value of props needed
// slice is like a features of a store
export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers :{
        addTodo : (state,action) => {
            const todo = {
                id: nanoid(),
                text : action.payload

            }
            state.todos.push(todo)
        },
        removeTodo :(state,action) =>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)

        },

        //updateTodo

    }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer