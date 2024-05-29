import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import Input from '../components/Input'
import { FaSearch } from "react-icons/fa";
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='pt-[81px] pb-[140px]'>
        <Container>
            <div className="w-[655px]">
                <Heading className='text-[200px] font-bold text-primary ' text='404'/>
                <Paragraph text="The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?" className='font-normal text-third text-base leading-[30px] mb-[50px]'/>
                <div className='relative mb-[60px]'>
                <Input inputph='Type to search' inputype='text' className='border-2  py-[21px] ps-[21px] border-[#F0F0F0]'/>
                    <FaSearch className='absolute top-1/2 -translate-y-1/2 right-7'/>
                </div>
                <Link to='/'><Button className='py-4 ps-12 pe-14' text='Back to Home'/></Link>
            </div>
        </Container>
    </section>
  )
}

export default Error