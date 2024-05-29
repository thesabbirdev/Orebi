import React from 'react'
import Banner from "../components/layout/Banner"
import Bestseller from "../components/layout/Bestseller"
import New from "../components/layout/New"
import Sale from "../components/layout/Sale"
import Specialoffer from "../components/layout/Specialoffer"

const Home = () => {
  return (
    <>
      <Banner/>
      <Sale/>
      <New/>
      <Bestseller/>
      <Specialoffer/>
    </>
  )
}

export default Home