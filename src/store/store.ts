import { type Reducer, configureStore } from '@reduxjs/toolkit';

import firstReducer, { ColorState } from './slices/firstSlice';
import secReducer from './slices/secSlice';

export interface RootReducer {
  color1: Reducer<ColorState>;
  color2: Reducer<ColorState>;
}

export const rootReducer: RootReducer = {
  color1: firstReducer,
  color2: secReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
