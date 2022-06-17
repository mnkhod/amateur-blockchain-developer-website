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

      <div className="grow flex justify-center items-center my-12">
        <div className="w-7/12">
          <div className="nes-container with-title is-centered">
            <p className="title">Services & Utility</p>

            <div className="flex justify-around gap-4">

              <div className="border-4 border-black w-3/12 flex flex-col">
                <div class="bg-green-400 text-black py-4 grid place-content-center border-b-4 border-black h-16">
                  <p className="m-0">MNK Token</p>
                </div>

                <div className="grow py-3 px-4 grid place-content-center">
                  <p className="m-0 text-xs">Token that will allow a developer to access many services & utility</p>
                </div>

                <div className="py-4 px-1">
                  <button type="button" className="nes-btn is-success text-xs">Learn More</button>
                </div>
              </div>

              <div className="border-4 border-black w-3/12 flex flex-col">
                <div class="bg-yellow-400 text-black py-4 grid place-content-center border-b-4 border-black h-16">
                  <p className="m-0">Staking</p>
                </div>

                <div className="grow py-3 px-4 grid place-content-center">
                  <p className="m-0 text-xs">Earn more MNK token by staking</p>
                </div>

                <div className="py-4 px-1">
                  <button type="button" className="nes-btn is-success text-xs">Learn More</button>
                </div>

              </div>

              <div className="border-4 border-black w-3/12 flex flex-col">
                <div class="bg-cyan-400 text-black py-4 grid place-content-center border-b-4 border-black h-16">
                  <p className="m-0">Exchange</p>
                </div>

                <div className="grow py-3 px-4 grid place-content-center">
                  <p className="m-0 text-xs">Gateway to getting MNK Tokens</p>
                </div>

                <div className="py-4 px-1">
                  <button type="button" className="nes-btn is-success text-xs">Learn More</button>
                </div>

              </div>

              <div className="border-4 border-black w-3/12 flex flex-col">
                <div class="bg-cyan-400 text-black py-4 grid place-content-center border-b-4 border-black h-16">
                  <p className="m-0 text-xs">Project Market</p>
                </div>

                <div className="grow py-3 px-4 grid place-content-center">
                  <p className="m-0 text-xs">Marketplace for web 3.0 projects</p>
                </div>

                <div className="py-4 px-1">
                  <button type="button" className="nes-btn text-xs">Coming Soon</button>
                </div>

              </div>

            </div>

          </div>

          <div className="my-12"></div>

          <div className="nes-container with-title is-centered is-rounded">
            <p className="title">Introduction</p>

            <div className="my-1 flex flex-col">
              <h2 className="uppercase text-4xl nes-balloon from-left">my blockchain journey</h2>

              <div className="my-5"></div>

              <div className="nes-balloon from-right">
                <div className="flex gap-8 justify-center">
                  <a href="https://twitter.com/0xMnkhod" class="nes-icon twitter is-large"></a>
                  <a href="https://www.instagram.com/mnkh_od/" class="nes-icon instagram is-large"></a>
                  <a href="https://www.youtube.com/channel/UCVh8QoelEyRex93VecYjG1A" className="nes-icon youtube is-large"></a>
                  <a href="https://github.com/mnkhod" className="nes-icon github is-large"></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default App
