import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Image from '../components/Image'
import brand from '../assets/brand.png'
import store from '../assets/store.png'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import Breadcrumb from '../components/Breadcrumb'
import { useSelector } from 'react-redux'
import Flex from '../components/Flex'

const About = () => {
    let data = useSelector((state)=> state.breadcrumb.currentname)
    let breadC = window.location.pathname.replace("/", "").replace("-", " ")
  return (
    <section className='pt-[124px] pb-[131px]'>
        <Container>
        <Flex>
            <h1>{data}</h1>
            <div className="px-2">&gt;</div>
            <h1 className='first-letter:uppercase'>{breadC}</h1>
          </Flex>
        <Heading text='About' className='text-5xl font-bold text-primary '/>
        <Breadcrumb/>
        <div className="grid grid-cols-2 gap-1 mb-28">
            <div className="relative">
                <Link to=''><Image src={brand}/></Link>
                <Button text='Our Brands' className='text-base px-[97px] py-7 absolute left-1/2 -translate-x-1/2 bottom-[62px]'/>
            </div>
            <div className="relative">
                <Link to=''><Image src={store}/></Link>
                <Button text='Our Stores' className='text-base px-[97px] py-7 absolute left-1/2 -translate-x-1/2 bottom-[62px]'/>
            </div>
        </div>
        <Paragraph text='Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.' className='text-[39px] font-normal leading-[52px] mb-[118px]'/>

        <div className="grid grid-cols-3 gap-[41px]">
            <div className="cntnt">
                <Heading text='Our Vision' className='text-[25px] font-bold leading-9 mb-[11px]'/>
                <Paragraph text=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an printer took a galley of type and scrambled it to make a type specimen book." className='text-third font-normal text-base'/>
            </div>
            <div className="cntnt">
                <Heading text='Our Story' className='text-[25px] font-bold leading-9 mb-[11px]'/>
                <Paragraph text=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an printer took a galley of type and scrambled it to make a type specimen book." className='text-third font-normal text-base'/>
            </div>
            <div className="cntnt">
                <Heading text='Our Brands' className='text-[25px] font-bold leading-9 mb-[11px]'/>
                <Paragraph text=" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an printer took a galley of type and scrambled it to make a type specimen book." className='text-third font-normal text-base'/>
            </div>

        </div>
        </Container>
    </section>
  )
}

export default About