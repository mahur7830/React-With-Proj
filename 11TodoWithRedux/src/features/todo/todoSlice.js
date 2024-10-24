

//nanoid generates uniqe id's
import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,

    //======================making reducers ======================in reducers properties and functions come================//
    //in functions here always access of two things (State and Action) 
    reducers: {
        // state tells about initial state that at the initial state what is in means in todos in this exmple
        //action gives the data thaat is passing  like id...=====or others---> like here todo will come from action, text in todo
        
        addTodo: (state, action) => {
            const todo = {
            //payload also an object
                id: nanoid(), 
                text: action.payload
            }
            //update state
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
                        //==todo.id match nhi honi chahiye actionke sath jo payload bhej rahe ho usse
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})



//reducers ko two parts mein export krte hai it is fixed syntax


//In first part exports the functionality
export const {addTodo, removeTodo} = todoSlice.actions

//Reducers ke bare m Store ko bhi awareness chahiye hoti h agar isko awareness nhi h to ye store maintain nhi kr payega kyonki iske andar jo jo
//reducer register hote h unse hi value lekr update krta h
//isliye isko sbhi reducers ka list chahiye hota h

//second part ===============exporting main source so that it can be used in state or store
export default todoSlice.reducer