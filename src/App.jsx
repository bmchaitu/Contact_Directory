import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Display from './Components/Display'
import { PhoneProvider } from './Components/PhoneContext'

function App() {
  

  return (
    <PhoneProvider>
      <Display/>
    </PhoneProvider>
  )
}

export default App
