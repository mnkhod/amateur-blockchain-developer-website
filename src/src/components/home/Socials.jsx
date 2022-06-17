import {} from 'react'

export default function Socials(){
  return (
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
  )
}
