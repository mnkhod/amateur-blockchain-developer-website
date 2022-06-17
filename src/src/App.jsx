import { useState } from 'react'
import logo from './logo.svg'
import Logo from '../assets/logo.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex justify-between px-24 items-center py-4 w-full border-b-4 border-black">
        <img src={Logo} alt="logo" className="w-auto h-24" />
        <div className="flex gap-4">
          <button type="button" class="nes-btn h-12 is-primary">Staking</button>
          <button type="button" class="nes-btn h-12 is-warning">Exchange</button>
        </div>
      </div>

      <div className="grid place-content-center grow">
        <div className="nes-container with-title is-centered is-rounded">
          <p class="title">Introduction</p>

          <div className="my-1 flex flex-col">
            <h2 className="uppercase text-4xl nes-balloon from-left">my blockchain journey</h2>

            <div className="my-5"></div>

            <div className="nes-balloon from-right">
              <div className="flex gap-8 justify-center">
                <a href="https://twitter.com/0xMnkhod" class="nes-icon twitter is-large"></a>
                <a href="https://www.instagram.com/mnkh_od/" class="nes-icon instagram is-large"></a>
                <a href="https://www.youtube.com/channel/UCVh8QoelEyRex93VecYjG1A" class="nes-icon youtube is-large"></a>
                <a href="https://github.com/mnkhod" class="nes-icon github is-large"></a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
