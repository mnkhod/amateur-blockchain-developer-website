import { useState } from 'react'
import logo from './logo.svg'
import Logo from '../assets/logo.png';

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

          <div className="nes-container with-title is-centered">
            <p className="title uppercase text-blue-500 font-bold">Goal</p>
            <div className="flex flex-col items-center gap-y-3">
              <h2 className="uppercase text-xs md:text-4xl">Share Value & Impact Lives With Smart Contracts</h2>
              <h2 className="uppercase text-gray-600 text-xs md:text-lg w-8/12">Platform is build to help developers transition from web 2.0 to web 3.0</h2>
              <h2 className="uppercase text-gray-600 text-xs w-4/12">amateur developer - mnkhod</h2>
            </div>
          </div>

          <div className="nes-container with-title is-centered">
            <p className="title uppercase text-orange-500 font-bold">Services</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-7 md:gap-12">

              <div className="border-4 border-black flex flex-col">
                <div class="bg-green-400 text-white py-4 grid place-content-center border-b-4 border-black h-16">
                  <p className="m-0">MNK Token</p>
                </div>

                <div className="grow py-3 px-1 md:px-4 grid place-content-center">
                  <p className="m-0 text-xs">Utility for every service</p>
                </div>

                <div className="py-4 px-1">
                  <button type="button" className="nes-btn is-success text-xs">Learn More</button>
                </div>
              </div>

              <div className="border-4 border-black flex flex-col">
                <div class="bg-yellow-400 text-white py-4 grid place-content-center border-b-4 border-black h-16">
                  <p className="m-0">Membership Staking</p>
                </div>

                <div className="grow py-3 px-1 md:px-4 grid place-content-center">
                  <p className="m-0 text-xs">Earn more MNK token by staking your membership NFT</p>
                </div>

                <div className="py-4 px-1">
                  <button type="button" className="nes-btn text-xs">Coming Soon</button>
                </div>

              </div>

              <div className="border-4 border-black flex flex-col">
                <div class="bg-cyan-400 text-white py-4 grid place-content-center border-b-4 border-black h-16">
                  <p className="m-0">Exchange</p>
                </div>

                <div className="grow py-3 px-1 md:px-4 grid place-content-center">
                  <p className="m-0 text-xs">Access to MNK Tokens at fixed price</p>
                </div>

                <div className="py-4 px-1">
                  <button type="button" className="nes-btn text-xs">Coming Soon</button>
                </div>

              </div>

              <div className="border-4 border-black flex flex-col">
                <div class="bg-red-500 text-white py-4 grid place-content-center border-b-4 border-black h-16">
                  <p className="m-0 text-xs px-2">MNK Project Market</p>
                </div>

                <div className="grow py-3 px-1 md:px-4 grid place-content-center">
                  <p className="m-0 text-xs">My Exlusive web 3.0 project prototypes</p>
                </div>

                <div className="py-4 px-1">
                  <button type="button" className="nes-btn text-xs">Coming Soon</button>
                </div>

              </div>

              <div className="border-4 border-black flex flex-col">
                <div class="bg-green-300 text-white py-4 grid place-content-center border-b-4 border-black h-16">
                  <p className="m-0 text-xs px-2">MNKx Staking</p>
                </div>

                <div className="grow py-3 px-1 md:px-4 grid place-content-center">
                  <p className="m-0 text-xs">Stake MNK tokens to gain governance MNKx tokens</p>
                </div>

                <div className="py-4 px-1">
                  <button type="button" className="nes-btn text-xs">Coming Soon</button>
                </div>

              </div>

              <div className="border-4 border-black flex flex-col">
                <div class="bg-fuchsia-300 text-white py-4 grid place-content-center border-b-4 border-black h-16">
                  <p className="m-0 text-xs px-2">Awesome Mongolian Blockchain Projects</p>
                </div>

                <div className="grow py-3 px-1 md:px-4 grid place-content-center">
                  <p className="m-0 text-xs">List your tools/projects for greater audience</p>
                </div>

                <div className="py-4 px-1">
                  <button type="button" className="nes-btn text-xs">Coming Soon</button>
                </div>

              </div>

              <div className="border-4 border-black flex flex-col">
                <div class="bg-rose-300 text-white py-4 grid place-content-center border-b-4 border-black h-16">
                  <p className="m-0 text-xs px-2">Fund Me Please</p>
                </div>

                <div className="grow py-3 px-1 md:px-4 grid place-content-center">
                  <p className="m-0 text-xs">Platform for developers to pitch their ideas & get funded from our treasury</p>
                </div>

                <div className="py-4 px-1">
                  <button type="button" className="nes-btn text-xs">Coming Soon</button>
                </div>
              </div>

              <div className="border-4 border-black flex flex-col">
                <div class="bg-purple-500 text-white py-4 grid place-content-center border-b-4 border-black h-16">
                  <p className="m-0 text-xs px-2">Amateur Blockchain Developers Forum</p>
                </div>

                <div className="grow py-3 px-1 md:px-4 grid place-content-center">
                  <p className="m-0 text-xs">Forum for discussions. Voice your ideas</p>
                </div>

                <div className="py-4 px-1">
                  <button type="button" className="nes-btn text-xs">Coming Soon</button>
                </div>
              </div>

              <div className="border-4 border-black flex flex-col">
                <div class="bg-orange-500 text-white py-4 grid place-content-center border-b-4 border-black h-16">
                  <p className="m-0 text-xs px-2">Amateur Blockchain Developers Snapshot</p>
                </div>

                <div className="grow py-3 px-1 md:px-4 grid place-content-center">
                  <p className="m-0 text-xs">Off-Chain Voting Platform.Use your MNKx governance tokens to voice your opinions</p>
                </div>

                <div className="py-4 px-1">
                  <button type="button" className="nes-btn text-xs">Coming Soon</button>
                </div>
              </div>

            </div>

          </div>

          <div className="nes-container with-title is-centered">
            <p className="title text-red-500 font-bold uppercase">socials</p>

            <div className="my-1 flex flex-col">
              <h2 className="uppercase text-xs md:text-4xl nes-balloon">my blockchain journey</h2>

              <div className="my-2"></div>

              <div className="md:nes-balloon md:from-right">
                <div className="flex gap-2 md:gap-8 justify-center">
                  <a href="https://twitter.com/0xMnkhod" className="nes-icon twitter is-medium"></a>
                  <a href="https://www.instagram.com/mnkh_od/" className="nes-icon instagram is-medium"></a>
                  <a href="https://www.youtube.com/channel/UCVh8QoelEyRex93VecYjG1A" className="nes-icon youtube is-medium"></a>
                  <a href="https://github.com/mnkhod" className="nes-icon github is-medium"></a>
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
