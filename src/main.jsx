import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { LanguageProviderWrapper } from './contexts/language.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <LanguageProviderWrapper>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </LanguageProviderWrapper>
  </Router>
)
