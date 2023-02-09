import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-scroll";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useNetwork,
  useSwitchNetwork,
} from "wagmi";

export default function Header() {
  const [small, setSmall] = useState(true);
  const [base, setBase] = useState(false);
  const [border, setBorder] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [offset, setOffset] = useState(0);

  const switchButton = useRef(null);

  const { address, connector, isConnected } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();
  const { chain } = useNetwork();
  const { chains, pendingChainId, switchNetwork } = useSwitchNetwork();
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setSmall(window.pageYOffset <= 300);
        setBorder(window.pageYOffset > 700);
        if (window.pageYOffset > 300 && window.pageYOffset < 800) {
          setBase(true);
          setSmall(false);
          setOffset(window.pageYOffset / 70);
        } else if (window.pageYOffset <= 300) {
          setBase(false);
          setSmall(true);
        }
      });
      window.addEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    }
  }, []);

  const Links = [
    { name: "Home", link: "home" },
    { name: "The Tribe", link: "tribe" },
    { name: "RoadMap", link: "roadmap" },
    { name: "Team", link: "team" },
    { name: "Collections", link: "collections" },
    { name: "Connect", link: "" },
  ];

  const showlinks = (e) => {
    const navMenu2 = document.querySelector("#navMenu2");
    const hamburger = document.querySelector("#hamburger");
    const close = document.querySelector("#close");

    if (hamburger.classList.contains("hidden")) {
      hamburger.classList.remove("hidden");
    } else {
      close.classList.remove("hidden");
    }

    e.currentTarget.classList.add("hidden");

    if (navMenu2.classList.contains("hidden")) {
      navMenu2.classList.remove("hidden");
      navMenu2.classList.add("flex");
    } else {
      navMenu2.classList.add("hidden");
      navMenu2.classList.remove("flex");
    }
  };

  return (
    <>
      <nav
        style={{
          marginLeft: base ? `${offset + "px"}` : "0px",
          marginTop: base ? `${offset + "px"}` : "0px",
          width: base ? `${width - offset * 4 + "px"}` : "",
          paddingLeft: base ? `${offset * 3 + "px"}` : "0px",
          paddingRight: base ? `${offset * 3 + "px"}` : "0px",
        }}
        className={`${small ? "relative w-full z-20 max-h-14" : ""} ${
          base ? "fixed z-20" : ""
        }`}
      >
        {switchNetwork && chain?.id != 1 ? (
          <div className="button-container mr-4 invisible">
            {chains.map((x) =>
              x.id === 1 ? (
                <button
                  key={x.id}
                  ref={switchButton}
                  className="connect_wallet button-primary uppercase small w-button font-normal bg-gray-900 "
                  onClick={() => switchNetwork(x.id)}
                >
                  {x.id} Switch to {x.name}
                </button>
              ) : null
            )}
          </div>
        ) : null}

        <div
          style={{
            borderRadius: base ? `${offset * 4 + "px"}` : "",
            paddingBottom: base ? `${offset * 2 + "px"}` : "",
            paddingTop: base ? `${offset * 2 + "px"}` : "",
          }}
          className={`bg-black text-white px-10 sm:px-20 py-2 sm:py-4 flex justify-between items-center ${
            border ? "border-4 border-white" : ""
          }`}
        >
          <h3 className="text-lg text-[#ff7733]">
            3<span className="text-[#18C619]">METAD</span>
          </h3>
          <div className="md:hidden my-auto">
            <button
              id="hamburger"
              onClick={showlinks}
              className="w-9 h-10 lg:hidden"
            >
              <div className="border border-white mb-4"></div>
              <div className="border border-white"></div>
            </button>
            <button
              id="close"
              onClick={showlinks}
              className="hidden w-9 h-10 lg:hidden relative"
            >
              <div className="border border-white absolute w-full transition ease-in-out duration-500 rotate-45"></div>
              <div className="border border-white absolute w-full transition ease-in-out duration-500 -rotate-45"></div>
            </button>
          </div>
          <div id="navMenu" className="hidden md:block min-w-max">
            <ul className="md:flex items-center justify-between space-x-3 lg:space-x-5 xl:w-[45rem] max-w-[45rem] lg:font-semibold">
              <li className="hidden"></li>
              {Links.map((link) => (
                <li key={link.name} className="group h-5">
                  {link.name == "Connect" ? (
                    isConnected ? (
                      <button onClick={disconnect} className="">
                        Disconnect
                      </button>
                    ) : (
                      <button onClick={() => setShowModal(true)} className="">
                        Connect
                      </button>
                    )
                  ) : (
                    <Link
                      className="cursor-pointer"
                      to={link.link}
                      smooth={true}
                    >
                      {link.name}
                    </Link>
                  )}
                  <div className="w-0 border-[#FF7733] transition-[width] ease-in duration-500 group-hover:w-full group-hover:border-2"></div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          id="navMenu2"
          className="hidden flex-col items-center bg-[#35353ff2] rounded-[20px] m-2 py-8 min-w-max"
        >
          <ul className="md:hidden text-2xl font-semibold text-center">
            <li className="hidden"></li>
            {Links.map((link) => (
              <li key={link.name} className="m-6">
                {link.name == "Connect" ? (
                  isConnected ? (
                    <button
                      onClick={() => {
                        document.querySelector("#close").click();
                        disconnect();
                      }}
                      className=""
                    >
                      Disconnect
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        document.querySelector("#close").click();
                        setShowModal(true);
                      }}
                      className=""
                    >
                      Connect
                    </button>
                  )
                ) : (
                  <Link
                    onClick={() => document.querySelector("#close").click()}
                    className="cursor-pointer"
                    to={link.link}
                    smooth={true}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <button onClick={() => document.querySelector("#close").click()} className="bg-[#ff7733] px-4 py-2 rounded-[20px] text-sm font-semibold">
            Contact Us
          </button>
        </div>
      </nav>

      {/* modal */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 w-[350px] text-black font-saira rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between py-2 px-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl mb-0 font-semibold">Select Wallet</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {connectors
                    .filter((x) => x.ready && x.id !== connector?.id)
                    .map((x) => (
                      <>
                        {/* <p>{x.id}</p> */}
                        <button
                          className="w-full flex justify-center items-center mb-4 bg-slate-100 py-2 font-medium rounded-2xl"
                          key={x.id}
                          onClick={async () => {
                            await connect({ connector: x });
                            await setShowModal(false);
                            await sleep(4000);
                            if (switchButton.current)
                              await switchButton.current.click();
                          }}
                        >
                          {x.name == "MetaMask" ? (
                            <img
                              src="/walletImages/metamask.webp"
                              className="w-8 mr-3"
                              alt="walletImg"
                            />
                          ) : null}
                          {x.name == "WalletConnect" ? (
                            <img
                              src="/walletImages/WalletConnect-Emblem.png"
                              className="w-8 mr-3"
                              alt="walletImg"
                            />
                          ) : null}
                          {x.name == "Coinbase Wallet" ? (
                            <img
                              src="/walletImages/coinbase.png"
                              className="w-8 mr-3"
                              alt="walletImg"
                            />
                          ) : null}
                          {x.name}
                          {isLoading &&
                            x.id === pendingConnector?.id &&
                            " (connecting)"}
                        </button>
                      </>
                    ))}
                  <>
                    {connectors
                      .filter((x) => x.ready && x.id !== connector?.id)
                      .map((x) =>
                        x.name == "WalletConnect" ? (
                          <button
                            className="w-full lg:hidden flex justify-center items-center mb-4 bg-slate-100 py-2 font-medium rounded-2xl"
                            key={x.id}
                            onClick={async () => {
                              await connect({ connector: x });
                              await setShowModal(false);
                              await sleep(4000);
                              if (switchButton.current)
                                await switchButton.current.click();
                            }}
                          >
                            <img
                              src="/walletImages/metamask.webp"
                              className="w-8 mr-3"
                              alt="walletImg"
                            />
                            MetaMask
                            {isLoading &&
                              x.id === pendingConnector?.id &&
                              " (connecting)"}
                          </button>
                        ) : null
                      )}
                  </>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
