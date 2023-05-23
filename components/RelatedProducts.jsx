import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";
import product1 from "../public/banner-1.png";
import product2 from "../public/banner-2.png";
import product3 from "../public/banner-3.png";
import product4 from "../public/banner-4.png";
import product5 from "../public/banner-5.png";
import product6 from "../public/banner-6.png";

const RelatedProducts = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
      <div className="text-2xl font-bold mb-5">You Might Also Like</div>
      <Carousel 
      responsive={responsive}
      containerClass="-mx-10[px]"
      itemClass="px-[10px]"
      >
        <ProductCard img={product1} name="Django Course" />
        <ProductCard img={product2} name="Django Flask" />
        <ProductCard img={product3} name="React Course" />
        <ProductCard img={product4} name="Angular Course" />
        <ProductCard img={product5} name="Node.js and Express.js Course" />
        <ProductCard img={product6} name="Next.js Course" />
      </Carousel>
    </div>
  );
};

export default RelatedProducts;
