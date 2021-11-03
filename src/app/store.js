import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, } from 'redux';
import saga from '../saga'
const sagaMiddleware = createSagaMiddleware();

  applyMiddleware(sagaMiddleware)
  const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export const store = configureStore({
  reducer: {
    user: userReducer,
    
  },
  middleware
});

sagaMiddleware.run(saga);
