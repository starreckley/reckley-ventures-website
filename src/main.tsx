import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles.css'

const metricoolScript = document.createElement('script')
metricoolScript.type = 'text/javascript'
metricoolScript.src = 'https://tracker.metricool.com/resources/be.js'
metricoolScript.onload = () => {
  const tracker = (window as Window & { beTracker?: { t: (options: { hash: string }) => void } }).beTracker
  tracker?.t({ hash: '8d9f50f8b2d9334325867165e592dc11' })
}
document.head.appendChild(metricoolScript)

createRoot(document.getElementById('root')!).render(<StrictMode><BrowserRouter><App /></BrowserRouter></StrictMode>)
