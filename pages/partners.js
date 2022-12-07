/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";

const services = [
  {
    bg: "bg-white",
    title: "Insurance",
    desc: ["Insurers", "Re-insurers", "Brokers", "Digital Aggregators", "MGAs"],
  },
  {
    bg: "bg-[#CCD0D3]",
    title: "Automotive",
    desc: [
      "Automative OEMs",
      "Car Dealers & Associations",
      "OEM & Multibrand Garages",
      "Tyre Manufacturers",
      "Aftermarket Service Providers",
      "Spare Parts Suppliers",
    ],
  },
  {
    bg: "bg-white",
    title: "Health Care",
    desc: [
      "Ride-sharing companies",
      "leasing companies",
      "Food Delivery",
      "Rental companies",
      "Short term Rentals",
    ],
  },
  // {
  //   bg: "bg-[#CCD0D3]",
  //   title: "Lifestyles",
  //   desc: [
  //     "Airlines & OTA",
  //     "Smartphone Manufactures",
  //     "Telecom Operators",
  //     "Consumer Durables Companies",
  //     "E-commerce Companies",
  //   ],
  // },
  // {
  //   bg: "bg-[#FFC565]",
  //   title: "Transportation and Logistics",
  //   desc: [
  //     "3PL Companies",
  //     "Large Retailers",
  //     "Construction Fleets",
  //     "Utilities",
  //     "School Buses",
  //     "Passangers Transit(Government)",
  //   ],
  // },
  // {
  //   bg: "bg-[#CCD0D3]",
  //   title: "Financial Services",
  //   desc: [
  //     "Banks",
  //     "Auto Lenders",
  //     "Non Banking Financial Corporations",
  //     "Payment Banks",
  //     "Credit cards",
  //     "Loyalty Programs",
  //   ],
  // },
];

const brands = [
  "logourl",
  "logourl",
  "logourl",
  "logourl",
  "logourl",
  "logourl",
  "logourl",
  "logourl",
  "logourl",
  "logourl",
];

const Products = () => {
  const brandLength = Number(brands.length / 4).toPrecision(1);
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="w-full -z-30 bg-[#233c6d] overflow-hidden">
      <Header />

      <section className="relative flex flex-col items-center mt-40 w-full md:min-h-[90vh] overflow-hidden text-center text-white font-montserrat">
        <div className="text-3xl text-white z-20 font-bold">
          Industries We Serve
        </div>

        <div className="text-white z-20 mt-6 w-[60%]">
          We work across the spectrum with insurance carriers, intermediaries
          and distributors to craft powerful partnerships that transform the
          insurance experience. Our simple mission is to use technology and data
          to empower and delight every customer who uses our products through
          these partnerships.
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-3 my-10 gap-4 px-4 md:w-[70%] text-white ">
          {services.map((ele, index) => (
            <div
              key={index}
              className={`bg-[#00000030] w-[80vw] md:w-auto relative text-left h-[430px] rounded-lg`}
            >
              <img
                className="mx-10 mt-8 w-[50px] h-[60px] overflow-hidden"
                alt=""
                src="../insurance.png"
              />

              <div className="px-10 pt-3 text-xl font-medium">{ele.title}</div>
              {ele.desc.map((desc, i) => (
                <div key={i} className="px-10 pt-1 font-normal text-gray-400">
                  {desc}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#233c6d] mb-20 overflow-hidden font-montserrat w-full h-full ">
        <div className="flex justify-center font-bold text-white text-2xl pt-10 ">
          <h>Our Partners</h>
        </div>
        <div className="text-center text-white px-5 pt-6 text-xl">
          <p className="">
            Companies of all sizes from leading insurers to a single agent{" "}
            <br />
            use Fidem.ai's software.
          </p>
          <div className="grid mt-14 md:w-[60%] gap-2 mx-auto grid-cols-2 md:grid-cols-4 place-items-center">
            <img
              className="w-[180px] h-[75px] overflow-hidden"
              alt=""
              src="../owsome.png"
            />
            <img
              className="w-[180px] h-[75px] overflow-hidden"
              alt=""
              src="../owsome.png"
            />
            <img
              className="w-[180px] h-[75px] overflow-hidden"
              alt=""
              src="../owsome.png"
            />
            <img
              className="w-[180px] h-[75px] overflow-hidden"
              alt=""
              src="../owsome.png"
            />
          </div>

          <div className="flex justify-center mt-6">
            {new Array(+brandLength).fill(1).map((ele, index) => (
              <div
                key={index}
                className={`${
                  currentTab === index ? "bg-[#EB222A]" : "bg-[#AAAAAA]"
                } h-3 w-3 rounded-full mx-[3px] cursor-pointer`}
                onClick={() => setCurrentTab(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default React.memo(Products);
