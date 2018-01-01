import React from 'react'
import ReactDOM from 'react-dom'
import { generateStore } from './bootstrap/generateStore'
import App from './bootstrap/App'
import registerServiceWorker from './bootstrap/registerServiceWorker'
import './index.css'

const store = generateStore()

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
)

registerServiceWorker()
