import { useState } from 'react'
import logo from './logo.svg'
import Logo from '../assets/logo.png';

import Services from './components/home/Services.jsx';
import Goal from './components/home/Goal.jsx';
import Socials from './components/home/Socials.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="overflow-x-hidden w-screen min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row justify-between px-0 md:px-24 items-center py-4 w-full border-b-4 border-black">
        <img src={Logo} alt="logo" className="w-auto h-32 md:h-24" />
        <div className="flex flex-col md:flex-row gap-4">
          <button type="button" class="nes-btn h-12 is-primary">Staking</button>
          <button type="button" class="nes-btn h-12 is-warning">Exchange</button>
        </div>
      </div>

      <div className="grow flex justify-center items-center my-12">
        <div className="w-12/12 md:w-7/12 p-0 m-0 flex flex-col gap-y-20">
          <Goal />
          <Services />
          <Socials />
        </div>

      </div>

    </div>
  )
}

export default App
