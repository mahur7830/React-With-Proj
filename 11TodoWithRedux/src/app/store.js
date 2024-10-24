

        //Process of making store

        import {configureStore} from '@reduxjs/toolkit';
        import todoReducer from '../features/todo/todoSlice';
        
        //it always tke an object as an argument======most of the thing takes object here
        export const store = configureStore({
            reducer: todoReducer
        })