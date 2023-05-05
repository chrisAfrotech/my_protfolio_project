import React from 'react'
import Typed from 'react-typed';

const Header = () => {
  return (
    <div>
      <div className='header-wrapper'>
        <div className='main-info'>
            <h1>HI! I'M TCHIAGUIA CHRISTOPHE</h1>
            <Typed
                className='typed-text'
                strings={["software_Developer", "UI/UX_Designer", "Africa_lover" ,"Startup_passionate"]}
                typeSpeed={40}
                backSpeed={60}
                loop
            />
            <a href='#' className='btn-main-offer'>CONTACT ME</a>
        </div>
      </div>

    </div>
  )
}

export default Header
