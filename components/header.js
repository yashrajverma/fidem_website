import { useRouter } from "next/router";
import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <header className="hidden md:flex fixed justify-between w-full px-5 md:px-32 py-3 top-0 z-40 items-center bg-[#00000090]">
        <a href="https://fidem.ai" rel="noreferrer" target="_BLANK">
          <img
            className="h-[55px] object-cover cursor-pointer"
            alt=""
            src="logo@2x.png"
          />
        </a>

        <div className="text-center text-2xs text-white items-center flex">
          <div
            className={`font-medium mr-6 inline-block cursor-pointer ${
              router.pathname === "/" && "text-[#EB222A]"
            }`}
            onClick={() => router.push("/")}
          >
            Home
          </div>{" "}
          <div
            className={`font-medium mr-6 inline-block cursor-pointer ${
              router.pathname === "/products" && "text-[#EB222A]"
            }`}
            onClick={() => router.push("/products")}
          >
            Products
          </div>
          <div
            className={`font-medium mr-6 inline-block cursor-pointer ${
              router.pathname === "/partners" && "text-[#EB222A]"
            }`}
            onClick={() => router.push("/partners")}
          >
            Partners
          </div>
          <div
            className={`font-medium mr-6 inline-block cursor-pointer ${
              router.pathname === "/aboutus" && "text-[#EB222A]"
            }`}
            onClick={() => router.push("/aboutus")}
          >
            About Us
          </div>
          <div
            className={`font-medium mr-6 inline-block cursor-pointer ${
              router.pathname === "/newsroom" && "text-[#EB222A]"
            }`}
            onClick={() => router.push("/newsroom")}
          >
            Newsroom
          </div>
        </div>
      </header>

      <header className="md:hidden flex fixed justify-between w-full px-3 py-3 top-0 z-50 items-center bg-[#00000040]">
        {menuOpen && (
          <div className="bg-[#1E3D73] z-[10000] p-5 absolute top-0 left-0 h-[80vh] w-screen">
            <div className="flex justify-between">
              <div className="">
                <img
                  className="h-[45px] object-cover "
                  alt=""
                  src="logo@2x.png"
                />
              </div>
              <div>
                <IoClose
                  onClick={() => setMenuOpen((prev) => !prev)}
                  className="text-3xl text-white"
                />
              </div>
            </div>

            <div className="px-1 py-5 text-lg">
              <div
                className="mt-3 cursor-pointer font-semibold text-xl text-white"
                onClick={() => {
                  router.push("/");
                  setMenuOpen((prev) => !prev);
                }}
              >
                Home
              </div>
              <div
                className="mt-3 cursor-pointer font-semibold text-xl text-white"
                onClick={() => {
                  router.push("/products");
                  setMenuOpen((prev) => !prev);
                }}
              >
                Products
              </div>
              <div
                className="mt-3 cursor-pointer font-semibold text-xl text-white"
                onClick={() => {
                  router.push("/partners");
                  setMenuOpen((prev) => !prev);
                }}
              >
                Partners
              </div>
              <div
                className="mt-3 cursor-pointer font-semibold text-xl text-white"
                onClick={() => {
                  router.push("/aboutus");
                  setMenuOpen((prev) => !prev);
                }}
              >
                About Us
              </div>
              <div
                className="mt-2 ml-8 font-semibold text-xl cursor-pointer text-white"
                onClick={() => {
                  router.push("/aboutus");
                  setMenuOpen((prev) => !prev);
                }}
              >
                Company
              </div>
              <div
                className="mt-2 ml-8 font-semibold text-xl cursor-pointer text-white"
                onClick={() => {
                  router.push("/career");
                  setMenuOpen((prev) => !prev);
                }}
              >
                Career
              </div>
              <div
                className="mt-3 cursor-pointer font-semibold text-xl text-white"
                onClick={() => {
                  router.push("/newsroom");
                  setMenuOpen((prev) => !prev);
                }}
              >
                Newsroom
              </div>
            </div>
          </div>
        )}

        <div className="text-center text-2xs text-white items-center flex">
          <img className="h-[45px] object-cover " alt="" src="logo@2x.png" />
        </div>

        <div className="relative text-white text-2xl cursor-pointer">
          <HiMenuAlt2 onClick={() => setMenuOpen((prev) => !prev)} />
        </div>
      </header>
    </>
  );
};

export default Header;
