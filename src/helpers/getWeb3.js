import _ from 'lodash'
import store from '../../store'
import Web3 from 'web3'
import { ERRORS } from '../constants/ERRORS'

export const WEB3_INITIALIZED = 'WEB3_INITIALIZED'

web3Initialized = results => {
  type: WEB3_INITIALIZED,
  payload: results
}

export const getWeb3 = async () => new Promise((resolve, reject) => {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
  window.addEventListener('load', function(dispatch) {
    let web3 = window.web3

    // use web3 if injected in browser
    if (_.isUndefined(web3)) {
      web3 = new Web3(web3.currentProvider)
    } else { //else set the provider from env
      web3 = new Web3(new Web3.providers.HttpProvider(
        process.env.REACT_APP_ETHEREUM_PROVIDER
      ))
    }

    if (_.isUndefined(web3.currentProvider)) {
      resolve(web3))
    } else {
      reject(new Error({error: ERRORS.WEB3_NOT_RESOLVED}))
    }
  }
})
