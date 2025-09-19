import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import '../src/shared/styles/_typography.scss';
import '../src/shared/styles/_layout.scss';
import '../src/shared/styles/_inputs.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
