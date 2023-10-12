import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore, createSlice } from '@reduxjs/toolkit';

let authUser = getStoreUser();

async function getStoreUser() {
  try {
    const data = await AsyncStorage.getItem('USER');
    console.log(data);
    if (data) {
      return data;
    } else {
      return null;
    };
  } catch (error) {
  };
};

async function setUserToAS(user) {
  console.log('sssss',user);
  try {
    if (user) {
      await AsyncStorage.setItem('USER', user);
    } else {
      console.log('remove');
      await AsyncStorage.removeItem('USER');
    }
  } catch (error) {
    console.log('store error',error);
  }
};

console.log('ggggggggggggg', getStoreUser());

const anyState = {
  counter: 0,
}

const authState = {
  user: authUser || null,
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
      setUserToAS(action.payload);
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