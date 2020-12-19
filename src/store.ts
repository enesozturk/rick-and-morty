import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './components/Loading/LoadingSlice';

const store = configureStore({
  reducer: {
    loading: loadingReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
