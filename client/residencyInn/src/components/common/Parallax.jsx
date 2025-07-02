import React from 'react'
import { Container } from 'react-bootstrap'

const Parallax = () => {
  return (
    <div className='parallax mb-5'>
      <Container className='text-center px-5 py-5 justify-content-center'>
        <div className='animated-text bounceIn'>
          <h1>
            Unwind in Style at <span className='hotel-color'>ResidencyInn</span>
          </h1>
          <h3>Where Great Service Isn’t a Perk — It’s a Promise</h3>
        </div>
      </Container>
    </div>
  )
}

export default Parallax