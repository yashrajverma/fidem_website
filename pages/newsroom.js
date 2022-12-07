/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
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
    title: "Shared Economy",
    desc: [
      "Ride-sharing companies",
      "leasing companies",
      "Food Delivery",
      "Rental companies",
      "Short term Rentals",
    ],
  },
  {
    bg: "bg-[#CCD0D3]",
    title: "Lifestyles",
    desc: [
      "Airlines & OTA",
      "Smartphone Manufactures",
      "Telecom Operators",
      "Consumer Durables Companies",
      "E-commerce Companies",
    ],
  },
  {
    bg: "bg-[#FFC565]",
    title: "Transportation and Logistics",
    desc: [
      "3PL Companies",
      "Large Retailers",
      "Construction Fleets",
      "Utilities",
      "School Buses",
      "Passangers Transit(Government)",
    ],
  },
  {
    bg: "bg-[#CCD0D3]",
    title: "Financial Services",
    desc: [
      "Banks",
      "Auto Lenders",
      "Non Banking Financial Corporations",
      "Payment Banks",
      "Credit cards",
      "Loyalty Programs",
    ],
  },
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

const Newsletter = () => {
  // useEffect(() => {
  //   fetch("", {
  //     method: "get",
  //     headers: { "Content-type": "application/json" },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {});
  // }, []);

  return (
    <div className="w-full -z-30 bg-[#233c6d] overflow-hidden">
      <Header />

      <section className="grid grid-cols-1 mt-28 md:hidden gap-10 text-white mx-8 md:mx-16 mb-20">
        <div className="text-3xl text-white z-20 font-semibold w-[95%] text-left">
          Featured
        </div>

        {Array(3)
          .fill(0)
          .map((ele, i) => (
            <div key={i} className="flex flex-col text-left mr-auto">
              <img src="/globecard.png" className="rounded-md" alt="" />

              <div className="mt-4">March 21, 2020</div>

              <div className="mt-2 text-2xl font-semibold">
                Fidem.ai Featured in the 2021 Insurtech100
              </div>

              <div className="text-base mt-2">
                The selection as world’s 100 most innovative Insurtech announced
                by Fintech Global identified Fidem.ai as the next-gen platform
                transforming insurance for mobility.
              </div>
            </div>
          ))}
      </section>

      <section className="relative hidden md:flex flex-col items-center mt-32 w-full md:min-h-[90vh] overflow-hidden text-center text-white font-montserrat">
        <div className="text-3xl text-white z-20 font-semibold w-[95%] text-left">
          Featured
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 my-10 gap-5 px-4 md:w-[97%] text-white ">
          <div className="flex flex-col text-left w-[90%] mr-auto">
            <img src="/globecard.png" className="rounded-md" alt="" />

            <div className="mt-4">March 21, 2020</div>

            <div className="mt-2 text-2xl font-semibold">
              Fidem.ai Featured in the 2021 Insurtech100
            </div>

            <div className="text-base mt-2">
              The selection as world’s 100 most innovative Insurtech announced
              by Fintech Global identified Fidem.ai as the next-gen platform
              transforming insurance for mobility.
            </div>
          </div>

          <div>
            <div className="flex items-start text-left w-[90%] mr-auto">
              <img
                alt=""
                src="/globecard.png"
                className="rounded-md w-[50%] object-contain"
              />

              <div className="ml-4">
                March 21, 2020
                <div className="mt-2 text-2xl font-semibold">
                  Fidem.ai Featured in the 2021 Insurtech100
                </div>
              </div>
            </div>

            <div className="flex mt-3 items-start text-left w-[90%] mr-auto">
              <img
                alt=""
                src="/globecard.png"
                className="rounded-md w-[50%] object-contain"
              />

              <div className="ml-4">
                March 21, 2020
                <div className="mt-2 text-2xl font-semibold">
                  Fidem.ai Featured in the 2021 Insurtech100
                </div>
              </div>
            </div>

            <div className="flex mt-3 items-start text-left w-[90%] mr-auto">
              <img
                alt=""
                src="/globecard.png"
                className="rounded-md w-[50%] object-contain"
              />

              <div className="ml-4">
                March 21, 2020
                <div className="mt-2 text-2xl font-semibold">
                  Fidem.ai Featured in the 2021 Insurtech100
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className=" mx-8" />

      <section className="grid mt-10 grid-cols-1 md:grid-cols-3 gap-10 text-white mx-8 md:mx-16 mb-20">
        {Array(18)
          .fill(0)
          .map((ele, i) => (
            <div key={i} className="flex flex-col text-left mr-auto">
              <img src="/globecard.png" className="rounded-md" alt="" />

              <div className="mt-4">March 21, 2020</div>

              <div className="mt-2 text-2xl font-semibold">
                Fidem.ai Featured in the 2021 Insurtech100
              </div>

              <div className="text-base mt-2">
                The selection as world’s 100 most innovative Insurtech announced
                by Fintech Global identified Fidem.ai as the next-gen platform
                transforming insurance for mobility.
              </div>
            </div>
          ))}
      </section>

      <Footer />
    </div>
  );
};

export default Newsletter;
