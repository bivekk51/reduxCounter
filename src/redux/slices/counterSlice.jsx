import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addCount: (state, action) => {

            state.count += action.payload;
        },
        decreaseCount: (state, action) => {
            state.count -= action.payload;
        }
    }
})

export const { addCount, decreaseCount } = counterSlice.actions;
export default counterSlice.reducer;