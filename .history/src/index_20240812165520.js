import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
// import './assets/css/main.css'
import './App.css'
import './styles/styles.scss'
import './assets/styles/styles.scss'

import App from './App'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
