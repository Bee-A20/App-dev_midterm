import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import auth from './auth';

export const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  blacklist: [],
};

export const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['auth'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, auth),
});

export default rootReducer;
