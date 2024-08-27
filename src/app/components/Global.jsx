import { Button } from "@/components/ui/button";
import buycrypto from "../assests/buycrypto.svg";
import Four from "../assests/Four.svg";
import Wallet from "../assests/Wallet.svg";
import any from "../assests/any.svg";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import blur from "../assests/blur.svg"

function Global() {
  return (
    <>
      <div className="lg:px-24 xl:px-32 px-10 py-10 shadow-2xl rounded-lg shadow-sky-500 font-">
        <div className=" text-white bg-black my-10 p-4 rounded-3xl border-t border-l border-t-gray-500 border-l-gray-500 px-10 lg:px-0  lg:pl-10 pt-10">
          <div className="flex flex-col lg:flex-row lg:justify-between  items-center">
            <div> 
              <div className="lg:text-4xl text-4xl text-center md:text-start  font-medium">
                  Join the fastest growing global phenomena
              </div>
              <div className="text-xs my-2 text-center md:text-start text-gray-400 flex justify-center md:justify-start py-2">
                A decentralized, distributed Blockchain system providing
                businesses
              </div>
              <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start py-2 space-y-3 md:space-y-0  lg:px-0">
                <div className="flex flex-col md:border-l md:px-4   border-l-white/30 items-center md:items-start">
                  <div className="lg:text-3xl text-4xl ">29,7M</div>
                  <div className="lg:text-[9px] text-[10px]  text-gray-400">
                    Transitions per minute
                  </div>
                </div>
                <div className="flex flex-col md:border-l md:px-4  border-l-white/30 border-r-gray-500 items-center md:items-start">
                  <div className="lg:text-3xl text-4xl ">340M+</div>
                  <div className="lg:text-[9px]  text-[10px] text-gray-400">
                    Users
                  </div>
                </div>
                <div className="flex flex-col md:border-l md:px-4  border-l-white/30 border-r-gray-500 items-center md:items-start">
                  <div className=" lg:text-3xl text-4xl">
                    $ 0.00064
                  </div>

                  <div className="lg:text-[9px] text-[10px] text-gray-400">
                    Fee per transaction
                  </div>
                </div>

                <div className="flex flex-col items-center md:border-l border-l-white/30 md:px-4 md:items-start">
                  <div className="lg:text-3xl text-4xl ">1,3M</div>
                  <div className="lg:text-[9px] text-[10px]  text-gray-400">
                    Projects build
                  </div>
                </div>
              </div>
              <div className="flex justify-center lg:justify-start">
                <Button className="bg-white text-black hover:bg-white/100  lg:text-xs hover:shadow-2xl hover:shadow-white my-5">
                  Invest in ICO{" "}
                  <span className="xl:px-2 ml-1">
                    <Image src={buycrypto} alt="crypto" />
                  </span>
                </Button>
              </div>
            </div>
            <Image src={Four} width={250} alt="logo" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <Image
              src={Wallet}
              width={300}
              alt="logo"
              className="hidden lg:block"
            />
          </div>
          <div className="text-white">
            <div className="flex justify-center text-4xl">Connect wallet</div>
            <div className="text-xs flex justify-center text-center my-5">
              Earn more BXNK by referring your friends and community. Share your
              unique link below and receive 10% of all transactions realized
              with your link instantly.
            </div>
            <div className=" ">
              <div className="flex flex-col md:flex-row items-center justify-center space-x-4">
                <div>
                  <input
                    type="text"
                    placeholder="Connect wallet for referral link"
                    className="bg-transparent border border-gray-500 rounded-lg px-2 w-60 h-8 text-xs "
                  />
                </div>
                <div className="">
                  <Button className="bg-white text-black hover:bg-white/100 my-5  mr-4  lg:text-xs hover:shadow-2xl hover:shadow-white w-60 md:w-20 h-8">
                    Copy
                  </Button>
                </div>
              </div>
            </div>
            {/* <div className="flex justify-end">
              <Image src={blur} alt="blur" width={20} className=" " />
            </div> */}
          </div>
          <div>
            <Image src={any} className="hidden lg:block" alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Global;
