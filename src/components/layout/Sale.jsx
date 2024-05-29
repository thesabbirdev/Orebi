import React from 'react'
import Container from '../Container'
import Image from '../Image'
import phone from '../../assets/Ad_1.png'
import electronic from '../../assets/Ad_2.png'
import furniture from '../../assets/Ad_3.png'
import { Link } from 'react-router-dom'

const Sale = () => {
  return (
    <section className='mt-[50px] mb-[50px] md:mt-[140px] md:mb-[128px]'>
        <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <Link to='/shop'><Image src={phone} className="w-full"/></Link>
                <div className="grid grid-rows-2 gap-10">
                <Link to='/shop'><Image src={electronic} className="w-full"/></Link>
                <Link to='/shop'><Image src={furniture} className="w-full"/></Link>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Sale