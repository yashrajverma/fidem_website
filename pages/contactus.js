/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IoWarning } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail, MdLocationPin } from "react-icons/md";
import Header from "../components/header";
import Footer from "../components/footer";

const ContactUs = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />

      <section className="bg-[#FFEEDB] pb-8 md:pb-14">
        <div className="text-2xl font-bold font-montserrat text-[#FFC565] pt-20 md:pt-28 flex justify-center">
          <p className="text-center">CONTACT US</p>
        </div>

        <div className="flex mx-4 md:mx-24 my-8 md:my-14 flex-col md:flex-row">
          <div className="md:w-[40%]">
            <div className="bg-[#222222] rounded-md md:w-[90%] h-[29rem] justify-between flex items-center p-8 overflow-hidden">
              <img src="/contactUs.png" alt="" />
            </div>
          </div>

          <div className="md:w-[60%] mt-6 md:mt-0 flex flex-col">
            <div>
              <div className="text-xs font-medium mb-1">NAME (REQUIRED)</div>
              <input
                placeholder="Enter your name"
                className="w-full px-4 p-2 rounded-md border border-gray-400 bg-transparent"
              />
            </div>

            <div className="mt-3">
              <div className="text-xs font-medium mb-2 capitalize">
                MOBILE NUMBER (REQUIRED)
              </div>
              <input
                placeholder="Enter your Mobile number"
                className="w-full px-4 p-2 rounded-md border border-gray-400 bg-transparent"
              />
            </div>

            <div className="mt-3">
              <div className="text-xs font-medium mb-2 capitalize">
                EMAIL (REQUIRED)
              </div>
              <input
                placeholder="Enter your email"
                className="w-full px-4 p-2 rounded-md border border-gray-400 bg-transparent"
              />
            </div>

            <div className="mt-3">
              <div className="text-xs font-medium mb-2 capitalize">
                CITY (REQUIRED)
              </div>
              <input
                placeholder="Enter your city"
                className="w-full px-4 p-2 rounded-md border border-gray-400 bg-transparent"
              />
            </div>

            <div className="mt-3">
              <div className="text-xs font-medium mb-2 capitalize">
                YOUR MESSAGE
              </div>
              <textarea
                placeholder=""
                className="w-full px-4 p-2 rounded-md border border-gray-400 bg-transparent"
              />
            </div>

            <div className="flex justify-between mt-4">
              <button className="bg-[#FFC565] p-3 font-semibold w-full rounded-md text-xs">
                SEND MESSAGE
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex mt-8 md:mt-14 flex-col items-center -z-30 w-screen px-2 md:px-20 overflow-hidden text-left text-black mb-9 md:mb-16">
        <div className="bg-[#FFBEBE] relative flex items-start rounded-xl p-4 md:p-8 px-4 md:px-10 w-[95%] md:w-[90%]">
          <div className="">
            <IoWarning className="text-[#D32727]" />
          </div>

          <div className="flex flex-col ml-5 -mt-2">
            <div className="text-[#D32727]">Warning</div>
            <div className="">
              Trying to Sell Stolen or Spurious Gold Articles is a Criminal
              Offence, Sellers must provide Proper Documentation to Transact. We
              do not entertain Minors under any circumstances to Sell Gold.
              Individuals between the ages 18 to 21 Years must have Consent of
              their Family Members to Transact. Verification will be done if
              necessary. Fidem.ai Reserves all the Rights to reject any
              Transaction, if found suspicious and can be reported to the
              appropriate Agencies.
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
