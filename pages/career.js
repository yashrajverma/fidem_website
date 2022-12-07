/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IoWarning } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail, MdLocationPin } from "react-icons/md";
import Header from "../components/header";
import Footer from "../components/footer";

const Career = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />

      <section className="bg-[#FFEEDB] pb-8 md:pb-14">
        <div className="text-2xl font-bold font-montserrat text-[#FFC565] pt-20 md:pt-28 flex justify-center">
          <p className="">CAREER</p>
        </div>

        <div className="flex mx-4 md:mx-24 my-8 md:my-14 flex-col md:flex-row">
          <div className="md:w-[40%]">
            <div className="bg-[#222222] rounded-md md:w-[90%] h-[29rem] justify-between flex items-center p-8 overflow-hidden">
              <img src="/career.png" alt="" />
            </div>
          </div>

          <div className="md:w-[60%] mt-8 md:mt-0 grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-white overflow-hidden rounded-md shadow-md flex flex-col justify-center items-center py-6">
              <FaPhoneAlt className="text-[33px]" />
              <div className="mt-4 text-base font-medium text-[#FFC565]">
                Call Us
              </div>
              <div className="mt-1 text-base font-medium">85-99-09-1000</div>
              <div className="mt-1 text-sm">
                Business Hours - 9:30 AM to 6:30 PM
              </div>
            </div>

            <div className="bg-white overflow-hidden rounded-md shadow-md flex flex-col justify-center items-center py-6">
              <RiWhatsappFill className="text-[33px]" />
              <div className="mt-4 text-base font-medium text-[#FFC565]">
                Whatsapp
              </div>
              <div className="mt-1 text-base font-medium">90-90-90-2555</div>
              <div className="mt-1 text-sm">
                Business Hours - 9:30 AM to 6:30 PM
              </div>
            </div>

            <div className="bg-white overflow-hidden rounded-md shadow-md flex flex-col justify-center items-center py-6">
              <MdEmail className="text-[33px]" />
              <div className="pt-3 text-base font-medium text-[#FFC565]">
                Write Us
              </div>
              <div className="mt-1 text-base font-medium">hr@goldcash.co</div>
            </div>

            <div className="bg-white overflow-hidden rounded-md shadow-md flex flex-col justify-center items-center py-6">
              <MdLocationPin className="text-[33px]" />
              <div className="mt-4 text-base font-medium text-[#FFC565]">
                Coorporate Office
              </div>
              <div className="mt-1 text-sm font-medium text-center px-4">
                Unit Number 1034, Spaze I-Tech Park, Sohna Road, Sector 49,
                Gurugram, Haryana 122018
              </div>
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

export default Career;
