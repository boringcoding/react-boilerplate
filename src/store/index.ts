import { applyMiddleware, combineReducers, createStore } from 'redux'
import { allReducers } from './reducers'
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from '../saga'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers(allReducers)

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
