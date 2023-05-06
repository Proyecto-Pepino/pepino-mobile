import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice ({
    name:'todosSlice',
    initialState : [],
    reducers:{
        addTodo:(state,action)=>{
            const newTodo ={
                id:Date.now(),
                text:action.payload,
                completed:false
            }
            state.push(newTodo)
        },
        completeTodo:(state,action)=>{
            const todo = state.find(todo=>todo.id === action.payload);
            if (todo){
                todo.completed = true
            }
        },
        deleteTodo:(state,action)=>{
            const todo = state.findIndex(todo=>todo.id ===action.payload)
            if(index !== -1){
                state.splice(index,1)
            }
        }

    
    }
    

})

export const {addTodo, completeTodo, deleteTodo} = todosSlice.actions;
export default todosSlice.reducer;