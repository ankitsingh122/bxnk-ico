import Image from "next/image";
import React from "react";
import Three from "../assests/Three.svg";
import s from "../assests/s.svg";
import Vector from "../assests/Vector.svg";
import crown from "../assests/crown.svg";
import walletadd from "../assests/walletadd.svg";
import people from "../assests/people.svg";
import mouse from "../assests/mouse.svg";
import Chain from "../assests/Chain.svg";
import status from "../assests/status.svg";

function Benefits() {
  return (
    <>
      <div className="xl:px-28 md:px-24 border-t border-gray-500 py-10 rounded-xl bg-black/55">
        <div className="text-white flex justify-center text-4xl">
          BXNK Token
        </div>
        <div className="flex flex-col items-center lg:flex-row justify-center lg:justify-between text-white space-x-5 mt-10">
          <div className="flex flex-col  items-center lg:items-start">
            <Image src={s} width={100} className="lg:-mt-2" alt="logo" />
            <div className="xl:mt-11 lg:mt-5 ">The Heart of Our Ecosystem</div>
            <div className="text-[12px] mt-2 text-gray-400 max-w-xs break-words text-center lg:text-start">
              The BXNK token is the driving force behind our platform. As a
              utility token built on Ethereum, it provides holders with
              exclusive benefits and powers the BXNK ecosystem.
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start mt-10 md:mt-0 ">
            <Image src={Chain} width={150} alt="logo" />
            <div className="   ">A Blockchain Platform</div>
            <div className="text-[12px] mt-2 text-gray-400 max-w-xs break-words text-center lg:text-start">
              BXNK offers a unified platform combining traditional finance and
              Web3. Our services include secure crypto trading, a user-friendly
              wallet, and banking solutions. Security, transparency, and user
              experience are our core values all in one easy to use app.
            </div>
          </div>
          <div className="flex flex-col  items-center lg:items-start mt-10 md:mt-0 lg:-mt-4">
            <Image src={Three} width={150} alt="logo" />
            <div className="xl:mt-4">Partner with us</div>
            <div className="text-[12px] mt-2 text-gray-400 max-w-xs break-words text-center lg:text-start">
              Owning BXNK tokens grants exclusive platform access and governance
              rights. Join us in shaping the future of finance. Invest in BXNK
              to become an active participant in building a new era of financial
              empowerment.
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-2 mt-28 text-white">
          <div className="lg:w-1/2 flex flex-col justify-between">
            <div className="lg:flex lg:flex-col text-white items-center lg:items-start">
              <div className="text-3xl flex justify-center lg:justify-start">
                Benefits of BXNK Token
              </div>
              <div className="text-xs mt-2 lg:mt-5 px-5 lg:px-0 text-gray-400 text-center lg:text-start my-10 lg:my-0">
                Owning BXNK tokens empowers you to be an active participant in
                the future of finance. As the lifeblood of our innovative
                platform, BXNK tokens unlock a world of opportunities and
                benefits:
              </div>
            </div>

            <div className="lg:flex lg:space-x-2 px-2 md:px-0">
              <div className="border border-gray-700 p-2 rounded-xl lg:w-full lg:h-40 xl:w-full hover:bg-gradient-to-r from-white to-sky-400 hover:text-black  flex flex-col ">
                <div className="bg-white rounded-full w-max p-2">
                  <Image src={status} alt="logo" />
                </div>
                <div className="mt-8 text-sm">Shared Growth</div>
                <div className="text-[9px] mt-1 ">
                  Directly benefit from the platform&apos;s success as BXNK
                  expands its reach and offerings in the global market.
                </div>
              </div>
              <div className="border p-2 border-gray-700 my-2 lg:my-0  rounded-xl lg:w-full lg:h-40 xl:w-full hover:bg-gradient-to-r from-white to-sky-400 hover:text-black flex flex-col ">
                <div className="bg-white rounded-full w-max p-2">
                  <Image src={walletadd} alt="logo"/>
                </div>
                <div className="mt-8 text-sm">Staking Rewards</div>
                <div className="text-[9px] mt-1">
                  Earn passive income by contributing to the platform&apos;s
                  security and stability through staking.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0 px-2 md:px-0">
            <div className="space-y-2">
              <div className="border p-2 border-gray-700 rounded-xl lg:w-full lg:h-40 xl:w-full hover:bg-gradient-to-r from-white to-sky-400 hover:text-black">
                <div className="bg-white rounded-full w-max p-2">
                  <Image src={mouse} alt="logo" />
                </div>

                <div className="mt-8 text-sm">Access & Privileges</div>
                <div className="text-[9px] mt-1">
                  Enjoy exclusive perks, including reduced fees, early access to
                  new features, and priority customer support.
                </div>
              </div>
              <div className="border p-2 border-gray-700 rounded-xl  lg:w-full lg:h-40 xl:w-full hover:bg-gradient-to-r from-white to-sky-400 hover:text-black">
                <div className="bg-white rounded-full w-max p-2">
                  <Image src={Vector} alt="logo" />
                </div>

                <div className="mt-8 text-sm">Exclusive Offerings</div>
                <div className="text-[9px] mt-1">
                  Gain access to limited-edition products, services, and
                  partnerships available only to token holders.
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="border p-2 border-gray-700 rounded-xl lg:w-full lg:h-40 xl:w-full hover:bg-gradient-to-r from-white to-sky-400 hover:text-black">
                <div className="bg-white rounded-full w-max p-2">
                  <Image src={crown} alt="logo" />
                </div>
                <div className="mt-8 text-sm">Governance Influence</div>
                <div className="text-[9px] mt-1">
                  Shape the future of BXNK through token-based voting on
                  significant platform decisions.
                </div>
              </div>
              <div className="border p-2 border-gray-700 rounded-xl lg:w-full lg:h-40 xl:w-full hover:bg-gradient-to-r from-white to-sky-400 hover:text-black">
                <div className="bg-white rounded-full w-max p-1">
                  <Image src={people} alt="logo" />
                </div>

                <div className="mt-8 text-sm">Community Membership</div>
                <div className="text-[9px] mt-1">
                  Join a thriving community of investors and innovators, sharing
                  in the excitement of building the future of finance together.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Benefits;
