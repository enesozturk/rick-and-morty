import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './components/Loading/LoadingSlice';

export default configureStore({
  reducer: {
    loading: loadingReducer,
  },
});
