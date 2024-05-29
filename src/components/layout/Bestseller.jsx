import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import Product from '../Product'
import p1 from '../../assets/bp1.png'
import p2 from '../../assets/bp2.png'
import p3 from '../../assets/bp3.png'
import p4 from '../../assets/bp4.png'

const Bestseller = () => {
  return (
    <section className=' mb-[80px] md:mb-[118px]'>
        <Container>
            <Heading text='Our Bestsellers' className="text-primary text-[39px] font-semibold mb-12"/>
            <Flex className='flex-wrap lg:flex-nowrap gap-8 justify-center lg:gap-9 xl:gap-10'>
              <div className="w-full sm:w-[45%] lg:w-1/4">
                <Product src={p1} batch='New' title='Basic Crew Neck Tee' price='$44.00' color='Black'/>
              </div>
              <div className="w-full sm:w-[45%] lg:w-1/4">
                <Product src={p2} batch='New' title='Basic Crew Neck Tee' price='$44.00' color='Black'/>
              </div>
              <div className="w-full sm:w-[45%] lg:w-1/4">
                <Product src={p3} batch='New' title='Basic Crew Neck Tee' price='$44.00' color='Black'/>
              </div>
              <div className="w-full sm:w-[45%] lg:w-1/4">
                <Product src={p4} batch='New' title='Basic Crew Neck Tee' price='$44.00' color='Black'/>
              </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Bestseller