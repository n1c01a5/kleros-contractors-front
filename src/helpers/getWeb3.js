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
    const web3 = window.web3

    web3 && web3.currentProvider
      ? new Web3(window.web3.currentProvider)
      : new Web3(new Web3.providers.HttpProvider(process.env.ETHEREUM_PROVIDER))

    _.isUndefined(web3.currentProvider)
      ? resolve(web3))
      : reject(new Error({ERRORS.WEB3_NOT_RESOLVED}))
  }
})
