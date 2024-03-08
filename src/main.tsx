import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import AppRouter from '@routes/index.routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
)
