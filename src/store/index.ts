import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../slices/login-slice';

const store = configureStore({
  reducer: {
    login: loginSlice,
  },
});

export default store;
