import {createStore,applyMiddleware} from 'redux';
import { logger } from 'redux-logger';
import { addUser } from "./reducer/addUser";

export const store = createStore(addUser,applyMiddleware(logger))