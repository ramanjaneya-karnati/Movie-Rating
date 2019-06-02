import { combineReducers, compose, createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import redeemMiddleWare from '../middlewares'
import reducers from '../reducers'


const middleWares = [
  redeemMiddleWare,
];

if(process.env.NODE_ENV)
  middleWares.push(createLogger());

export default function configureStore(initialState) {
  return compose(applyMiddleware(...middleWares))(createStore)(combineReducers({...reducers}), initialState);
}