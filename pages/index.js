/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Header from "../components/header";
import {
  IoLogoApple,
  IoLogoAppleAppstore,
  IoLogoGooglePlaystore,
  IoWarning,
} from "react-icons/io5";
import Footer from "../components/footer";
import dynamic from "next/dynamic";
import { COUNTRIES_DATA } from "../data/countries";
import HEX_DATA from "../data/countries_hex_data.json";
const EARTH_RADIUS_KM = 6371; // km
const SAT_SIZE = 80; // km
const TIME_STEP = 3 * 1000; // per frame
import "@dotlottie/player-component";
const getRandomCountry = () => {
  return COUNTRIES_DATA[Math.floor(Math.random() * COUNTRIES_DATA.length)];
};

function Index() {
  const globeEl = useRef();
  const country = getRandomCountry();
  const [selectedCountry, setSelectedCountry] = useState({
    lat: country.latitude,
    lng: country.longitude,
    label: country.name,
  });
  const [hex, setHex] = useState({ features: [] });
  const [selected, setSelected] = useState(0);

  const [satData, setSatData] = useState();
  const [globeRadius, setGlobeRadius] = useState();
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    // time ticker
    (function frameTicker() {
      requestAnimationFrame(frameTicker);
      setTime((time) => new Date(+time + TIME_STEP));
    })();
  }, []);

  useEffect(() => {
    setHex(HEX_DATA);
  }, []);

  useEffect(() => {
    // load satellite data
    fetch("//unpkg.com/globe.gl/example/datasets/space-track-leo.txt")
      .then((r) => r.text())
      .then((rawData) => {
        const tleData = rawData
          .replace(/\r/g, "")
          .split(/\n(?=[^12])/)
          .filter((d) => d)
          .map((tle) => tle.split("\n"));
        const satData = tleData
          .map(([name, ...tle]) => ({
            satrec: satellite.twoline2satrec(...tle),
            name: name.trim().replace(/^0 /, ""),
          }))
          // exclude those that can't be propagated
          .filter((d) => !!satellite.propagate(d.satrec, new Date()).position)
          .slice(0, 1500);

        setSatData(satData);
      });
  }, []);

  useEffect(() => {
    // globeEl.current.controls().autoRotate = true;
    // globeEl.current.controls().autoRotateSpeed = 0.2;

    const MAP_CENTER = { lat: 0, lng: 0, altitude: 1.5 };
    // globeEl.current.pointOfView(MAP_CENTER, 0);
  }, [globeEl]);

  useEffect(() => {
    const countryLocation = {
      lat: selectedCountry.lat,
      lng: selectedCountry.lng,
      altitude: 1.5,
    };

    // globeEl.current.pointOfView(countryLocation, 0);
  }, [selectedCountry]);

  const satObject = useMemo(() => {
    if (!globeRadius) return undefined;

    const satGeometry = new THREE.OctahedronGeometry(
      (SAT_SIZE * globeRadius) / EARTH_RADIUS_KM / 2,
      0
    );
    const satMaterial = new THREE.MeshLambertMaterial({
      color: "palegreen",
      transparent: true,
      opacity: 0.7,
    });
    return new THREE.Mesh(satGeometry, satMaterial);
  }, [globeRadius]);

  const objectsData = useMemo(() => {
    if (!satData) return [];

    // Update satellite positions
    const gmst = satellite.gstime(time);
    return satData.map((d) => {
      const eci = satellite.propagate(d.satrec, time);
      if (eci.position) {
        const gdPos = satellite.eciToGeodetic(eci.position, gmst);
        const lat = satellite.radiansToDegrees(gdPos.latitude);
        const lng = satellite.radiansToDegrees(gdPos.longitude);
        const alt = gdPos.height / EARTH_RADIUS_KM;
        return { ...d, lat, lng, alt };
      }
      return d;
    });
  }, [satData, time]);

  return (
    <div className="w-full -z-30 bg-[#233c6d] overflow-hidden">
      <Header />

      <section className="container relative flex flex-col md:flex-row md:h-[90vh] overflow-hidden text-left text-[55px] text-orange-100 font-montserrat">
        <div className="md:w-[50%] w-full flex flex-col md:mt-0 mt-[7rem] md:items-center  md:justify-center">
          <div className="md:pl-0 px-3 flex flex-col z-10">
            <div className="inline-block max-w-xl text-left  leading-[3rem] md:leading-none font-montserrat text-4xl md:text-[55px] font-bold">
              Where <span className="text-red-600">WEB3.0</span>
            </div>

            <div className="inline-block pb-6 max-w-xl leading-[3rem] md:leading-none font-montserrat text-4xl md:text-[55px] font-bold md:text-left">
              meets Insurance
            </div>

            <div className="inline-block pb-6 max-w-xl  font-montserrat text-base md:text-left">
              Fidemai is building technology infrastructure that powers the{" "}
              <br />
              global insurance company
            </div>

            <button className="cursor-pointer p-[14px_51px] w-fit bg-red-600  hover:bg-red-700 rounded-[8px] shadow-[0px_13px_19px_rgba(211,_129,_39,_0.15)] flex md:w-fit box-border items-center justify-center md:items-start md:justify-start">
              <div className=" text-sm tracking-[0.2px] leading-[24px] font-semibold font-montserrat text-white text-center inline-block">
                Contact US
              </div>
            </button>
          </div>
          <div className="body">
            <div class="gradient"></div>
          </div>
        </div>

        <img
          className="w-screen rounded-lg md:w-[600px] my-10 md:mx-auto object-contain"
          alt=""
          src="main.gif"
        />
      </section>

      <section className="min-h-[90vh] mb-28 flex justify-center  items-center flex-col relative">
        <img className="absolute bottom-0 right-0" src="/bg.png" alt="" />

        <div className="flex justify-center flex-col z-10 text-4xl font-bold text-white items-center">
          <div> Digital Evolution of</div>
          <div className="text-2xl mt-2">Global Insurance</div>
        </div>

        <div className="flex w-[90%] flex-col md:flex-row z-10 justify-center min-h-[80vh] mx-36 mt-4">
          <div className=" w-screen  flex flex-wrap text-lg px-10 text-center md:text-left text-white md:px-20 items-center">
            Insurance is a $5.5 trillion industry that accounts for 6% of global
            GDP. Yet, digital transactions account for less than 8% of gross
            written premium (GWP). Advances in smartphone penetration, data
            ubiquity and AI have created a massive opportunity to shape the
            digital insurance economy. Fidem.ai is leading a data-driven future
            for insurance. Our technology accelerates growth, reduces
            ineffiencies and improves profitability for insurance companies
            while keeping customers at the center of the experience.
          </div>{" "}
          <img
            className="w-screen md:w-[50%]  mt-10 object-contain"
            alt=""
            src="map.svg"
          />
        </div>
      </section>

      <section className="mx-auto w-[80%] my-32">
        <div className="flex justify-center text-center text-white font-semibold text-3xl">
          Insurance as a service stack
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 pt-20">
          <div className="flex flex-col items-center">
            <div
              className="px-8 relative cursor-pointer"
              onClick={() => {
                setSelected(0);
              }}
            >
              <img
                className="h-[50px] mx-auto w-[50px] object-contain"
                alt=""
                src="./stackImg1.svg"
              />

              {selected == 0 && (
                <div className="h-32 w-full rounded-md bg-[#FFFFFF20] absolute -top-4 left-0" />
              )}

              <div className="text-white text-2xl font-semibold mt-4">
                Products
              </div>
            </div>

            <img className="h-[120px]" src="/line.png" alt="" />
          </div>

          <div className="flex flex-col items-center">
            <div
              className="px-8 relative cursor-pointer"
              onClick={() => setSelected(1)}
            >
              <img
                className="h-[50px] mx-auto w-[50px] object-contain"
                alt=""
                src="./stackImg2.svg"
              />

              {selected == 1 && (
                <div className="h-32 w-full rounded-md bg-[#FFFFFF20] absolute -top-4 left-0" />
              )}

              <div className="text-white text-2xl font-semibold mt-4">
                Underwriting
              </div>
            </div>

            <img className="h-[120px]" src="/line.png" alt="" />
          </div>

          <div className="flex flex-col items-center">
            <div
              className="px-8 relative cursor-pointer"
              onClick={() => setSelected(2)}
            >
              <img
                className="h-[50px] mx-auto w-[50px] object-contain"
                alt=""
                src="./stackImg3.svg"
              />

              {selected == 2 && (
                <div className="h-32 w-full rounded-md bg-[#FFFFFF20] absolute -top-4 left-0" />
              )}

              <div className="text-white text-2xl font-semibold mt-4">
                Distribution
              </div>
            </div>

            <img className="h-[120px]" src="/line.png" />
          </div>

          <div className="flex flex-col items-center">
            <div
              className="px-8 relative cursor-pointer"
              onClick={() => setSelected(3)}
            >
              <img
                className=" mx-auto  w-[65%] object-contain"
                alt=""
                src="./stackImg4.svg"
              />

              {selected == 3 && (
                <div className="h-32 w-full rounded-md bg-[#FFFFFF20] absolute -top-4 left-0" />
              )}

              <div className="text-white text-2xl font-semibold mt-4">
                Claims
              </div>
            </div>

            <img className="h-[120px]" src="/line.png" alt="" />
          </div>

          <div className="flex flex-col items-center">
            <div
              className="px-8 relative cursor-pointer"
              onClick={() => setSelected(4)}
            >
              <img
                className="h-[50px] mx-auto w-[50px] object-contain"
                alt=""
                src="./stackImg5.svg"
              />

              {selected == 4 && (
                <div className="h-32 w-full rounded-md bg-[#FFFFFF20] absolute -top-4 left-0" />
              )}

              <div className="text-white text-2xl font-semibold mt-4">
                Infrastructure
              </div>
            </div>

            <img className="h-[120px]" src="/line.png" alt="" />
          </div>
        </div>
        <div>
          {selected == 0 && (
            <div className="flex align-middle justify-between flex-wrap">
              <div className="text-left text-white mb-10 md:mb-0 w-screen  sm:w-[100%] lg:w-[50%] font-tabs">
                Our platforms top stack consists of commercially available
                products that, when combined with our underlying technology
                design, allow you to go online in days rather than months. Our
                expanding line of products includes telematics, travel, mobile,
                and e-commerce insurance as well as car underwriting, claims and
                support, and claims and assistance.
              </div>

              <dotlottie-player
                src="https://lottie.host/65276de9-f2fe-4594-ac5c-531bd5b5f6ad/Mu6RzDqGRQ.lottie"
                autoplay
                loop
                style={{ height: "30%", width: "40%" }}
              />
            </div>
          )}
          {selected == 1 && (
            <div className="flex align-middle justify-between flex-wrap ">
              <div className="text-left text-white mb-10 md:mb-0 sm:w-[100%] lg:w-[50%] font-tabs">
                Using both internal and external data sources, our rating engine
                enables insurers to rapidly underwrite risk and provide dynamic
                pricing for each policy insured. Better recursive patterns form
                as more data assemble, producing accurate risk assessment.
              </div>

              {/* <img src="/globecard.png" className="w-4/12" /> */}
              <dotlottie-player
                src="https://lottie.host/d4da8510-8e77-4923-89d0-9cef666c66f8/i9zlQ5FSKO.lottie"
                autoplay
                loop
                style={{ height: "30%", width: "30%" }}
              />
            </div>
          )}

          {selected == 2 && (
            <div className="flex justify-between align-middle mx-auto flex-wrap">
              <div className="text-left  text-white mb-10 md:mb-0 sm:w-screen lg:w-6/12 w-screen font-tabs">
                An API-led distribution layer may embed and disseminate policies
                over any channel thanks to our architecture. At every level of
                the distribution stack, whether it be through direct
                integrations, SDKs, chatbots, mini-apps, or white-labeled apps,
                we operate and optimise. Customer onboarding is made simple by
                our digital identification, KYC, and payments processes.
              </div>

              <dotlottie-player
                src="https://lottie.host/dc8c4359-ea18-47ec-8391-6c758b4321bb/yh0HucH5lj.lottie"
                autoplay
                loop
                style={{ height: "40%", width: "40%" }}
              />
            </div>
          )}
          {selected == 3 && (
            <div className="flex align-middle justify-between flex-wrap">
              <div className="text-left text-white mb-10 md:mb-0  sm:w-[100%] lg:w-[50%] font-tabs">
                Our engine manages all claims, whether parametric, assisted, or
                self-service, using algorithmic triage protocols, video, and
                deep learning for a quicker and more precise resolution. Loss
                adjusters, repairers, assistance, and payments are all part of
                our extensive ecosystem, which provides a one-stop shop for the
                claims journey.
              </div>

              <dotlottie-player
                src="https://lottie.host/c2f6a48c-3ca5-4a2a-bb47-b4aee1f4f913/jg6HD8w6Jh.lottie"
                autoplay
                loop
                style={{ height: "30%", width: "30%" }}
              />
            </div>
          )}
          {selected == 4 && (
            <div className="flex align-middle justify-between flex-wrap">
              <div className="text-left text-white mb-10 md:mb-0  sm:w-[100%] lg:w-[50%] font-tabs">
                Our infrastructure is cloud-based and offers security,
                scalability, and reliability. Our systems are extremely scalable
                and redundant, and they function with 99.8%+ uptime.
                Fidem.ai has earned the highest compliance certifications.
              </div>
              <dotlottie-player
                src="https://lottie.host/8e7915b1-bb25-482f-a4d9-2f8231ae2407/6aGk3VFJwM.lottie"
                autoplay
                loop
                style={{ height: "40%", width: "50%" }}
              />
            </div>
          )}
        </div>

        {/* <div className="w-full md:px-10 hidden md:flex">
          <div className="w-1/2 pr-14">
            <div className="text-left text-2xl px-4 text-white mb-10 md:mb-0">
              The top stack of our platform is off-the-shelf products that
              enable you to go live in days, not months utilizing our underlying
              technology architecture. Our growing suite of products include
              auto underwriting, claims and assistance, telematics, travel,
              mobile and e-commerce insurance - all in an integrated, open,
              real-time platform.
            </div>
          </div>
          <div className="w-1/2">
            <img src="/globecard.png" className="w-full" />
          </div>
        </div> */}
      </section>

      <section className="md:min-h-[50vh] mt-20 md:mt-0 px-4 flex justify-between align-middle flex-col">
        <div className="flex justify-center text-center font-semibold text-white text-3xl">
          <h>Remove Insurance Complexity</h>
        </div>
        <div className=" flex justify-center align-middle flex-wrap">
          <p className="text-center lg:w-[40vw] md:w-[50vw] mx-4 text-white pt-6 text-base">
            To help our clients accomplish more with less resources, we
            integrate with internal and external data providers, core systems,
            payment platforms, and distribution partners. Instead than spending
            months piecing together several IT systems, our clients integrate
            using an API or SDK. We are certain to be prepared to deliver from
            Day One thanks to a plugged-in ecosystem of repair networks and
            providers.
          </p>
          {/* <Lottie
            loop
            animationData={MobilityLottie}
            play
            className="lottieFile3 "
          /> */}
          <dotlottie-player
            src="https://lottie.host/465d4475-7818-471d-8632-0cb9d0fd9046/Fddg8Yckhp.lottie"
            autoplay
            loop
            style={{ height: "40%", width: "40%" }}
          />
        </div>
      </section>

      <section className="mb-10 md:mb-20">
        <img className="w-screen mt-20" alt="" src="../bg2.png" />
      </section>

      <Footer />
    </div>
  );
}

export default React.memo(Index);
