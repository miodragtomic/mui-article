import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from "./services/rootReducer";
import { thunk, ThunkMiddleware} from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

export const store = createStore<StoreType, StoreActions>(
  rootReducer, 
  composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<StoreType, StoreActions>)
  )
);

export type StoreDispatch = typeof store.dispatch;

export type StoreType = ReturnType<typeof rootReducer>;
export type StoreActions = (Parameters<typeof rootReducer>[1]);