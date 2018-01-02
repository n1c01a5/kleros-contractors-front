import _ from 'lodash'
//import {generateStore} from '../bootstrap/generateStore'
import Web3 from 'web3'
import { ERRORS } from '../constants/ERRORS'

export const WEB3_INITIALIZED = 'WEB3_INITIALIZED'

const web3Initialized = payload => ({
  type: WEB3_INITIALIZED,
  payload
})

export const getWeb3 = async () => new Promise((resolve, reject) => {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
  window.addEventListener('load', dispatch => {
    const web3 = window.web3
    let localWeb3

    web3 && !_.isUndefined(web3.currentProvider)
      ? localWeb3 = new Web3(window.web3.currentProvider)
      : localWeb3 = new Web3(
          new Web3.providers.HttpProvider(process.env.ETHEREUM_PROVIDER)
        )

    !_.isUndefined(localWeb3.currentProvider)
      ? resolve(store.dispatch(web3Initialized({web3Instance: localWeb3})))
      : reject(new Error({'error': ERRORS.WEB3_NOT_RESOLVED}))
  })
})
