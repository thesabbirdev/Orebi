import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import Product from '../Product'
import p1 from '../../assets/np1.png'
import p2 from '../../assets/np2.png'
import p3 from '../../assets/np3.png'
import p4 from '../../assets/np4.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from '../Icons/NextArrow'
import PrevArrow from '../Icons/PrevArrow'

const New = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className='mb-[118px] new'>
        <Container>
            <Heading text='New Arrivals' className="text-primary text-[39px] font-semibold mb-12"/>
            
            <Slider {...settings} >

              <div className="!w-[100%]">
                <Product src={p1} batch='New' title='Basic Crew Neck Tee' price='$44.00' color='Black'/>
              </div>
              <div className="!w-[100%]">
                <Product src={p2} batch='New' title='Basic Crew Neck Tee' price='$44.00' color='Black'/>
              </div>
              <div className="!w-[100%]">
                <Product src={p3} batch='New' title='Basic Crew Neck Tee' price='$44.00' color='Black'/>
              </div>
              <div className="!w-[100%]">
                <Product src={p4} batch='New' title='Basic Crew Neck Tee' price='$44.00' color='Black'/>
              </div>
            </Slider>
            
        </Container>
    </section>
  )
}

export default New