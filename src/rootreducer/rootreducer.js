import {combineReducers} from 'redux'
import firstreducer from './firstreducer'

//rootreducer with combining of reducers
const rootreducer=combineReducers({first:firstreducer})

export default rootreducer