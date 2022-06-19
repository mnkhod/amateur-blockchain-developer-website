import { useState } from 'react'
import logo from './logo.svg'
import Logo from '../assets/logo.png';

import Services from './components/home/Services.jsx';
import Goal from './components/home/Goal.jsx';
import Socials from './components/home/Socials.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col w-screen min-h-screen overflow-x-hidden">
      <div className="flex flex-col items-center justify-between w-full px-0 py-4 border-b-4 border-black md:flex-row md:px-24">
        <img src={Logo} alt="logo" className="w-auto h-32 md:h-24" />
        <div className="flex flex-col md:flex-row gap-4">
          <button type="button" className="h-12 nes-btn is-primary">Staking</button>
          <a href="https://exchange.mnkhod.xyz/" className="h-12 nes-btn is-warning">Exchange</a>
        </div>
      </div>

      <div className="flex items-center justify-center my-12 grow">
        <div className="flex flex-col p-0 m-0 w-12/12 md:w-7/12 gap-y-20">
          <Goal />
          <Services />
          <Socials />
        </div>

      </div>

    </div>
  )
}

export default App
