import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import DaisyNav from './components/DaisyNav/DaisyNav'
import { LineChart } from 'recharts'
function App() {
  return (
    <div>
        <DaisyNav></DaisyNav>
        <NavBar></NavBar>
        <LineChart></LineChart>
    </div>
  )
}
export default App
