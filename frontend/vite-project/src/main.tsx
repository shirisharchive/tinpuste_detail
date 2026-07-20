import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterConfig } from './config/routing.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterConfig />
  </StrictMode>,
)