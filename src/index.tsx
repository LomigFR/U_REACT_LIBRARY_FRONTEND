import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

/**
 * Public key here
 */
const stripePromise = loadStripe(
  'pk_test_51Np6YoLYd4VXRGuQ9giQSn7zwVXZFAjHcKEnThgfqkyjg7tqNMvdtDmPK1bdAt3Ym4krpjNsBdfeFuSfJEUG5cp4005QG3fwUd'
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </BrowserRouter>
)
