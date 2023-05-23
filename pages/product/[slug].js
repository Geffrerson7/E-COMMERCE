import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
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
            <div className="text-[34px] font-semibold mb-2">Django Course</div>
            {/* Product subtitle */}
            <div className="text-lg fotn-semibold mb-5">Bootcamp</div>
            {/* Product price */}
            <div className="text-lg font-semibold">$ 20.00</div>
            <div className="text-md fotn-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all aplicables duties)`}
            </div>
            {/* ADD TO CARD BUTTON START */}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Add to Cart
            </button>
            {/* ADD TO CARD BUTTON END */}

            {/* WHISTLIST BUTTON START */}
            <button
              className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center
            justify-center gap-2 hover:opacity-75 mb-10
            "
            >
              Whistlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/* WHISTLIST BUTTON END */}

            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="text-md mb-5">
                The Django course is designed to provide students with a
                comprehensive understanding of web development using the Django
                framework. Django is a high-level Python web framework that
                enables rapid development of secure and scalable web
                applications. In this course, students will learn the
                fundamental concepts of Django and gain hands-on experience in
                building dynamic web applications. Starting with the basics of
                setting up a Django project, students will explore the
                Model-View-Controller (MVC) architectural pattern and understand
                how Django implements it. They will learn to create models to
                define the application's data structure, build views to handle
                user requests, and design templates for presenting dynamic
                content. Throughout the course, students will dive deep into
                Django's powerful features, such as URL routing, forms,
                authentication, and database integration. They will understand
                how to leverage Django's built-in functionality and extend it
                using third-party libraries to add advanced features to their
                applications. Topics such as handling user authentication,
                managing sessions, and implementing RESTful APIs will also be
                covered. By the end of the course, students will have developed
                a complete web application using Django, showcasing their
                proficiency in building scalable and interactive websites. They
                will have the skills to design database models, create
                user-friendly interfaces, and deploy their applications to
                production servers. Whether you are a beginner or an experienced
                web developer looking to enhance your skills, this Django Web
                Development course provides a solid foundation for building
                robust web applications. Join us and unlock the power of Django
                to bring your web development projects to life.
              </div>
            </div>
          </div>
          {/* right column end */}
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
