import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import List from '../List'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Image from '../Image'
import logo from '../../assets/footerLogo.png'
import { FaLinkedinIn,FaInstagram,FaFacebookF} from "react-icons/fa";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='py-[53px] bg-header'>
        <Container>
            <Flex className={`flex-col md:flex-row`}>
                <div className="w-full md:w-1/3 grid grid-cols-3">
                    <ul className='pt-[2px] text-center md:text-start'>
                        <Heading text='MENU' className='font-bold text-primary text-base mb-[15px]'/>
                        <List text='Home' className='text-sm font-normal text-third' href='#'/>
                        <List text='Shop' className='text-sm font-normal text-third' href='#'/>
                        <List text='About' className='text-sm font-normal text-third' href='#'/>
                        <List text='Contact' className='text-sm font-normal text-third' href='#'/>
                        <List text='Journal' className='text-sm font-normal text-third' href='#'/>
                    </ul>
                    <ul className='pt-[2px] text-center md:text-start'>
                        <Heading text='SHOP' className='font-bold text-primary text-base mb-[15px]'/>
                        <List text='Category 1' className='text-sm font-normal text-third' href='#'/>
                        <List text='Category 2' className='text-sm font-normal text-third' href='#'/>
                        <List text='Category 3' className='text-sm font-normal text-third' href='#'/>
                        <List text='Category 4' className='text-sm font-normal text-third' href='#'/>
                        <List text='Category 5' className='text-sm font-normal text-third' href='#'/>
                    </ul>
                    <ul className='pt-[2px] '>
                        <Heading text='HELP' className='font-bold text-primary text-base mb-[15px]'/>
                        <List text='Privacy Policy' className='text-sm font-normal text-third' href='#'/>
                        <List text='Terms & Conditions' className='text-sm font-normal text-third' href='#'/>
                        <List text='Special E-shop' className='text-sm font-normal text-third' href='#'/>
                        <List text='Shipping' className='text-sm font-normal text-third' href='#'/>
                        <List text='Secure Payments' className='text-sm font-normal text-third' href='#'/>
                    </ul>
                </div>
                <div className="w-full md:w-1/3 flex justify-center">
                    <div className="my-4 md:my-0 text-center md:text-start">
                    <Heading text='(052) 611-5711' className='font-bold text-base text-primary'/>
                    <Heading text='company@domain.com' className='font-bold text-base text-primary mt-4'/>
                    <Paragraph text='575 Crescent Ave. Quakertown, PA 18951' className='text-third font-normal text-sm mt-[15px]'/>
                    </div>
                </div>
                <div className="w-full my-4 md:my-0 md:w-1/3 text-center">
                    <Image src={logo} className='md:-ms-[120px] inline'/>
                </div>
            </Flex>
            <Flex className='md:justify-between flex-col md:flex-row mt-4 md:mt-16'>
                <div className="flex gap-4 justify-center ">
                   <Link><FaFacebookF className='text-base'/></Link>
                   <Link><FaLinkedinIn className='text-base'/></Link>
                   <Link><FaInstagram className='text-base'/></Link>
                </div>
                <div className="copyright text-center mt-2 md:mt-0">
                    <Paragraph text='2020 Orebi Minimal eCommerce Figma Template by Adveits' className='text-third font-normal text-sm'/>
                </div>
            </Flex>
        </Container>
    </footer>
  )
}

export default Footer