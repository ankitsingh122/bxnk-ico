import Image from "next/image";
import tickcircle from "../assests/tickcircle.png";
import fb from "../assests/fb.png";
import insta from "../assests/insta.png";
import telegram from "../assests/telegram.png";
import dscrd from "../assests/dscrd.png";
import thred from "../assests/thred.png";
import x from "../assests/x.png";
import youtube from "../assests/youtube.png";
import xlogo2 from "../assests/xlogo2.png"
import xlogo from "../assests/xlogo.png";


import Ellipse from "../assests/Ellipse.png";

import iphone from "../assests/iphone.svg";
import { Button } from "@/components/ui/button";

function Home() {
  return (
    <>
      <div className="relative text-white mt-44 lg:px-32 py-2">
        <div className="flex mt-10 justify-between items-start">
          {/* Left Content (tickcircle to button) */}
          <div className="flex-1 max-w-[50%]">
            <div className="flex space-x-12">
              <div className="flex items-center space-x-3">
                <Image src={tickcircle} alt="tick" width={20} />
                <div className="text-lg font-thin">Audited</div>
              </div>
              <div className="flex items-center space-x-3">
                <Image src={tickcircle} alt="tick" width={20} />
                <div className="text-lg font-thin">Secured</div>
              </div>
              <div className="flex items-center space-x-3">
                <Image src={tickcircle} alt="tick" width={20} />
                <div className="text-lg font-thin">Verified</div>
              </div>
              <div className="flex items-center space-x-3">
                <Image src={tickcircle} alt="tick" width={20} />
                <div className="text-lg font-thin">Licensed</div>
              </div>
            </div>

            <div className="text-7xl font-normal leading-[91px] tracking-[-0.02em] text-left mt-5">
              Future Finance, <br /> Built on Blockchain
            </div>

            <div className="text-lg mt-2 font-normal leading-[24.6px] text-left">
              Unified app and token for CeFi, DeFi, and Banking.
            </div>

            <Button className="bg-white text-black text-2xl rounded-lg hover:bg-white/100 w-[225px] h-[56px] mt-10">
              Whitepaper
            </Button>
            <h1 className="mt-10 text-xl font-medium">Follow Us:</h1>
            <div className="flex space-x-6 mt-5">
              <div className="flex items-center">
                <Image src={fb} alt="tick" width={32} />
              </div>
              <div className="flex items-center ">
                <Image src={insta} alt="tick" width={32} />
              </div>
              <div className="flex items-center ">
                <Image src={thred} alt="tick" width={32} />
              </div>
              <div className="flex items-center ">
                <Image src={youtube} alt="tick" width={32} />
              </div>
              <div className="flex items-center ">
                <Image src={x} alt="tick" width={32} />
              </div>
              <div className="flex items-center ">
                <Image src={dscrd} alt="tick" width={32} />
              </div>
              <div className="flex items-center">
                <Image src={telegram} alt="tick" width={32} />
              </div>
            </div>
          </div>
          
          {/* Right Content (Phone Image) */}
          <div className="relative flex-1 flex justify-end">
            <Image
              src={iphone}
              alt="phone"
              className="object-contain -mt-32"
            />
            {/* <Image
              src={Ellipse}
              alt="ellipse"
              className="absolute bottom-0 right-0  object-contain lg:-mt-10" // Adjust positioning as needed
            /> */}
          </div>
        </div>
      </div>
      {/* <Image
        src={Ellipse}
        alt="ellipse"
        className="absolute -bottom-20 -right-32  object-contain" // Adjust positioning as needed
      /> */}
    </>
  );
}

export default Home;
