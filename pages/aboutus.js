/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Header from "../components/header";
import { IoLogoApple, IoLogoGooglePlaystore, IoWarning } from "react-icons/io5";
import Footer from "../components/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Globe from "./Globe";

const services = [
  {
    bg: "bg-white",
    title: "Insurance",
    desc: ["Insurers", "Re-insurers", "Brokers", "Digital Aggregators", "MGAs"],
  },
  {
    bg: "bg-[#CCD0D3]",
    title: "High Performance, ownership and Impact",
    desc: [
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    ],
  },
  {
    bg: "bg-white",
    title: "Meritocracy",
    desc: [
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    ],
  },
  {
    bg: "bg-[#CCD0D3]",
    title: "Play with Purpose",
    desc: [
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    ],
  },
  {
    bg: "bg-[#FFC565]",
    title: "Inovateand collabrate",
    desc: [
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    ],
  },
  {
    bg: "bg-[#CCD0D3]",
    title: "Inovateand collabrate",
    desc: [
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    ],
  },
];

const AboutUs = () => {
  return (
    <div className="w-full -z-30 bg-[#233c6d] overflow-hidden">
      <Header />

      <section className="relative flex flex-col md:flex-row w-full md:h-[90vh] items-center overflow-hidden text-left text-[50px] text-white font-montserrat">
        <div className="md:w-[70%] w-full flex flex-col mt-[6rem] md:mt-[10rem] md:items-center md:justify-center">
          <div className="md:pl-36 px-3 flex flex-col">
            <div className="inline-block max-w-xl text-left font-montserrat text-4xl md:text-[50px] font-semibold">
              We are building World's First blockchain Technology for Post sales
              services of Insurance for digital service experiance.
            </div>

            <div className="inline-block max-w-xl mt-5 font-montserrat text-base md:text-left">
              At Fidem.ai, we marry technologies such as mobility, computer
              vision and AI with augmented data to build beautiful consumer
              products for our insurance partners. These products are built with
              dynamic underwriting capabilities, API-led distribution and
              real-time claims processing. At the heart of our mission is to
              create transparency, efficiency, and seamless experience for the
              millions of customers who use our products through these
              partnerships.
            </div>
          </div>
        </div>

        <img
          className="w-screen md:w-[700px] mt-10 md:mt-[10rem] md:my-auto object-contain"
          alt=""
          src="comp.png"
        />
      </section>

      <section>
        <img
          className="realtive w-full px-4 h-[50px] my-10"
          alt=""
          src="../eflt.png"
        />
      </section>

      <section className="relative flex flex-col md:flex-row w-full mb-16 items-center overflow-hidden text-left md:mx-5 text-[50px] text-white font-montserrat">
        <div className="md:w-[50%] w-full flex flex-col mt-[6rem] md:mt-[10rem] md:items-center md:justify-center">
          <div className="md:pl-36 px-3 flex flex-col">
            <div className="inline-block text-left font-montserrat text-4xl font-semibold">
              We have Global Office from all over the world
            </div>

            <div className="inline-block mt-5 font-montserrat text-base md:text-left">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </div>

            <div className="flex mt-5 justify-between md:w-[85%]">
              <div className="flex-col flex">
                <div className="text-4xl font-semibold">2022</div>
                <div className="text-lg font-medium mt-1">
                  Fidem.ai Launched
                </div>
              </div>

              <div className="flex-col flex mx-6">
                <div className="text-4xl font-semibold text-[#EB222A]">3+</div>
                <div className="text-lg font-medium mt-1">Global offices</div>
              </div>

              <div className="flex-col flex">
                <div className="text-4xl font-semibold">100+</div>
                <div className="text-lg font-medium mt-1">Clients</div>
              </div>
            </div>

            <div className="flex mt-5 justify-between md:w-[85%]">
              <div className="flex-col flex">
                <div className="text-4xl font-semibold">10+</div>
                <div className="text-lg font-medium mt-1">Employees</div>
              </div>

              <div className="flex-col flex mx-6">
                <div className="text-4xl font-semibold">Thousands</div>
                <div className="text-lg font-medium mt-1">
                  of Happy customers
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="body">
          <div className="gradient-1"></div>
        </div>
        {/* <Globe className="z-2" /> */}
      </section>

      {/* <section>
        <div className="flex justify-center font-bold text-white text-2xl pt-10 ">
          <h>We Are All About The People</h>
        </div>

        <div className="text-center text-white pt-6 text-xl">
          <p className="">
            People are at the heart of our organization, each of us driven
            <br /> by our mission to build better insurance, together.
          </p>
        </div>

        <img
          className="realtive w-[90vw] mx-auto mt-16 mb-20 object-contain"
          alt=""
          src="../office.png"
        />
      </section> */}
      <div className="relative flex flex-col items-center">
        <div className="flex justify-center font-bold text-white text-2xl pt-10 ">
          <h>Our Board Members</h>
        </div>
        <div className="text-center text-white pt-6 text-xl">
          <p className="">
            People are at the heart of our organization, each of us driven
            <br /> by our mission to build better insurance, together.
          </p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-5 my-10 gap-4 px-4 md:w-[90%] text-white ">
          <div
            className={`bg-[#00000030] w-[80vw] md:w-auto relative text-left h-[260px] rounded-lg`}
          >
            <img
              className="mx-auto rounded-full mt-8 w-[150px] h-[150px] overflow-hidden"
              alt=""
              src="../members/member (3).jfif"
            />

            <div className="mx-auto pt-3 text-xl font-medium text-center flex justify-center align-middle">
              Hitesh Saini
              <a
                href="https://www.linkedin.com/in/hitessh-saini-1b6753176/"
                target="blank"
                className="mx-1 align-middle"
              >
                <img
                  src="../linkedin.png"
                  alt="linkedin"
                  className="w-[15px]"
                />
              </a>
            </div>
            <div className="mx-auto text-red-600 text-sm text-xl flex justify-center align-middle text-center">
              Founder & CEO
            </div>
          </div>
          <div
            className={`bg-[#00000030] w-[80vw] md:w-auto relative text-left h-[260px] rounded-lg`}
          >
            <img
              className=" mx-auto rounded-full mt-8 w-[150px] h-[150px] overflow-hidden"
              alt=""
              src="../members/member (1).jfif"
            />

            <div className="mx-auto pt-3 text-xl font-medium text-center flex justify-center align-middle">
              Carlos Miguel Vidal
              <a
                href="https://www.linkedin.com/in/carlos-miguel-vidal/"
                target="blank"
                className="mx-1 align-middle"
              >
                <img
                  src="../linkedin.png"
                  alt="linkedin"
                  className="w-[15px]"
                />
              </a>
            </div>
            <div className="mx-auto text-red-600 text-sm text-xl flex justify-center align-middle text-center">
              Mentor & Advisor
            </div>
          </div>
          <div
            className={`bg-[#00000030] w-[80vw] md:w-auto relative text-left h-[260px] rounded-lg`}
          >
            <img
              className="mx-auto rounded-full mt-8 w-[150px] h-[150px] overflow-hidden"
              alt="https://www.linkedin.com/in/patrickkelahan/"
              src="../members/member (4).webp"
            />

            <div className="mx-auto pt-3 text-xl font-medium text-center flex justify-center align-middle">
              Patrick Kelahan
              <a
                href="https://www.linkedin.com/in/patrickkelahan/"
                target="blank"
                className="mx-1 align-middle"
              >
                <img
                  src="../linkedin.png"
                  alt="linkedin"
                  className="w-[15px]"
                />
              </a>
            </div>
            <div className="mx-auto text-red-600 text-sm text-xl flex justify-center align-middle text-center">
              Mentor & Advisor
            </div>
          </div>
          <div
            className={`bg-[#00000030] w-[80vw] md:w-auto relative text-left h-[260px] rounded-lg`}
          >
            <img
              className="mx-auto rounded-full mt-8 w-[150px] h-[150px] overflow-hidden"
              alt=""
              src="../members/member (2).webp"
            />

            <div className="mx-auto pt-3 text-xl font-medium text-center flex justify-center align-middle">
              Bhupesh P.
              <a
                href="https://www.linkedin.com/in/bhupesh-p-581145111/"
                target="blank"
                className="mx-1 align-middle"
              >
                <img
                  src="../linkedin.png"
                  alt="linkedin"
                  className="w-[15px]"
                />
              </a>
            </div>
            <div className="mx-auto text-red-600 text-sm text-xl flex justify-center align-middle text-center">
              CoFounder & CTO
            </div>
          </div>

          <div
            className={`bg-[#00000030] w-[80vw] md:w-auto relative text-left h-[260px] rounded-lg`}
          >
            <img
              className="mx-auto rounded-full mt-8 w-[150px] h-[150px] overflow-hidden"
              alt="https://www.linkedin.com/in/tarunmottlia/"
              src="../members/member (5).jpg"
            />

            <div className="mx-auto pt-3 text-xl flex justify-center align-middle font-medium text-center">
              Tarun Kumar
              <a
                href="https://www.linkedin.com/in/tarunmottlia/"
                target="blank"
                className="mx-1 align-middle"
              >
                <img
                  src="../linkedin.png"
                  alt="linkedin"
                  className="w-[15px]"
                />
              </a>
            </div>
            <div className="mx-auto text-red-600 text-sm text-xl flex justify-center align-middle text-center">
              Tech Consultant
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="flex justify-center font-bold text-white text-2xl pt-10 ">
          <h>Operating Principles</h>
        </div>

        <div className="my-10 px-10 md:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {services.map((ele, index) => (
              <SwiperSlide key={index}>
                <div
                  key={index}
                  className={`bg-[#00000030] pt-3 md:w-auto relative text-left h-[430px] rounded-lg`}
                >
                  <img
                    className="mx-10 mt-8 w-[50px] h-[60px] overflow-hidden"
                    alt=""
                    src="../insurance.png"
                  />

                  <div className="px-10 pt-3 text-white text-xl font-medium">
                    {ele.title}
                  </div>
                  {ele.desc.map((desc, i) => (
                    <div
                      key={i}
                      className="px-10 pt-1 font-normal text-gray-400"
                    >
                      {desc}
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="my-10 md:block hidden">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {services.map((ele, index) => (
              <SwiperSlide key={index}>
                <div
                  key={index}
                  className={`bg-[#00000030] pt-3 w-[80vw] md:w-auto relative text-left h-[430px] rounded-lg`}
                >
                  <img
                    className="mx-10 mt-8 w-[50px] h-[60px] overflow-hidden"
                    alt=""
                    src="../insurance.png"
                  />

                  <div className="px-10 pt-3 text-white text-xl font-medium">
                    {ele.title}
                  </div>
                  {ele.desc.map((desc, i) => (
                    <div
                      key={i}
                      className="px-10 pt-1 font-normal text-gray-400"
                    >
                      {desc}
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default React.memo(AboutUs);
