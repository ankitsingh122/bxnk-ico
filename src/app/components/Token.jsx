import React from "react";
import { Separator } from "@/components/ui/separator";

function Token() {
  return (
    <>
      <div className="rounded-xl lg:px-24 xl:px-32 py-10 bg-black/50 shadow-2xl ">
        <div className="text-white flex justify-center lg:justify-start  text-4xl">
          Tokenomics
        </div>
        <div className="flex lg:flex-row flex-col lg:justify-between my-10 mx-20 lg:mx-0">
          <div className=" lg:w-1/3 w-full   p-4 bg-black text-white rounded-lg border border-gray-500">
            <div className="flex justify-between text-xs my-2">
              <span className="text-gray-300">Token Name</span>
              <span className="font-semibold">BXNK</span>
            </div>
            <Separator className="bg-white/20" />

            <div className="flex justify-between text-xs my-2">
              <span className="text-gray-300">Token Price</span>
              <span className="font-semibold">0,40 USD</span>
            </div>
            <Separator className="bg-white/20" />
            <div className="flex justify-between text-xs my-2">
              <span className="text-gray-300">Blockchain</span>
              <span className="font-semibold">Ethereum ERC - 20</span>
            </div>
            <Separator className="bg-white/20" />
            <div className="flex justify-between text-xs my-2">
              <span className="text-gray-300">Total Supply</span>
              <span className="font-semibold">500,000,000</span>
            </div>
            <Separator className="bg-white/20" />
            <div className="flex justify-between text-xs my-2">
              <span className="text-gray-300">Presale price</span>
              <span className="font-semibold">0,22 USD</span>
            </div>
            <Separator className="bg-white/20" />
            <div className="flex justify-between text-xs my-2">
              <span className="text-gray-300">Public sale price</span>
              <span className="font-semibold">0,40 USD</span>
            </div>
          </div>
          <div className="lg:w-2/3 lg:pl-10 flex flex-col justify-center  lg:justify-between">
            <div className="text-white text-2xl flex justify-center lg:justify-start my-8  lg:my-0">
              Token distribution
            </div>
            <div className="space-y-8">
              <div className="relative h-5 rounded-xl overflow-hidden">
                <div className="absolute top-0 left-0 w-[14%] h-full bg-[rgba(225,15,126,1)] rounded-l-full shadow-[0_0_10px_2px_rgba(225,15,126,0.8)]"></div>
                <div className="absolute top-0 left-[10%] w-[19%] h-full bg-[rgba(5,147,118,1)] rounded-l-full shadow-[0_0_10px_2px_rgba(5,147,118,0.8)]"></div>
                <div className="absolute top-0 left-[18%] w-[34%] h-full bg-[rgba(226,6,241,1)] rounded-l-full shadow-[0_0_10px_2px_rgba(226,6,241,0.8)]"></div>
                <div className="absolute top-0 left-[33%] w-[38%] h-full bg-[rgba(203,191,19,1)] rounded-l-full shadow-[0_0_10px_2px_rgba(203,191,19,0.8)]"></div>
                <div className="absolute top-0 left-[37%] w-[44%] h-full bg-[rgba(6,147,175,1)] rounded-l-full rounded-r-full shadow-[0_0_10px_2px_rgba(6,147,175,0.8)]"></div>
                <div className="absolute top-0 left-[43%] w-[74%] h-full bg-[rgba(229,105,12,1)] rounded-l-full rounded-r-full shadow-[0_0_10px_2px_rgba(229,105,12,0.8)]"></div>
                <div className="absolute top-0 left-[73%] w-[90%] h-full bg-[rgba(138,42,244,1)] rounded-l-full rounded-r-full shadow-[0_0_10px_2px_rgba(138,42,244,0.8)]"></div>
                <div className="absolute top-0 left-[89%] w-[99%] h-full bg-[rgba(13,92,223,1)] rounded-l-full rounded-r-full shadow-[0_0_10px_2px_rgba(13,92,223,0.8)]"></div>
              </div>

              <div className="flex flex-col md:flex-row mt-5 md:justify-between">
                <div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center justify-between mt-1 ">
                      <span className="rounded-full bg-[rgba(225,15,126,1)] shadow-[0_0_10px_2px_rgba(225,15,126,0.8)] p-1"></span>
                      <h1 className="text-[8px] mx-1 text-white">Seed round</h1>
                    </div>
                    <div className="text-[8px] mt-1 ml-12    text-white">
                      10%
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center mt-1 ">
                      <span className="rounded-full bg-[rgba(5,147,118,1)] shadow-[0_0_10px_2px_rgba(5,147,118,0.8)] p-1"></span>
                      <h1 className="text-[8px] mx-1 text-white">
                        Team and advisors
                      </h1>
                    </div>
                    <div className="text-[8px] text-white mt-1">8%</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center mt-1 ">
                      <span className="rounded-full bg-[rgba(226,6,241,1)] shadow-[0_0_10px_2px_rgba(226,6,241,0.8)] p-1"></span>
                      <h1 className="text-[8px] mx-1 text-white">
                        Private and Presale
                      </h1>
                    </div>
                    <div className="text-[8px] text-white mt-1">15%</div>
                  </div>
                </div>

                <div className="md:flex md:space-x-4  ">
                  <div>
                    <Separator
                      orientation="vertical"
                      className="bg-white/40 hidden md:block"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center mt-1 ">
                        <span className="rounded-full bg-[rgba(203,191,19,1)] shadow-[0_0_10px_2px_rgba(203,191,19,0.8)] p-1"></span>
                        <h1 className="text-[8px] mx-1 text-white">
                          Legal and Regulation
                        </h1>
                      </div>
                      <div className="text-[8px] text-white ml-24 mt-1">4%</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center mt-1 ">
                        <span className="rounded-full bg-[rgba(6,147,175,1)] p-1 shadow-[0_0_10px_2px_rgba(6,147,175,0.8)]"></span>
                        <h1 className="text-[8px] mx-1 text-white">
                          Platform development and Operation
                        </h1>
                      </div>
                      <div className="text-[8px] text-white mt-1">6%</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center mt-1 ">
                        <span className="rounded-full bg-[rgba(229,105,12,1)] shadow-[0_0_10px_2px_rgba(229,105,12,0.8)]  p-1"></span>
                        <h1 className="text-[8px] mx-1 text-white">
                          Public Sale
                        </h1>
                      </div>
                      <div className="text-[8px] text-white mt-1">30%</div>
                    </div>
                  </div>
                </div>

                <div className="md:flex md:space-x-3">
                  <div>
                    <Separator
                      orientation="vertical"
                      className="bg-white/40 hidden md:block"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center mt-1 ">
                        <span className="rounded-full bg-[rgba(138,42,244,1)] p-1 shadow-[0_0_10px_2px_rgba(138,42,244,0.8)]"></span>
                        <h1 className="text-[8px] mx-1 text-white">Reserve</h1>
                      </div>
                      <div className="text-[8px] text-white mt-1 ml-24">
                        15%
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center mt-1 ">
                        <span className="rounded-full bg-[rgba(13,92,223,1)] p-1 shadow-[0_0_10px_2px_rgba(13,92,223,0.8)]"></span>
                        <h1 className="text-[8px] mx-1 text-white">
                          Marketing and Community
                        </h1>
                      </div>
                      <div className="text-[8px] text-white mt-1">12%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Token;
