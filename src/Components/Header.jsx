import React from 'react'
import { LOGO } from '../Utils/constant'

const Header = () => {
  return (
    <div>
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
            <img className='w-44' src={LOGO}/>
        </div>
    </div>
  )
}

export default Header


