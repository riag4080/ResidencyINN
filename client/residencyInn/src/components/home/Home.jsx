import React from 'react'
import Parallax from '../common/Parallax'
import HotelService from '../common/HotelService'
import MainHeader from '../layout/MainHeader'
import RoomCarousel from '../common/RoomCarousel'
import RoomSearch from '../common/RoomSearch'

const Home = () => {
  return (
    <section>
      <MainHeader/>

      <section className='container'>
        <RoomSearch/>
        <RoomCarousel/>
        <Parallax/>
        <RoomCarousel/>
        <HotelService/>
        <Parallax/>
        <RoomCarousel/>
      </section>
    </section>
  )
}

export default Home