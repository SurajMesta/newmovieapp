import React from 'react'
import rootreducer from '../rootreducer/rootreducer'
import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'

//logger to represent the log in proper way
const middle=[logger]

const store=createStore(rootreducer,applyMiddleware(...middle))

export default store