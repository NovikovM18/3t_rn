import { configureStore, createSlice } from '@reduxjs/toolkit';


const initialState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    setCount: (state, action) => {
      console.log('stateACTION', action);
      state.value = action.payload;
    }
  }
})

export const {setCount} = counterSlice.actions;


const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
})

export default store