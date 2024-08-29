import Image from "next/image";
import tickcircle from "../assests/tickcircle.svg";
import fb from "../assests/fb.png";
import insta from "../assests/insta.png";
import telegram from "../assests/telegram.png";
import dscrd from "../assests/dscrd.png";
import thred from "../assests/thred.png";
import x from "../assests/x.png";
import youtube from "../assests/youtube.png";
import xlogo2 from "../assests/xlogo2.png";
import xlogo from "../assests/xlogo.png";
import iphone from "../assests/iphone.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";


function Home() {
  return (
    <>
      <div className="relative text-white xl:mt-28 lg:mt-24 px-8  xl:px-32 lg:px-24  py-2 ">
        <div className="lg:flex mt-10 lg:justify-between lg:items-start md:flex md:flex-col lg:flex-row ">
          {/* Left Content (tickcircle to button) */}
          <div className="lg:flex-1 lg:max-w-[50%]">
            <div className=" xl:space-x-5 justify-center lg:justify-start  flex   flex-row space-x-3">
              <div className="flex items-center xl:space-x-3 space-x-1">
                <Image src={tickcircle} alt="tick" width={20} />
                <div className="xl:text-lg lg:text-xs text-xs font-thin">
                  Audited
                </div>
              </div>
              <div className="flex items-center xl:space-x-3 space-x-1">
                <Image src={tickcircle} alt="tick" width={20} />
                <div className="xl:text-lg lg:text-xs text-xs font-thin">
                  Secured
                </div>
              </div>
              <div className="flex items-center xl:space-x-3 space-x-1">
                <Image src={tickcircle} alt="tick" width={20} />
                <div className="xl:text-lg lg:text-xs text-xs font-thin">
                  Verified
                </div>
              </div>
              <div className="flex items-center xl:space-x-3 space-x-1">
                <Image src={tickcircle} alt="tick" width={20} />
                <div className="xl:text-lg lg:text-xs text-xs font-thin">
                  Licensed
                </div>
              </div>
            </div>

            <div className="xl:text-6xl md:text-5xl text-4xl font-normal  tracking-[-0.02em] lg:text-left text-center mt-5">
              Future Finance, <br /> Built on Blockchain
            </div>

            <div className="xl:text-lg lg:text-xs mt-2 font-normal leading-[24.6px] lg:text-left text-center">
              Unified app and token for CeFi, DeFi and Banking.
            </div>
            <div className=" flex justify-center lg:justify-start ">
              <Button className="bg-white text-black md:text-lg rounded-lg hover:bg-white/100 xl:w-[175px] xl:h-[44px] hover:shadow-2xl hover:shadow-white mt-5">
                Whitepaper
              </Button>
              <Image
                src={xlogo}
                alt="phone"
                className="object-contain lg:mx-52 xl:mx-64   hidden lg:block"
                width={120}
              />
            </div>

            <h1 className="mt-5 lg:-mt-10  md:text-xl lg:text-sm font-medium flex justify-center lg:justify-start">
              Follow Us:
            </h1>
            <div className="flex  mt-5 lg:-mt-5   justify-center lg:justify-start">
              <div className="flex space-x-5 ">
                <div className="flex items-center ">
                  <Image
                    src={fb}
                    alt="tick"
                    width={20}
                    className="cursor-pointer"
                  />
                </div>
                <div className="flex items-center ">
                  <Link
                    href=" https://www.instagram.com/officialbxnk?igsh=MWlheGM0dmw1bWVlcg==
"
                  >
                    <Image src={insta} alt="tick" width={20} />
                  </Link>{" "}
                </div>
                <div className="flex items-center ">
                  <Image
                    src={thred}
                    alt="tick"
                    width={20}
                    className="cursor-pointer"
                  />
                </div>
                <div className="flex items-center ">
                  <Link href="https://www.youtube.com/channel/UCD3S8Cb2vuag3CgeqBNyJVg">
                    {" "}
                    <Image src={youtube} alt="tick" width={20} />
                  </Link>
                </div>
                <div className="flex items-center ">
                  <Link href="https://x.com/OpsBxnk">
                    <Image src={x} alt="tick" width={20} />
                  </Link>
                </div>
                <div className="flex items-center ">
                  <Link href=" https://discord.gg/URRv3FUc">
                    <Image src={dscrd} alt="tick" width={26} />
                  </Link>
                </div>
                <div className="flex items-center">
                  <Image
                    src={telegram}
                    alt="tick"
                    width={26}
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <Image
                src={xlogo2}
                alt="phone"
                className="object-contain hidden lg:block xl:ml-16 lg:ml-8"
                width={100}
              />
            </div>
          </div>

         
          <div className=" lg:flex-1 lg:flex lg:justify-end ">
            <Image
              src={iphone}
              alt="phone"
              className="object-contain xl:-mt-32 lg:-mt-28 mt-12"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
