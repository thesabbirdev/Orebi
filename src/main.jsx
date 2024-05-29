import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store.js'
import { Provider } from 'react-redux'
import { ContextApi } from './components/ContextApi.jsx'
import 'react-toastify/dist/ReactToastify.css'
import firebaseConfig from './firebase.config.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ContextApi>
    <App />
    </ContextApi>
  </Provider>,
)
