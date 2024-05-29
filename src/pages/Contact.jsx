import React from 'react'
import Heading from '../components/Heading'
import Container from '../components/Container'
import Input from '../components/Input'
import Button from '../components/Button'
import Breadcrumb from '../components/Breadcrumb'
import Map from '../components/layout/Map'
import { useSelector } from 'react-redux'
import Flex from '../components/Flex'

const Contact = () => {
  let data = useSelector((state)=> state.breadcrumb.currentname)
  let breadC = window.location.pathname.replace("/", "").replace("-", " ")
  return (
    <section className='pt-32 pb-[140px]'>
        <Container>
          <Flex>
            <h1>{data}</h1>
            <div className="px-2">&gt;</div>
            <h1 className='first-letter:uppercase'>{breadC}</h1>
          </Flex>
        <Heading text='Contact' className='text-5xl font-bold text-primary'/>
        <Breadcrumb/>
        <form action=""  className='w-1/2'>
            <Input inputype='text' labelname='Name' inputph='Your name here' className='mb-[23px]'/>
            <Input inputype='email' labelname='Email' inputph='Your email here' className='mb-[23px]'/>
            <label htmlFor="message" className='font-dmsans font-bold text-primary text-base block mb-[10px]'>Message</label>
            <textarea name="Message" id="" className='w-full focus:outline-none border-b-2 border-[#F0F0F0] placeholder:text-sm placeholder:text-secondary pb-[17px] mb-[30px]' placeholder='Your message here' rows="3"></textarea>

            <Button text='Post' className='mb-[140px] py-4 px-[85px]'/>
            
        </form>
        <Map/>
        </Container>
    </section>
  )
}

export default Contact