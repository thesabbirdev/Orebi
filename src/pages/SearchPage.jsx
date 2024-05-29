import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Breadcrumb from '../components/Breadcrumb'
import { useLocation } from 'react-router-dom'
import Product from '../components/Product'
import Subheading from '../components/Subheading'

function SearchPage() {
    let locate = useLocation()
    let data = (locate.state.key);
    let word = (locate.state.search);
    // console.log(word);
  return (
    <div className='py-[128px]'>
        <Container>
        <Heading text="Searching Results..." className="text-5xl font-bold text-primary" />
        <Breadcrumb />

        <Subheading text={`Showing Results of ${word}`} className={`my-4`}/>
        <div className="grid grid-cols-4 gap-10">
            {data.map((item)=>(
                <Product key={item.id}
                title={item.title}
                price={`$${item.price}`}
                color={item.brand}
                batch={`-${item.discountPercentage}%`}
                src={item.thumbnail}/>
            ))}
        </div>
        </Container>
    </div>
  )
}

export default SearchPage