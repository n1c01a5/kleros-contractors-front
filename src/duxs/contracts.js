import 'babel-polyfill'
import Web3 from 'web3'
import { Kleros } from 'kleros-api'

export const web3 =
  window.web3 && window.web3.currentProvider
    ? new Web3(window.web3.currentProvider)
    : new Web3(new Web3.providers.HttpProvider(process.env.ETHEREUM_PROVIDER))
if (!web3.currentProvider) {
  throw new Error('No Web3.')
}

export default new Kleros(web3.currentProvider, 'https://kleros.in')

/**
 * @export - Converts a string in constant case to camel case. e.g. HELLO_WORLD => helloWorld.
 * @param {string} str - The string to convert.
 * @param {object} { capitalizeFirst = false }={} - An options object with sensible defaults.
 * @returns {string} - The converted string.
 */
export function constantToCamelCase(str, { capitalizeFirst = false } = {}) {
  const newStr = str
    .toLowerCase()
    .replace(/_[a-z]/g, match => match[1].toUpperCase())

  return capitalizeFirst ? newStr[0].toUpperCase() + newStr.slice(1) : newStr
}

/**
 * @export - Converts a string in camel case to title case. e.g. helloWorld => Hello World.
 * @param {string} str - The string to convert.
 * @returns {string} - The converted string.
 */
export function camelToTitleCase(str) {
  return str.replace(
    /(^[a-z])|([a-z][A-Z])|([A-Z][a-z])/g,
    (m, p1, p2, p3) =>
      p1 ? p1.toUpperCase() : p2 ? p2[0] + ' ' + p2[1] : ' ' + p3
  )
}

/**
 * @export default createReducer
 * @param {object} initialState - The initial state for the reducer.
 * @param {object} reducerMap - A map of action type string constants to functions that return a slice of state.
 * @returns {function} - A reducer function.
 */
const createReducer = (initialState, reducerMap) => {
  return (state = initialState, action) => {
    let newState =
      reducerMap && reducerMap[action.type]
        ? reducerMap[action.type](state, action)
        : state

    // Automatic loading plugin
    if (action.type.slice(0, 7) === 'CREATE_') {
      // Start loading
      const resource = constantToCamelCase(action.type.slice(7), {
        capitalizeFirst: true
      })
      newState = { ...newState, ['creating' + resource]: true }
    } else if (action.type.slice(0, 16) === 'RECEIVE_CREATED_') {
      // End loading
      const resource = constantToCamelCase(action.type.slice(16), {
        capitalizeFirst: true
      })
      newState = { ...newState, ['creating' + resource]: false }
    } else if (action.type.slice(0, 6) === 'FETCH_') {
      // Start loading
      const resource = constantToCamelCase(action.type.slice(6), {
        capitalizeFirst: true
      })
      newState = { ...newState, ['loading' + resource]: true }
    } else if (action.type.slice(0, 8) === 'RECEIVE_') {
      // End loading
      const resource = constantToCamelCase(action.type.slice(8), {
        capitalizeFirst: true
      })
      newState = { ...newState, ['loading' + resource]: false }
    }

    return newState
  }
}

// Actions
export const FETCH_CONTRACTS = 'FETCH_CONTRACTS'
const RECEIVE_CONTRACTS = 'RECEIVE_CONTRACTS'
export const FETCH_CONTRACT = 'FETCH_CONTRACT'
const RECEIVE_CONTRACT = 'RECEIVE_CONTRACT'
export const CREATE_CONTRACT = 'CREATE_CONTRACT'
const RECEIVE_CREATED_CONTRACT = 'RECEIVE_CREATED_CONTRACT'

// Reducer
const reduxContracts = createReducer(
  { contracts: [], detailedContracts: {} },
  {
    [RECEIVE_CONTRACTS]: (state, action) => ({
      ...state,
      contracts: action.payload.contracts
    }),
    [RECEIVE_CONTRACT]: (state, action) => ({
      ...state,
      detailedContracts: {
        ...state.detailedContracts,
        [action.payload.contract.address]: action.payload.contract
      }
    }),
    [RECEIVE_CREATED_CONTRACT]: (state, action) => ({
      ...state,
      contracts: [...state.contracts, action.payload.contract]
    })
  }
)

// Action Creators
export const fetchContracts = () => ({ type: FETCH_CONTRACTS })
export const receiveContracts = contracts => ({
  type: RECEIVE_CONTRACTS,
  payload: { contracts }
})
export const fetchContract = contractAddress => ({
  type: FETCH_CONTRACT,
  payload: { contractAddress }
})
export const receiveContract = contract => ({
  type: RECEIVE_CONTRACT,
  payload: { contract }
})
export const createContract = contract => ({
  type: CREATE_CONTRACT,
  payload: { contract }
})
export const receiveCreatedContract = contract => ({
  type: RECEIVE_CREATED_CONTRACT,
  payload: { contract }
})

// Selectors
