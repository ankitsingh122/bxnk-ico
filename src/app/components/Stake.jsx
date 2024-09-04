import Image from "next/image";
import stakelg from "../assests/stakelg.svg";
import stakelg1 from "../assests/stakelg1.svg";
import stakelg2 from "../assests/stakelg2.svg";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Eth from "../assests/Eth.svg";

import Link from "next/link";

function Stake() {
  return (
    <>
      <div className="relative text-white  px-8 mb-16 xl:px-32 lg:px-24  py-10 ">
        <div className="flex ">
          <Image
            src={stakelg}
            alt="lg"
            width={150}
            className="ml-32 hidden lg:block"
          />
          <Image
            src={stakelg1}
            alt="lg"
            width={150}
            className="ml-32 xl:ml-56  hidden lg:block"
          />
        </div>

        <div className="lg:flex md:justify-between   lg:items-start md:flex md:flex-col lg:flex-row ">
          <div className="lg:flex-1 lg:max-w-[50%]">
            <div></div>
            <div className="xl:text-6xl md:text-5xl text-4xl font-normal  tracking-[-0.02em] lg:text-left text-center mt-5">
              Stake, Earn. <br /> Claim Rewards.
            </div>

            <div className="xl:text-sm lg:text-xs mt-2  leading-[24.6px] lg:text-left text-center">
              Stake your BXNK token and earn BXNK utility token as a reward. Our
              intuitive, easy to use interface will help you stake and earn
              today.
            </div>

            <div className=" flex justify-center lg:justify-start ">
              <Button className="bg-white my-10  text-black md:text-lg rounded-lg hover:bg-white/100 xl:w-[175px] xl:h-[44px] hover:shadow-2xl hover:shadow-white mt-5">
                Get started
              </Button>
              <Image
                src={stakelg2}
                alt="lg"
                width={200}
                className=" hidden lg:block -mt-72 ml-36 xl:ml-64 "
              />
            </div>
          </div>
          <div></div>
          <div className="flex flex-col md:flex-row  justify-between space-y-2 md:space-y-0 my-2 md:my-0 md:space-x-2">
            <div className="  w-full xl:w-56  p-3 bg-black text-white rounded-lg border border-gray-500">
              <div className="flex items-center space-x-2">
                {" "}
                <div className="bg-white p-1 rounded-full">
                  <Image src={Eth} width={20} alt="ethereum" />
                </div>
                <div>Ethereum</div>
              </div>

              <div className="text-xs my-2">Current staking APY</div>

              <Separator className="bg-white/20" />

              <div className="flex justify-between text-xs my-2 items-center">
                <span className="text-gray-300">3 Months</span>
                <span className="bg-gradient-to-r from-[#27CCE7] to-[#80E8F9] rounded-md px-2 py-1 text-black">
                  ≈ 12.01%*
                </span>
              </div>
              <div className="flex justify-between text-xs my-2 items-center">
                <span className="text-gray-300">1 Year</span>
                <span className="bg-gradient-to-r from-[#27CCE7] to-[#80E8F9] rounded-md px-2 py-1 text-black">
                  ≈ 19.21%*
                </span>
              </div>
              <div className="flex justify-between text-xs my-2 items-center">
                <span className="text-gray-300">2 Years</span>
                <span className="bg-gradient-to-r from-[#27CCE7] to-[#80E8F9] rounded-md px-2 py-1 text-black">
                  ≈ 28.81%*
                </span>
              </div>
              <div className="flex justify-between text-xs my-2 items-center">
                <span className="text-gray-300">4 Years</span>
                <span className="bg-gradient-to-r from-[#27CCE7] to-[#80E8F9] rounded-md px-2 py-1 text-black">
                  ≈ 38.42%*
                </span>
              </div>
              <Separator className="bg-white/20" />
              <div className="mt-2">ETH staked</div>
              <div className="text-[8px]">
                <span className="text-[#80E8F9] font-bold text-xl">
                  1.4 Trillion
                </span>
                ($178,364,096)
              </div>
            </div>{" "}
            <div className="  w-full xl:w-56  p-3 bg-black text-white rounded-lg border border-gray-500">
              <div className="flex items-center space-x-2">
                {" "}
                <div className="bg-white p-1 rounded-full">
                  <Image src={Eth} width={20} alt="ethereum" />
                </div>
                <div>Ethereum</div>
              </div>

              <div className="text-xs my-2">Current staking APY</div>

              <Separator className="bg-white/20" />

              <div className="flex justify-between text-xs my-2 items-center">
                <span className="text-gray-300">3 Months</span>
                <span className="bg-gradient-to-r from-[#27CCE7] to-[#80E8F9] rounded-md px-2 py-1 text-black">
                  ≈ 12.01%*
                </span>
              </div>
              <div className="flex justify-between text-xs my-2 items-center">
                <span className="text-gray-300">1 Year</span>
                <span className="bg-gradient-to-r from-[#27CCE7] to-[#80E8F9] rounded-md px-2 py-1 text-black">
                  ≈ 19.21%*
                </span>
              </div>
              <div className="flex justify-between text-xs my-2 items-center">
                <span className="text-gray-300">2 Years</span>
                <span className="bg-gradient-to-r from-[#27CCE7] to-[#80E8F9] rounded-md px-2 py-1 text-black">
                  ≈ 28.81%*
                </span>
              </div>
              <div className="flex justify-between text-xs my-2 items-center">
                <span className="text-gray-300">4 Years</span>
                <span className="bg-gradient-to-r from-[#27CCE7] to-[#80E8F9] rounded-md px-2 py-1 text-black">
                  ≈ 38.42%*
                </span>
              </div>
              <Separator className="bg-white/20" />
              <div className="mt-2">ETH staked</div>
              <div className="text-[8px]">
                <span className="text-[#80E8F9] font-bold text-xl">
                  1.4 Trillion
                </span>
                ($178,364,096)
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stake;
