import { createSlice } from '@reduxjs/toolkit';

const initialState = []

export const taskSlice = createSlice({
    name: 'tareas',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push({id: Date.now(), text: action.payload })
        },
        removeTask: (state, action) => {
            return state.filter(tarea => tarea.id !== action.payload)
        }
    }
})

export const { addTask, removeTask } = taskSlice.actions
export default taskSlice.reducer 