"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import play from "../assests/play.svg";
import Image from "next/image";
import Ellipse27 from "../assests/Ellipse27.svg";
import Ellipse28 from "../assests/Ellipse28.svg";
import Ellipse29 from "../assests/Ellipse29.svg";
import Ellipse30 from "../assests/Ellipse30.svg";
import { X } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import sample from "../assests/sample.svg";

function Invest() {
  const [showVideo, setShowVideo] = useState(false);
  const [amount, setAmount] = useState(0); 
  const [currency, setCurrency] = useState("usd"); 

  const handleVideoClick = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleCurrencyChange = (value) => {
    setCurrency(value);
  };


  const calculateBXNKReceived = () => {
    if (currency === "usd") {
      return amount * 3; 
    } else if (currency === "eur") {
      return amount * 4; 
    }
    return 0;
  };




  

  const points = [
    {
      id: "01",
      title: "Connect Your Wallet",
      description:
        "Click the “Connect Wallet” button to securely link your crypto wallet to the BXNK platform.",
    },
    {
      id: "02",
      title: "Select BXNK Tokens",
      description:
        "Enter the amount of BXNK tokens you wish to purchase and click the Invest.",
    },
    {
      id: "03",
      title: "Complete Payment",
      description:
        "Follow the instructions to complete your payment using supported cryptocurrencies.",
    },
    {
      id: "04",
      title: "Token Allocation",
      description:
        "After successful payment, BXNK tokens will be allocated to your wallet automatically.",
    },
  ];

  return (
    <>
      <div className="py-20 px-8 xl:px-32 lg:px-24 lg:mx-0">
        <div className="flex flex-col justify-center lg:justify-between lg:flex-row items-center">
          <div>
            <div className="text-white flex justify-center lg:justify-start text-3xl font-normal tracking-[-0.02em]">
              How to invest
            </div>
            <div className="mt-5 text-white/75 flex justify-center lg:justify-start text-lg font-normal tracking-[-0.02em]">
              Follow these steps to buy tokens.
            </div>
            <div className="flex md:justify-center lg:justify-start lg:mr-10">
              <div className="mt-5 space-y-5">
                {points.map((point, index) => (
                  <div className="flex items-center space-x-2" key={index}>
                    <div className="text-white text-xs rounded-full border border-white/40 p-3">
                      {point.id}
                    </div>
                    <div>
                      <h1 className="text-white text-lg xl:text-lg lg:text-sm">
                        {point.title}
                      </h1>
                      <h1 className="text-white/50 text-xs xl:text-[10px] lg:text-[8px] mt-1">
                        {point.description}
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:justify-start">
              {!showVideo ? (
                <Button
                  onClick={handleVideoClick}
                  className="bg-white text-black hover:bg-white/100 lg:text-xs hover:shadow-2xl hover:shadow-white my-10 lg:my-0 lg:mt-10"
                >
                  Watch Buy Guide Video
                  <span className="ml-2">
                    <Image src={play} width={16} alt="crypto" />
                  </span>
                </Button>
              ) : (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                  <div
                    className="bg-black bg-opacity-50 absolute inset-0"
                    onClick={handleCloseVideo}
                  ></div>
                  <div className="relative w-full lg:w-2/3 mt-10 lg:mt-0 p-4">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/JC4T46_D8Sk"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="rounded-lg shadow-lg"
                    />

                    <Button
                      onClick={handleCloseVideo}
                      className="absolute top-2 right-2 text-white bg-black hover:bg-gray-900 "
                    >
                      <X size={24} className="text-white" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="relative lg:w-1/2 w-full p-4 bg-black text-white rounded-lg border border-gray-500">
            <div className="absolute bottom-72 right-[-10px] lg:-mr-[85px] xl:-mr-[117px] hidden lg:block">
              <Image src={sample} alt="Sample" width={260} />
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs">
                Step{" "}
                <span className="font-bold">
                  {" "}
                  2 <span className="text-white/50">/ 4</span>
                </span>
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-4">Buy Token</h1>
            <div className="space-y-3">
              <div className="flex justify-between text-xs">
                <span>USDT Raised</span>
                <span>$ 354,998</span>
              </div>
              <Separator className="bg-white/20" />
              <div className="flex justify-between text-xs">
                <span>Token sold in stage 2</span>
                <span>
                  4,014,592 <span className="text-white/50"> / 40,000,000</span>
                </span>
              </div>
              <Separator className="bg-white/20" />
              <div className="flex justify-between text-xs">
                <span>Token price</span>
                <span>$ 0.009</span>
              </div>
              <Separator className="bg-white/20" />
              <div className="relative">
                <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-sky-400"
                    style={{ width: "50%" }}
                  />
                </div>
                <div className="absolute inset-0 flex justify-center items-center text-black font-bold text-xs">
                  50%
                </div>
                <div className="absolute inset-0 flex justify-between items-center px-2 text-xs text-gray-100">
                  <span>0</span>
                  <span>80,000,000</span>
                </div>
              </div>
              <div className="flex justify-between text-xs">
                <span>Total token sold</span>
                <span>$ 44,014,592</span>
              </div>
              <Separator className="bg-white/20" />
              <div className="flex justify-between text-xs">
                <span>Listing price</span>
                <span>$ 0.20</span>
              </div>
              <Separator className="bg-white/20" />
              <div className="flex justify-between text-xs">
                <span>???Header???</span>
                <div className="flex space-x-2">
                  <Image src={Ellipse27} width={20} alt="logo" />
                  <Image src={Ellipse28} width={20} alt="logo" />
                  <Image src={Ellipse29} width={20} alt="logo" />
                  <Image src={Ellipse30} width={20} alt="logo" />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-2">
                <div className="flex border border-gray-400 rounded-md">
                  <input
                    type="number"
                    className="bg-transparent lg:w-36 w-11/12 text-white text-center"
                    value={amount}
                    onChange={handleAmountChange}
                  />
                  <Select onValueChange={handleCurrencyChange}>
                    <SelectTrigger className="bg-black border border-black rounded-md flex-1 text-white">
                      <SelectValue placeholder="USD" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD</SelectItem>
                      <SelectItem value="eur">EUR</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Select>
                  <SelectTrigger className="bg-black border border-gray-400 flex-1 text-white">
                    <SelectValue
                      placeholder={`BXNK Received ${calculateBXNKReceived()}`}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="BXNK Received 000">
                      BXNK Received {calculateBXNKReceived()}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full  border border-gray-400 bg-black hover:border-cyan-600 hover:text-cyan-500 hover:bg-gray-700">
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Invest;
