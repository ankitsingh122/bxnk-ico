import Image from 'next/image';
import React from 'react'
import Logo from "../assests/Logo.png";
import fb from "../assests/fb.png";
import insta from "../assests/insta.png";
import telegram from "../assests/telegram.png";
import dscrd from "../assests/dscrd.png";
import thred from "../assests/thred.png";
import x from "../assests/x.png";
import youtube from "../assests/youtube.png";

function Footer() {
  return (
    <>
      <div className="py-5 px-10 bg-black border-t border-t-gray-500 ">
        <Image src={Logo} width={100} />
        <div className="flex justify-between items-center">
          <div className="text-xs my-2 space-y-1">
            <div className="text-white">Country Licences</div>
            <div className="text-white">Poland</div>
            <div className="text-white">
              Virtual Asset Service Provider (“VASP”)
            </div>
          </div>
          <div className="flex space-x-16 text-[12px]">
            <div className="space-y-1">
              <div className=" font-semibold text-gray-300">Products</div>
              <div className="text-white">Exchange</div>
              <div className="text-white"> Web 3</div>

              <div className="text-white">Bank</div>
            </div>
            <div>
              <div className="text-white">ICO</div>
            </div>
            <div className="space-y-1">
              <div className=" font-semibold text-gray-300">Docs</div>
              <div className="text-white">White Paper</div>
              <div className="text-white">Pitchdeck</div>
            </div>
            <div className="space-y-1">
              <div className=" font-semibold text-gray-300">Company</div>
              <div className="text-white">Staking</div>
              <div className="text-white">Our Mission</div>
              <div className="text-white">News</div>
            </div>
            <div className="space-y-2">
              <div className=" font-semibold text-gray-300">Social media</div>
              <div className="flex space-x-2 ">
                <div className="flex items-center ">
                  <Image src={fb} alt="tick" width={15} />
                </div>
                <div className="flex items-center ">
                  <Image src={insta} alt="tick" width={15} />
                </div>
                <div className="flex items-center ">
                  <Image src={thred} alt="tick" width={15} />   
                </div>
                <div className="flex items-center ">
                  <Image src={youtube} alt="tick" width={15} />
                </div>
                <div className="flex items-center ">
                  <Image src={x} alt="tick" width={15} />
                </div>
                <div className="flex items-center ">
                  <Image src={dscrd} alt="tick" width={15} />
                </div>
                <div className="flex items-center">
                  <Image src={telegram} alt="tick" width={15} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer
