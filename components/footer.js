import { useRouter } from "next/router";
import React from "react";
import {
  GrFacebookOption,
  GrInstagram,
  GrLinkedinOption,
  GrTwitter,
  GrYoutube,
} from "react-icons/gr";
import { IoLogoApple, IoLogoGooglePlaystore } from "react-icons/io5";

const Footer = () => {
  const router = useRouter();

  return (
    <>
      <footer>
        <div className="box bg-[#1C345E] w-[95vw] md:w-[75vw] py-10 mx-auto rounded mt-5 justify-evenly flex flex-col items-center text-white text-center">
          <div className="space-y-3">
            <p className="text-xs capitalize">NEED MORE DETAILS?</p>
            <p className="text-xl">Give Us a Miss Call At</p>
            <p className="text-xl">+91 81785 25724</p>

            <div className="bg-[#1D3C72] px-2 md:px-4 rounded-md py-1 md:py-3">
              <input
                className="w-[50vw] md:w-[30vw] text-sm md:text-lg bg-transparent pl-1 md:pl-4 outline-none"
                placeholder="ENTER MOBILE NUMBER"
              />
              <button className="text-sm bg-[#EB222A] px-4 p-2 rounded-md">
                APPLY NOW
              </button>
            </div>
          </div>
        </div>
      </footer>

      <footer className="flex flex-col mt-16 md:flex-row items-center md:justify-between w-full md:px-20 top-0 z-10 md:items-center py-2">
        <img
          className="h-[50px] object-cover mb-7 md:mb-0"
          alt=""
          src="logo@2x.png"
        />

        <div className="text-center text-2xs text-white items-center flex flex-col md:flex-row">
          <div
            className={`font-medium mb-2 md:mb-0 md:mr-6 inline-block cursor-pointer ${
              router.pathname === "/" && "text-[#EB222A]"
            }`}
            onClick={() => router.push("/")}
          >
            Home
          </div>{" "}
          <div
            className={`font-medium mb-2 md:mb-0 md:mr-6 inline-block cursor-pointer ${
              router.pathname === "/products" && "text-[#EB222A]"
            }`}
            onClick={() => router.push("/products")}
          >
            Products
          </div>
          <div
            className={`font-medium mb-2 md:mb-0 md:mr-6 inline-block cursor-pointer ${
              router.pathname === "/partners" && "text-[#EB222A]"
            }`}
            onClick={() => router.push("/partners")}
          >
            Partners
          </div>
          <div
            className={`font-medium mb-2 md:mb-0 md:mr-6 inline-block cursor-pointer ${
              router.pathname === "/aboutus" && "text-[#EB222A]"
            }`}
            onClick={() => router.push("/aboutus")}
          >
            About
          </div>
          <div
            className={`font-medium inline-block cursor-pointer ${
              router.pathname === "/newsroom" && "text-[#EB222A]"
            }`}
            onClick={() => router.push("/newsroom")}
          >
            Newsroom
          </div>
        </div>
      </footer>

      <footer className="py-2 md:pb-8 text-xs md:text-sm px-3 md:px-20 mb-5 md:mb-0 flex flex-col justify-center md:flex-row text-white md:justify-between">
        <div className="text-center">
          {/* © 2020. Fidem.ai All Rights Reserved. */}
        </div>
        <div className="flex mt-2 md:mt-0 justify-center">
          <GrFacebookOption className="cursor-pointer" />
          <GrInstagram className="ml-3 text-sm cursor-pointer" />
          <GrTwitter className="ml-3 cursor-pointer" />
        </div>
      </footer>

      <footer className="py-2 md:py-6 bg-[#00000060] text-xs md:text-sm px-3 md:px-20 mb-5 md:mb-0 flex items-center justify-center md:flex-row text-white">
        © 2020. Fidem.ai All Rights Reserved.
      </footer>
    </>
  );
};

export default Footer;
