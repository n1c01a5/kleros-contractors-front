import { combineReducers } from 'redux'
import web3 from './web3'
import contracts from '../duxs/contracts'

const rootReducer = combineReducers({
  web3,
  contracts
})

export default rootReducer
