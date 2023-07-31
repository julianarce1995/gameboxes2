import { type Reducer, configureStore } from '@reduxjs/toolkit';

import firstReducer, { BlockState } from './slices/firstSlice';
import secReducer from './slices/secSlice';

export interface RootReducer {
  firstBlock: Reducer<BlockState>;
  secBlock: Reducer<BlockState>;
}

export const rootReducer: RootReducer = {
  firstBlock: firstReducer,
  secBlock: secReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
