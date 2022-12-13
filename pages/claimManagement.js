/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../components/header";
import { IoLogoApple, IoLogoGooglePlaystore, IoWarning } from "react-icons/io5";
import Footer from "../components/footer";

const ClaimManagement = () => {
  const [windowSize, setWindowSize] = useState({
    width: "40%",
    height: "40%",
    display: "flex",
    margin: "auto 0",
  });
  useEffect(() => {
    if (window.innerWidth < 500) {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight / 2,
      });
    }
    if (window.innerWidth > 500) {
      setWindowSize({
        width: window.innerWidth / 1.6,
        height: window.innerHeight,
      });
      console.log(window.innerHeight);
    }
  }, []);
  return (
    <div className="w-full -z-30 bg-[#233c6d] overflow-hidden">
      <Header />

      <section className="relative flex flex-col md:flex-row w-full md:h-[90vh] overflow-hidden text-left text-[55px] text-white font-montserrat">
        <div className="md:w-[70%] w-full flex flex-col md:mt-0 mt-[7rem] md:items-center md:justify-center">
          <div className="md:pl-36 px-3 flex flex-col">
            <div className="inline-block max-w-xl text-left  leading-[3rem] md:leading-none font-montserrat text-4xl md:text-[55px] font-bold">
              Claim Management
            </div>

            <div className="inline-block pb-6 max-w-xl mt-8 font-montserrat text-base md:text-left">
              Fidem.ai is a global leader in Claim Management. ABI Health's
              robust cloud-based Claim Management system
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
        <dotlottie-player
          src="https://lottie.host/465d4475-7818-471d-8632-0cb9d0fd9046/Fddg8Yckhp.lottie"
          autoplay
          loop
          style={windowSize}
        ></dotlottie-player>
      </section>

      <section className="min-h-[70vh] relative flex md:flex-row flex-col-reverse">
        <div className="bg-[#00000030] hidden md:block z-0 absolute my-auto left-[30%] rounded-xl right-0 h-[350px] w-[40vw]" />

        <div className="md:w-1/2 flex justify-end mb-10 md:mb-0 -mt-5 md:mt-10 ml-5 md:-mr-10">
          <img
            className="w-full md:h-[280px] z-10"
            alt=""
            src="../claim/claim (4).svg"
          />
        </div>

        <div className="md:w-1/2 md:px-20 px-5 py-5 z-20">
          <div className="bg-[#EB232B] rounded-full h-9 w-9 text-white text-3xl font-bold flex justify-center items-center">
            1.
          </div>
          <div className="text-3xl text-white mt-3 md:mt-3 z-20 font-bold">
            Integrated Rules Engine
          </div>

          <div className="text-white z-20 mt-3 md:mt-6">
            A built-in Rules Engine that recognises what data and documents must
            be supplied and forbids incomplete submissions. This produces
            entries that are full, free of errors, and pre-authorized.
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
            Ingenious Data Extraction
          </div>

          <div className="text-white z-20 mt-3 md:mt-6">
            If coupled with Fidem.ai, Fidem.ai's Smart Data Extraction can
            analyse submitted documents to extract pertinent data from the
            hospital's information system, eliminating the need for manual
            entry.
          </div>
        </div>

        <div className="md:w-1/2 flex justify-start mb-10 md:mb-0 -mt-5 md:mt-10">
          <img
            className="w-full md:h-[250px] z-10"
            alt=""
            src="../claim/claim (1).svg"
          />
        </div>
      </section>

      <section className="min-h-[70vh] relative flex md:flex-row flex-col-reverse">
        <div className="bg-[#00000030] hidden md:block z-0 absolute my-auto left-[30%] rounded-xl right-0 h-[350px] w-[40vw]" />

        <div className="md:w-1/2 flex justify-end mb-10 md:mb-0 -mt-5 md:mt-10 ml-5 md:-mr-10">
          <img
            className="w-full md:h-[250px] z-10"
            alt=""
            src="../claim/claim (3).svg"
          />
        </div>

        <div className="md:w-1/2 md:px-20 px-5 py-5 z-20">
          <div className="bg-[#EB232B] rounded-full h-9 w-9 text-white text-3xl font-bold flex justify-center items-center">
            3.
          </div>
          <div className="text-3xl text-white mt-3 md:mt-3 z-20 font-bold">
            Coordinated Emailing
          </div>

          <div className="text-white z-20 mt-3 md:mt-6">
            By establishing a virtual inbox in your dashboard, Fidem.ai also
            offers integrated emailing. Emails can be created within the
            dashboard; the interface is comparable to Microsoft Outlook.
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
            Monitor Claims
          </div>

          <div className="text-white z-20 mt-3 md:mt-6">
            During the reconciliation process, Fidem.ai can keep track of claims
            that have been fully or partially paid and classify them
            accordingly. All of the claims can be shown on one screen.
          </div>
        </div>

        <div className="md:w-1/2 flex justify-start mb-10 md:mb-0 -mt-5 md:mt-10">
          <img
            className="w-full md:h-[250px] z-10"
            alt=""
            src="../claim/claim (2).svg"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default React.memo(ClaimManagement);
