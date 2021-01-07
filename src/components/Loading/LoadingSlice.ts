import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '../../store';

export type LoadingState = { isLoading: boolean };
export type LoadingSliceState = { loading: LoadingState };

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    isLoading: true,
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { startLoading, stopLoading } = loadingSlice.actions;

export const stopLoadingAsync: () => void = () => (dispatch: AppDispatch) => {
  setTimeout(() => {
    dispatch(stopLoading());
  }, 1000);
};

export default loadingSlice.reducer;
