// src/redux/settingSlice.js
import { createSlice } from '@reduxjs/toolkit';

const settingSlice = createSlice({
  name: 'settings',
  initialState: {
    theme: 'light', // أو 'dark'
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = settingSlice.actions;
export default settingSlice.reducer;
