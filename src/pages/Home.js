import React, { useEffect } from "react";
import { FaBirthdayCake, FaDiscord } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import Aos from "aos";
import { Parallax } from "react-parallax";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      delay: 200,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="bg-[url('img/darkforest.jpg')] h-[70vh] bg-cover bg-no-repeat bg-center flex flex-col">
        <div
          id="home"
          className="w-screen h-screen flex justify-center relative max-[800px]:top-[10%] lg:-top-[15%]"
        >
          <div className="flex flex-col text-center min-[800px]:text-left min-[800px]:flex-row justify-center items-center w-[90vw] m-auto pt-8">
            <div className="flex flex-col items-center mx-10 md:mx-0 min-[800px]:items-start md:w-full lg:w-1/2 relative md:z-10">
              <div className="flex items-center space-x-2 text-xs lg:text-sm bg-black rounded-3xl p-1 md:p-2">
                <div className="bg-[#ff7733] h-4 w-4 rounded-full"></div>
                <p>The tribe that connects</p>
              </div>
              <h1 className="text-[#ff7733] py-2 text-xl lg:text-5xl font-medium">
                3<span className="text-[#18C619]">META</span>D
              </h1>
              <h5 className="pb-8 xl:font-semibold text-xs sm:text-sm 2xl:text-lg">
                <Typewriter
                  options={{
                    strings: ["Games and Art.", "NFTs.", "Collectible Items."],
                    autoStart: true,
                    loop: true,
                  }}
                />
                <br />
                Our objective and promise is to create great material for our
                community and clients that depict and brings life to ideas,
                dreams, and goals of our community, staff, and clients, as well
                as any inspiration we encounter along the way.
              </h5>
              <button className="bg-[#18C619] text-sm md:text-base py-1 px-4 rounded-[20px] font-bold transition-transform duration-200 ease-in-out hover:scale-105">
                Browse Collection
              </button>
            </div>

            <div className="relative min-[800px]:pl-20 float z-10">
              <img
                className="h-40 sm:h-52 md:h-full"
                src="/img/3MetaD.png"
                alt="3MetaD"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen">
        <img
          className="w-full relative mb-40"
          src="/img/waves.svg"
          alt="waves"
        />
      </div>

      {/* mint */}
      <div className="flex justify-center items-center">
        <div className="mb-40 xl:mb-72 md:w-3/4 w-full xl:w-1/2 px-10 md:px-20">
          <div className="border-2 border-[#252525]">
            <div className="px-7">
              <p className="py-3 border-b-2 border-[#252525]">ETH</p>
              <div className="flex items-center justify-between">
                <p className="py-3 font-semibold">
                  0.05 ETH <small>(0.04 ETH for Ely Genesis Holders)</small>
                </p>
                <p className="py-3 opacity-70">LIVE</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full">
                <div
                  className="bg-[#2e082d] text-xs font-medium text-blue-100 text-center p-2 leading-none rounded-l-full"
                  style={{ width: "9.05%" }}
                >
                  {" "}
                </div>
              </div>
              <p className="text-xs py-3 opacity-70">181/2000 Minted</p>
              <div className="flex justify-center items-center">
                <button className="flex justify-center items-center h-11 w-11 bg-white text-black rounded-xl text-4xl font-semibold">
                  -
                </button>
                <p className="flex justify-center items-center text-lg h-11 w-11 border-4 rounded-xl mx-5 border-[#ffffff]">
                  1
                </p>
                <button className="flex justify-center items-center h-11 w-11 bg-white text-black rounded-xl text-4xl font-semibold">
                  +
                </button>
              </div>
              <button
                className="p-3 rounded-xl my-5 border-l-2 border-[#252525] bg-white text-[#000000] w-full"
                disabled=""
              >
                MINT NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* about */}
      <div className="mx-20 lg:mx-40 xl:mx-60 flex flex-col justify-center">
        <div id="tribe">
          <h1 className="block py-5 sm:py-0 text-center sm:inline-block text-3xl font-bold">
            The Tribe
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex sm:w-2/5 place-content-center floatxy">
            <img className="h-auto w-full" src="/img/tribe.png" alt="tribe" />
          </div>

          <div className="relative sm:w-1/2 bg-[#ffffff26] rounded-2xl backdrop-blur-[5px]">
            <div className="hidden sm:block absolute w-1/2 right-0 bottom-[98%]">
              <img className="w-full h-auto" src="/img/vr.svg" alt="human" />
            </div>

            <h4 className="p-4 sm:text-base md:text-lg lg:text-[26px] font-bold">
              Our tribe is a pool of brilliant minds from many disciplines such
              as 3D artists, concept artists, game developers, graphic
              designers, community moderators, front developers, and blockchain
              developers from all over the world. <br />
              <br />
              We banded together to bring high-quality 3D content to the
              Metaverse and NFT Space, as well as self-publish our own
              collections, games and items. A 3D metaverse-driven company that
              provides users with products ranging from Mini games, 3D and
              physical merchandise, In-game merchandise, characters,
              architectures, and custom orders.
            </h4>

            <div className="p-4">
              <span className="h-4 w-4 rounded-full bg-red-800 inline-block mt-4 mr-2"></span>
              <span className="h-4 w-4 rounded-full bg-green-600 inline-block mt-4 mr-2"></span>
              <span className="h-4 w-4 rounded-full bg-orange-600 inline-block mt-4 mr-2"></span>
            </div>
          </div>
        </div>
      </div>

      {/* roadmap  */}
      <div id="roadmap" className="mt-16 relative">
        <div>
          <h1 className="inline-block ml-8 text-3xl font-bold">Roadmap</h1>
        </div>

        <div className="h-[100%] border-2 absolute left-7 min-[1180px]:left-[50.3%]"></div>

        <div className="mx-auto max-w-[1170px] py-[2em] relative">
          <div className="relative">
            <span
              data-aos="zoom-in"
              data-aos-delay="500"
              className="bg-[#ff7733] h-[60px] w-[60px] inline-flex justify-center items-center rounded-full border-white border-4 absolute min-[1180px]:left-[48%]"
            >
              <FaBirthdayCake className="text-2xl" />
            </span>

            <div
              data-aos="fade-right"
              className="relative bg-gradient-to-r from-[#7a300b] to-[#ff7733] ml-20 mr-5 min-[1180px]:ml-0 min-[1180px]:mr-0 min-[1180px]:w-[44%] p-[1.5em] rounded border-b-2"
            >
              <div className="absolute -left-4 rotate-180 min-[1180px]:rotate-0 min-[1180px]:left-[98%] top-6">
                <IoMdArrowDropright className="text-2xl" />
              </div>

              <h3 className="text-xl font-bold">Website Launch</h3>

              <h4>🎉🎉🎉</h4>

              <p className="mt-[1em]">Assembling of team members.</p>

              <span className="hidden min-[1180px]:block absolute w-full left-[124%] top-4">
                2022 - Q1
              </span>
            </div>
          </div>

          <div className="relative my-[4em] overflow-hidden">
            <span
              data-aos="zoom-in"
              className="bg-[#a60404] h-[60px] w-[60px] inline-flex justify-center items-center rounded-full border-white border-4 absolute min-[1180px]:left-[48%]"
            >
              <FaBirthdayCake className="text-2xl" />
            </span>

            <div
              data-aos="fade-left"
              className="relative bg-gradient-to-r from-[#2e0804] to-[#de1610] ml-20 mr-5 min-[1180px]:ml-0 min-[1180px]:mr-0 min-[1180px]:w-[44%] p-[1.5em] rounded border-b-2 min-[1180px]:float-right"
            >
              <div className="absolute right-[99.1%] min-[1180px]:right-[98%] rotate-180 top-6">
                <IoMdArrowDropright className="text-2xl" />
              </div>

              <h3 className="text-xl font-bold">Website Launch</h3>

              <h4>🎉🎉🎉</h4>

              <p className="mt-[1em]">Assembling of team members.</p>

              <span className="hidden min-[1180px]:block absolute w-full right-[124%] text-right top-4">
                2022 - Q1
              </span>
            </div>
          </div>

          <div className="relative">
            <span
              data-aos="zoom-in"
              className="bg-[#ff7733] h-[60px] w-[60px] inline-flex justify-center items-center rounded-full border-white border-4 absolute min-[1180px]:left-[48%]"
            >
              <FaBirthdayCake className="text-2xl" />
            </span>

            <div
              data-aos="fade-right"
              className="relative bg-gradient-to-r from-[#7a300b] to-[#ff7733] mr-5 ml-20 min-[1180px]:ml-0 min-[1180px]:mr-0 min-[1180px]:w-[44%] p-[1.5em] rounded border-b-2"
            >
              <div className="absolute -left-4 rotate-180 min-[1180px]:rotate-0 min-[1180px]:left-[98%] top-6">
                <IoMdArrowDropright className="text-2xl" />
              </div>

              <h3 className="text-xl font-bold">Website Launch</h3>

              <h4>🎉🎉🎉</h4>

              <p className="mt-[1em]">Assembling of team members.</p>

              <span className="hidden min-[1180px]:block absolute w-full left-[124%] top-4">
                2022 - Q1
              </span>
            </div>
          </div>

          <div className="relative my-[4em] overflow-hidden">
            <span
              data-aos="zoom-in"
              className="bg-[#a60404] h-[60px] w-[60px] inline-flex justify-center items-center rounded-full border-white border-4 absolute min-[1180px]:left-[48%]"
            >
              <FaBirthdayCake className="text-2xl" />
            </span>

            <div
              data-aos="fade-left"
              className="relative bg-gradient-to-r from-[#2e0804] to-[#de1610] mr-5 ml-20 min-[1180px]:ml-0 min-[1180px]:mr-0 min-[1180px]:w-[44%] p-[1.5em] rounded border-b-2 min-[1180px]:float-right"
            >
              <div className="absolute right-[99.1%] min-[1180px]:right-[98%] rotate-180 top-6">
                <IoMdArrowDropright className="text-2xl" />
              </div>

              <h3 className="text-xl font-bold">Website Launch</h3>

              <h4>🎉🎉🎉</h4>

              <p className="mt-[1em]">Assembling of team members.</p>

              <span className="hidden min-[1180px]:block absolute w-full right-[124%] text-right top-4">
                2022 - Q1
              </span>
            </div>
          </div>

          <div className="relative">
            <span
              data-aos="zoom-in"
              className="bg-[#a60404] h-[60px] w-[60px] inline-flex justify-center items-center text-center rounded-full border-white border-4 absolute min-[1180px]:left-[48%]"
            >
              <p className="text-xs p-2">the end</p>
            </span>
            <div className="h-[50px] overflow-hidden"></div>
          </div>
        </div>
      </div>

      {/* Parallax */}
      <div id="img-w">
        <div className="group">
          <Parallax
            bgImage="/img/metachar.jpg"
            bgImageAlt="bgstar"
            strength={500}
          >
            <div className="h-[500px]">
              <Parallax
                renderLayer={(percentage) => (
                  <div
                    id="img-w2"
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "72%",
                      transform: "translate(-50%,-50%)",
                      width: percentage * 800,
                      height: percentage * 800,
                    }}
                  >
                    <img
                      className="bg-[rgba(255,255,255,0.145)] rounded-[80px] m-[15px] transition duration-700 group-hover:shadow-[0_20px_30px_rgba(0,0,0,0.2),0_80px_80px_rgba(255,255,255,0.8)_inset,300px_0_200px_rgba(255,119,51,1)_inset,-300px_0_200px_rgba(43,168,5,1)_inset,-300px_0_200px_rgba(0,227,4,1)_inset]"
                      src="/img/3MetaD.png"
                      alt="3dmetad"
                    />
                  </div>
                )}
              >
                <div className="h-[500px]"></div>
              </Parallax>
            </div>
          </Parallax>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0a0b10"
            fillOpacity="1"
            d="M0,96L40,101.3C80,107,160,117,240,122.7C320,128,400,128,480,144C560,160,640,192,720,202.7C800,213,880,203,960,170.7C1040,139,1120,85,1200,74.7C1280,64,1360,96,1400,112L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* title */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="inline-block text-3xl font-bold ml-8">Team</h1>
      </div>

      <section
        id="team"
        className="grid grid-cols-1 grid-rows-1 sm:grid-cols-3 sm:grid-rows-2 p-20"
      >
        <div>
          <div className="bg-red-800 h-[150px] w-[150px] rounded-[100px] mx-auto mb-12 pt-[10px]">
            <div className="w-[130px] h-[130px] ml-[10px] relative overflow-hidden rounded-[100px] group">
              <img src="/img/avatar.jpg" alt="avatar" />

              <ul className="absolute text-center top-0 h-[130px] w-[130px] rounded-[100px] bg-gradient-to-br from-[#29323c] to-[#485563] opacity-80 -left-40 transition-all duration-300 group-hover:-left-0">
                <li className="inline-block mx-[3px] mt-[67px]">
                  <a className="text-white text-lg" href="">
                    <BsTwitter />
                  </a>
                </li>
                <li className="inline-block mx-[3px] mt-[67px]">
                  <a className="text-white text-lg" href="">
                    <BsLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <h3 className="text-[#d9e3eb] font-medium text-center leading-[30px] tracking-[1px]">
            Colombia Orc
          </h3>
          <span className="block text-[#b1c2d1] text-xs font-normal text-center">
            Owner & Artist
          </span>
        </div>
      </section>

      {/* Connect */}
      <div id="connect" className="flex flex-col justify-center items-center">
        <h1 className="inline-block text-3xl font-semibold sm:ml-8">
          Connect!
        </h1>
        <div className="flex justify-center items-center h-[30vh] my-5 sm:my-0">
          <a
            className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-[10px] m-[15px] flex justify-center items-center text-[#ffffff56] text-[5em] relative bg-[#ffffff25] transition shadow-[0_20px_20px_rgba(0,0,0,0.2),0_20px_20px_rgba(253,253,253,0.2)_inset] hover:shadow-[0_20px_20px_rgba(0,0,0,0.2),0_20px_10px_rgba(255,255,255,0.8)_inset,35px_0_35px_rgba(255,119,51,1)_inset,-20px_0_20px_rgba(43,168,5,1)_inset,-35px_0_25px_rgba(0,227,4,1)_inset] hover:text-white hover:-translate-y-3 duration-500"
            href=""
          >
            <BsInstagram />
          </a>
          <a
            className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-[10px] m-[15px] flex justify-center items-center text-[#ffffff56] text-[5em] relative bg-[#ffffff25] transition shadow-[0_20px_20px_rgba(0,0,0,0.2),0_20px_20px_rgba(253,253,253,0.2)_inset] hover:shadow-[0_20px_20px_rgba(0,0,0,0.2),0_20px_10px_rgba(255,255,255,0.8)_inset,35px_0_35px_rgba(255,119,51,1)_inset,-20px_0_20px_rgba(43,168,5,1)_inset,-35px_0_25px_rgba(0,227,4,1)_inset] hover:text-white hover:-translate-y-3 duration-500"
            href=""
          >
            <BsTwitter />
          </a>
          <a
            className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-[10px] m-[15px] flex justify-center items-center text-[#ffffff56] text-[5em] relative bg-[#ffffff25] transition shadow-[0_20px_20px_rgba(0,0,0,0.2),0_20px_20px_rgba(253,253,253,0.2)_inset] hover:shadow-[0_20px_20px_rgba(0,0,0,0.2),0_20px_10px_rgba(255,255,255,0.8)_inset,35px_0_35px_rgba(255,119,51,1)_inset,-20px_0_20px_rgba(43,168,5,1)_inset,-35px_0_25px_rgba(0,227,4,1)_inset] hover:text-white hover:-translate-y-3 duration-500"
            href=""
          >
            <FaDiscord />
          </a>
        </div>
      </div>

      {/* copyright */}
      <div className="text-[#18c619] text-center">
        © 2023
        <span className="text-[#ff7733]"> 3</span>
        META
        <span className="text-[#ff7733]">D</span>
      </div>
    </>
  );
}
