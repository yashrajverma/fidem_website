/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Header from "../components/header";
import { IoLogoApple, IoLogoGooglePlaystore, IoWarning } from "react-icons/io5";
import Footer from "../components/footer";
import Mobility from "../public/lottie/Fidem website files/Mobility.json";
import Lottie from "lottie-react";
const GarageManagement = () => {
  return (
    <div className="w-full -z-30 bg-[#233c6d] overflow-hidden">
      <Header />

      <section className="relative flex flex-col md:flex-row w-full md:h-[90vh] overflow-hidden text-left text-[55px] text-white font-montserrat">
        <div className="md:w-[70%] w-full flex flex-col md:mt-0 mt-[7rem] md:items-center md:justify-center">
          <div className="md:pl-36 px-3 flex flex-col">
            <div className="inline-block max-w-xl text-left  leading-[3rem] md:leading-none font-montserrat text-4xl md:text-[55px] font-bold">
              Garage Management
            </div>

            <div className="inline-block pb-6 max-w-xl mt-8 font-montserrat text-base md:text-left">
              Fidem.ai is a global leader in Garage Management insurance. Our
              products offer asset, usage or behavior based protection and
              end-to-end claims for customers on the move.
            </div>

            <button className="cursor-pointer p-[14px_51px] w-fit bg-red-600  hover:bg-red-700 rounded-[8px] shadow-[0px_13px_19px_rgba(211,_129,_39,_0.15)] flex md:w-fit box-border items-center justify-center md:items-start md:justify-start">
              <div className=" text-sm tracking-[0.2px] leading-[24px] font-semibold font-montserrat text-white text-center inline-block">
                CONTACT US
              </div>
            </button>
          </div>
        </div>

        {/* <img
          className="w-screen md:w-[700px] my-10 md:my-auto object-contain"
          alt=""
          src="comp.png"
        /> */}
        <Lottie animationData={Mobility} play loop className="lottieFile" />
      </section>

      <section className="min-h-[70vh] relative flex md:flex-row flex-col-reverse">
        <div className="bg-[#00000030] hidden md:block z-0 absolute my-auto left-[30%] rounded-xl right-0 h-[350px] w-[40vw]" />

        <div className="md:w-1/2 flex justify-end mb-10 md:mb-0 -mt-5 md:mt-10 ml-5 md:-mr-10">
          <img
            className="w-full md:h-[280px] z-10"
            alt=""
            src="../product1.svg"
          />
        </div>

        <div className="md:w-1/2 md:px-20 px-5 py-5 z-20">
          <div className="bg-[#EB232B] rounded-full h-9 w-9 text-white text-3xl font-bold flex justify-center items-center">
            1.
          </div>
          <div className="text-3xl text-white mt-3 md:mt-3 z-20 font-bold">
            Auto Insurance
          </div>

          <div className="text-white z-20 mt-3 md:mt-6">
            Using photos, video-streaming and computer vision, we can inspect a
            vehicle in record time to assess value, risk-profile and damages.
            This allows us to issue policies in real-time upon asset evaluation,
            and settle claims 10x faster while reducing fraud. Fidem.ai’s Xclaim
            platform digitizes and automates end-to-end claims. We deliver the
            best customer experience and improved outcomes over millions of
            claims for the world's leading insurers.
          </div>
        </div>
      </section>

      <section className="min-h-[70vh] relative flex md:flex-row flex-col-reverse">
        <div className="bg-[#00000030] hidden md:block z-0 absolute my-auto left-[30%] rounded-xl right-0 h-[350px] w-[40vw]" />

        <div className="md:w-1/2 md:px-20 px-5 py-5 z-20 md:ml-10 md:-mr-10">
          <div className="bg-[#EB232B] rounded-full h-9 w-9 text-white text-3xl font-bold flex justify-center items-center">
            2.
          </div>
          <div className="text-3xl text-white mt-3 md:mt-3 z-20 font-bold">
            Telematics and UBI
          </div>

          <div className="text-white z-20 mt-3 md:mt-6">
            Our portfolio of complete IoT solutions combine hardware and
            software to bring real-time visibility, safety, analytics, and AI to
            the operations of passenger cars and connected fleets. This
            underlying data is used to create risk models for behavioral, user
            and usage based underwriting. A driver score is generated to
            indicate the risk across a number of components including contextual
            speed, time of day, smooth driving and road risk.
          </div>
        </div>

        <div className="md:w-1/2 flex justify-start mb-10 md:mb-0 -mt-5 md:mt-10">
          <img
            className="w-full md:h-[250px] z-10"
            alt=""
            src="../product2.svg"
          />
        </div>
      </section>

      <section className="min-h-[70vh] relative flex md:flex-row flex-col-reverse">
        <div className="bg-[#00000030] hidden md:block z-0 absolute my-auto left-[30%] rounded-xl right-0 h-[350px] w-[40vw]" />

        <div className="md:w-1/2 flex justify-end mb-10 md:mb-0 -mt-5 md:mt-10 ml-5 md:-mr-10">
          <img
            className="w-full md:h-[250px] z-10"
            alt=""
            src="../product3.svg"
          />
        </div>

        <div className="md:w-1/2 md:px-20 px-5 py-5 z-20">
          <div className="bg-[#EB232B] rounded-full h-9 w-9 text-white text-3xl font-bold flex justify-center items-center">
            3.
          </div>
          <div className="text-3xl text-white mt-3 md:mt-3 z-20 font-bold">
            DrivebuddyAI
          </div>

          <div className="text-white z-20 mt-3 md:mt-6">
            Our portfolio of complete IoT solutions combine hardware and
            software to bring real-time visibility, safety, analytics, and AI to
            the operations of passenger cars and connected fleets. This
            underlying data is used to create risk models for behavioral, user
            and usage based underwriting. A driver score is generated to
            indicate the risk across a number of components including contextual
            speed, time of day, smooth driving and road risk.
          </div>
        </div>
      </section>

      <section className="min-h-[70vh] relative flex md:flex-row flex-col-reverse">
        <div className="bg-[#00000030] hidden md:block z-0 absolute my-auto left-[30%] rounded-xl right-0 h-[350px] w-[40vw]" />

        <div className="md:w-1/2 md:px-20 px-5 py-5 z-20 md:ml-10 md:-mr-10">
          <div className="bg-[#EB232B] rounded-full h-9 w-9 text-white text-3xl font-bold flex justify-center items-center">
            4.
          </div>
          <div className="text-3xl text-white mt-3 md:mt-3 z-20 font-bold">
            DrivebuddyAI
          </div>

          <div className="text-white z-20 mt-3 md:mt-6">
            Our white-labelled roadside assistance platform, StrandD provides
            accident management, e-call, b-call, network management and digital
            dispatch capabilities to get customers back on the road quickly. A
            digitally enabled and integrated network that we are able to serve
            customers anytime of the day. We're working with industry-leading
            automotive companies, insurers, aggregators and fleets to power
            their assistance needs.
          </div>
        </div>

        <div className="md:w-1/2 flex justify-start mb-10 md:mb-0 -mt-5 md:mt-10">
          <img
            className="w-full md:h-[250px] z-10"
            alt=""
            src="../product4.svg"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default React.memo(GarageManagement);
