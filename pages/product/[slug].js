import React from "react";
import { IdMdHeartEmpty } from "react-icons/io";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          {/* left column end */}

          {/* right column start */}
          <div className="flex-[1] py-3">
            {/* Product title */}
            <div className="text-[34px] font-semibold mb-2">
                Django Course
            </div>
            {/* Product subtitle */}
            <div className="text-lg fotn-semibold mb-5">
                Bootcamp
            </div>
            {/* Product price */}
            <div className="text-lg font-semibold">
                $ 20.00
            </div>
            <div className="text-md fotn-medium text-black/[0.5]">
                incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
                {`(Also includes all aplicables duties)`}
            </div>
          </div>
          {/* right column end */}
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
