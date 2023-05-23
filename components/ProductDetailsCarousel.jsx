import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from 'next/image';
import bannerImg1 from '../public/banner-1.png'

const ProductDetailsCarousel = () => {
  return (
    <div className='text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]'>
        <Carousel
        
        infiniteLoop={true} 
        showIndicators={false} 
        showStatus={false}
        thumbWidth={60}
        className='productCarousel'
        >
            <Image className="" src={bannerImg1} alt="Course image detail" width="410" height="231"/>
        </Carousel>
    </div>
  )
}

export default ProductDetailsCarousel