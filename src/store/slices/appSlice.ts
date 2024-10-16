import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  snackbar: {
    open: boolean;
    message: string;
    severity: 'success' | 'error' | 'warning' | 'info';
  };
  loader: boolean;
}

const initialState: AppState = {
  snackbar: {
    open: false,
    message: '',
    severity: 'info',
  },
  loader: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    showSnackbar: (
      state,
      action: PayloadAction<{ message: string; severity: 'success' | 'error' | 'warning' | 'info' }>
    ) => {
      state.snackbar = {
        open: true,
        message: action.payload.message,
        severity: action.payload.severity,
      };
    },
    hideSnackbar: (state) => {
      state.snackbar = { ...state.snackbar, open: false };
    },
    showLoader: (state) => {
      state.loader = true;
    },
    hideLoader: (state) => {
      state.loader = false;
    },
  },
});

export const { showSnackbar, hideSnackbar, showLoader, hideLoader } = appSlice.actions;

export default appSlice.reducer;
