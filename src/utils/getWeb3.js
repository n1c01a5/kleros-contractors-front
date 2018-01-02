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
  let web3Instance

  !_.isUndefined(window.web3) && !_.isUndefined(web3.currentProvider)
    ? web3Instance = new Web3(window.web3.currentProvider)
    : web3Instance = new Web3(
        new Web3.providers.HttpProvider(process.env.ETHEREUM_PROVIDER)
      )

  !_.isUndefined(await web3Instance.currentProvider)
    ? resolve(store.dispatch(web3Initialized({web3Instance})))
    : reject(new Error({'error': ERRORS.WEB3_NOT_RESOLVED}))
})
