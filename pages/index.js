import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import product1 from "../public/banner-1.png"
import product2 from "../public/banner-2.png"
import product3 from "../public/banner-3.png"
import product4 from "../public/banner-4.png"
import product5 from "../public/banner-5.png"
import product6 from "../public/banner-6.png"


export default function Home() {
  return (
    <main>
      <HeroBanner />
      <Wrapper>
        {/* heading and paragraph start */}
        <div className="text-center max-w-[800px] mx-auto  my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Committed to your learning in web development
          </div>
          <div className="text-md md:text-xl">
            These web development courses will help you learn effectively and
            acquire strong skills in key areas such as web design, frontend and
            backend programming, database management, and much more. With
            updated and practical content, you will be able to gain the
            necessary knowledge to develop functional and attractive websites,
            as well as robust web applications. Our focus on practical learning
            and real-world projects will allow you to gain hands-on experience
            while building your portfolio. We are committed to your learning
            success and will provide you with the support and resources needed
            to achieve your goals in the field of web development. Start your
            learning journey today with our web development courses!
          </div>
        </div>
        {/* heading and paragraph end */}

        {/* products grid start */}
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          <ProductCard img={product1} name="Django Course"/>
          <ProductCard img={product2} name="Django Flask"/>
          <ProductCard img={product3} name="React Course"/>
          <ProductCard img={product4} name="Angular Course"/>
          <ProductCard img={product5} name="Node.js and Express.js Course"/>
          <ProductCard img={product6} name="Next.js Course"/>
        </div>
        {/* products grid end */}
      </Wrapper>
    </main>
  );
}
