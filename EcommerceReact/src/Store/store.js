import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import settingReducer from './SettingSlice'; // ← تأكدي من اسم الملف

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    setting: settingReducer, // ← هذا الاسم هو اللي بنستخدمه في useSelector
  },
});
