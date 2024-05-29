import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import Breadcrumb from '../components/Breadcrumb'
import { useSelector } from 'react-redux'
function Journal() {
  let data = useSelector((state) => state.breadcrumb.currentname )

  let breadC = window.location.pathname.replace("/","").replace("-"," ")
  return (
    <section className='pt-[124px] pb-[140px]'>
        <Container>
          <Flex>
            <h1>{data}</h1>
            <div className="px-2">&gt;</div>
            <h1 className='first-letter:uppercase'>{breadC}</h1>
          </Flex>
        <Heading text='Journal' className='text-5xl font-bold text-primary'/>
        <Breadcrumb/>
        </Container>
    </section>
  )
}

export default Journal