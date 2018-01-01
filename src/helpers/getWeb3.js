import Web3 from 'web3'
import { ERRORS } from '../constants/ERRORS'

export const getWeb3 = async () => new Promise((resolve, reject) => {
  let web3

  // use web3 if injected in browser
  if (typeof window.web3 !== 'undefined') {
    web3 = new Web3(window.web3.currentProvider)
  } else { //else set the provider from env
    web3 = new Web3(new Web3.providers.HttpProvider(
      process.env.REACT_APP_ETHEREUM_PROVIDER
    ))
  }

  if (web3.currentProvider !== undefined) {
    resolve(web3)
  } else {
    // use constant for error message
    reject(new Error({error: ERRORS.WEB3_NOT_RESOLVED}))
  }
})
