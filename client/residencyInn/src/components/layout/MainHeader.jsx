import React from 'react'

const MainHeader = () => {
  return (
    <header className='header-banner'>
      <div className='overlay'></div>
      <div className='animated-texts overlay-content'>
        <h1>
            Welcome to <span className='hotel-color'>ResidencyInn</span>
        </h1>
        <h4 className='my'>Experience the Best Hospitality in Town</h4>
      </div>
    </header>
  )
}

export default MainHeader