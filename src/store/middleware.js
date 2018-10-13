//A middleware is a function that the dispatched 
//must pass through every time. 
//It is used to extend the functionality of Redux.
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
const isProd = process.env.NODE_ENV === 'production';
const middlewareList = [];
middlewareList.push(thunk);
if(!isProd) {
    middlewareList.push(createLogger());
}
const middleware = compose(applyMiddleware(...middlewareList));
export default middleware;