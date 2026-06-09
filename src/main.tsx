import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Maintenance from './components/Maintenance.tsx'

// Set to `false` and redeploy to bring the live site back online.
const MAINTENANCE_MODE = true

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {MAINTENANCE_MODE ? <Maintenance /> : <App />}
  </StrictMode>,
)
