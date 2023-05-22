import React from "react";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import { useRouter } from "next/router";
import product1 from "../../public/banner-1.png"
import product2 from "../../public/banner-2.png"
import product3 from "../../public/banner-3.png"
import product4 from "../../public/banner-4.png"
import product5 from "../../public/banner-5.png"
import product6 from "../../public/banner-6.png"

const Category = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Web Development
          </div>
          <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
            <ProductCard img={product1} name="Django Course" />
            <ProductCard img={product2} name="Django Flask" />
            <ProductCard img={product3} name="React Course" />
            <ProductCard img={product4} name="Angular Course" />
            <ProductCard img={product5} name="Node.js and Express.js Course" />
            <ProductCard img={product6} name="Next.js Course" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;
