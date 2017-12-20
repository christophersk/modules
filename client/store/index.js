import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const logger = createLogger({ collapsed: true });

let composeEnhancers;

if (__DEVELOPMENT__) {
  composeEnhancers = composeWithDevTools(applyMiddleware(thunk, logger));
} else {
  composeEnhancers = applyMiddleware(thunk);
}

export default createStore(
  rootReducer,
  composeEnhancers,
);
