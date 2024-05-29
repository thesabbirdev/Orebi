import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Breadcrumb from '../components/Breadcrumb'
import Paragraph from '../components/Paragraph'
import Input from '../components/Input'
import Subheading from '../components/Subheading'

function My_Acoount() {
  return (
    <section className='mt-[124px] mb-[140px]'>
        <Container>
            <Heading text='Login' className='text-5xl font-bold text-primary'/>
            <Breadcrumb/>
            <div className="w-[1193px] grid grid-cols-4 gap-10">
                
                <div className="border-b-2 pb-[30px] border-[#F0F0F0]"> <Subheading text='Dashboard' className='text-base'/></div>
                <div className="col-span-3"><Paragraph text='Hello admin (not admin? Log out)' className='text-base text-primary font-regular'/></div>

                <div className="border-b-2 pb-[30px] border-[#F0F0F0]"> <Subheading text='Others' className='text-base text-third'/></div>
                <div className="col-span-3"><Paragraph text='From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.' className='text-base text-primary font-regular'/></div>

                <div className="border-b-2 pb-[30px] border-[#F0F0F0]"> <Subheading text='Downloads' className='text-base text-third'/></div>
                <div className="col-span-3"></div>

                <div className="border-b-2 pb-[30px] border-[#F0F0F0]"> <Subheading text='Addresses' className='text-base text-third'/></div>
                <div className="col-span-3"></div>

                <div className="border-b-2 pb-[30px] border-[#F0F0F0]"> <Subheading text='Account details' className='text-base text-third'/></div>
                <div className="col-span-3"></div>

                <div className="border-b-2 pb-[30px] border-[#F0F0F0]"> <Subheading text='Logout' className='text-base text-third'/></div>
                <div className="col-span-3"></div>

            </div>
        </Container>
    </section> 
  )
}

export default My_Acoount