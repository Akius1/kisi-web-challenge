import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
// import { login } from './reducers/login.reducers';
import {user, groups, doors, locks} from './reducers'

const reducer = combineReducers({
  user_reducer: user, 
  groups_reducer: groups,
  door_reducer:  doors,
  locks_reducer: locks,
});

const middleware = [thunk];

const persistConfig = {
  key: 'kisi',
  blacklist: ['form'],
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

let store;

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
);
store = createStore(persistedReducer, enhancer);

const persistor = persistStore(store);

export { store, persistor };
