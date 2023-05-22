import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <Wrapper>
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
      </Wrapper>
    </main>
  );
}
