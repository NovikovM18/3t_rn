import { configureStore, createSlice } from '@reduxjs/toolkit';


const anyState = {
  counter: 0,
}

const authState = {
  user: null,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: anyState,
  reducers: {
    setCount: (state, action) => {
      state.counter = action.payload;
    }
  }
})
export const {setCount} = counterSlice.actions;

const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    }
  }
})

export const {setUser} = authSlice.actions;


const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  }
})

export default store