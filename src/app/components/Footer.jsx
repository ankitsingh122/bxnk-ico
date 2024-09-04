"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../assests/Logo.png";
import fb from "../assests/fb.png";
import insta from "../assests/insta.png";
import telegram from "../assests/telegram.png";
import dscrd from "../assests/dscrd.png";
import thred from "../assests/thred.png";
import x from "../assests/x.png";
import youtube from "../assests/youtube.png";
import { Separator } from "@/components/ui/separator";
import sms from "../assests/sms.svg";
import loc from "../assests/loc.svg";
import Link from "next/link";


function Footer() {
  return (
    <>
      <div className="py-5 px-10 bg-black border-t border-t-gray-500 rounded-t-3xl ">
        <Image src={Logo} width={100} alt="logo" />
        <div className="flex flex-col md:flex-row md:justify-between lg:items-center">
          <div className="text-md md:text-xs lg:my-2 my-7 space-y-1">
            <div className="text-white">Country Licences</div>
            <div className="text-white">Poland</div>
            <div className="text-white">
              Virtual Asset Service Provider (“VASP”)
            </div>
          </div>

          {/* Mobile Screen */}
          <div className="space-y-6">
            <div className="md:hidden flex gap-16  text-sm ">
              <div className="space-y-1   ">
                <div className=" font-semibold text-gray-300">Products</div>
                <div className="text-white cursor-pointer">Exchange</div>
                <div className="text-white cursor-pointer"> Web 3</div>

                <div className="text-white cursor-pointer">Bank</div>
              </div>
              <div>
                <div className="text-white cursor-pointer">ICO</div>
              </div>
            </div>

            <div className="md:hidden flex gap-14 text-sm ">
              <div className="space-y-1   ">
                <div className=" font-semibold text-gray-300">Docs</div>
                <div className="text-white cursor-pointer">White Paper</div>
                <div className="text-white cursor-pointer">Pitchdeck</div>
              </div>
              <div className="space-y-1">
                <div className=" font-semibold text-gray-300">Company</div>
                <div className="text-white cursor-pointer">Staking</div>
                <div className="text-white cursor-pointer">Our Mission</div>
                <div className="text-white cursor-pointer">News</div>
              </div>
            </div>
            <div className="space-y-2 md:hidden">
              <div className=" font-semibold text-gray-300">Social media</div>
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
            </div>
          </div>

          {/* Tablet and Laptop screen */}
          <div className="flex   space-x-16 text-[12px]">
            <div className="space-y-1 hidden md:block">
              <div className=" font-semibold text-gray-300">Products</div>
              <div className="text-white cursor-pointer">Exchange</div>
              <div className="text-white cursor-pointer"> Web 3</div>

              <div className="text-white cursor-pointer">Bank</div>
            </div>
            <div className="flex gap-10 flex-col  lg:flex-row">
              <div className="text-white cursor-pointer hidden md:block">
                ICO
              </div>
              <div className="space-y-1 hidden md:block">
                <div className=" font-semibold text-gray-300">Docs</div>
                <div className="text-white cursor-pointer">White Paper</div>
                <div className="text-white cursor-pointer">Pitchdeck</div>
              </div>
            </div>

            <div className="flex gap-10 flex-col lg:flex-row">
              <div className="space-y-1 hidden md:block">
                <div className=" font-semibold text-gray-300">Company</div>
                <div className="text-white cursor-pointer">Staking</div>
                <div className="text-white cursor-pointer">Our Mission</div>
                <div className="text-white cursor-pointer">News</div>
              </div>
              <div className="space-y-2 hidden md:block">
                <div className=" font-semibold text-gray-300">Social media</div>
                <div className="flex space-x-2 ">
                  <div className="flex items-center ">
                    <Image
                      src={fb}
                      alt="tick"
                      width={15}
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="flex items-center ">
                    <Link
                      href=" https://www.instagram.com/officialbxnk?igsh=MWlheGM0dmw1bWVlcg==
"
                    >
                      <Image src={insta} alt="tick" width={15} />
                    </Link>{" "}
                  </div>
                  <div className="flex items-center ">
                    <Image
                      src={thred}
                      alt="tick"
                      width={15}
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="flex items-center ">
                    <Link href="https://www.youtube.com/channel/UCD3S8Cb2vuag3CgeqBNyJVg">
                      {" "}
                      <Image src={youtube} alt="tick" width={15} />
                    </Link>
                  </div>
                  <div className="flex items-center ">
                    <Link href="https://x.com/OpsBxnk">
                      <Image src={x} alt="tick" width={15} />
                    </Link>
                  </div>
                  <div className="flex items-center ">
                    <Link href=" https://discord.gg/URRv3FUc">
                      <Image src={dscrd} alt="tick" width={15} />
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={telegram}
                      alt="tick"
                      width={15}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20 my-6" />
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row  md:justify-between text-xs">
          <div className="text-white space-y-1">
            <div className="flex gap-1 items-center">
              <span>
                <Image src={loc} width={10} alt="logo" />
              </span>{" "}
              Poland, Bartycka 22B/21a, 00-716 Warszawa
            </div>
            <div className="flex gap-1 items-center">
              <span>
                <Image src={loc} width={10} alt="logo" />
              </span>
              UAE, Compass Building, Al Shohada Road, Rus Al Kaman
            </div>
          </div>
          <div className="flex space-x-5">
            <div className="text-white space-y-1">
              <div>General</div>
              <div className="flex gap-1 items-center">
                <span>
                  <Image src={sms} width={10} alt="logo" />
                </span>
                info@bxnk.com
              </div>
            </div>
            <Separator orientation="vertical" className="bg-white/20" />
            <div className="text-white space-y-1">
              <div>Tech</div>
              <div className="flex gap-1 items-center">
                <span>
                  <Image src={sms} width={10} alt="logo" />
                </span>
                support@bxnk.com
              </div>
            </div>
          </div>
          <div className="text-white/50 space-y-1 hidden lg:block  ">
            <div className="flex justify-end">@copyrighting</div>
            <div className="flex space-x-2">
              <div className="cursor-pointer">Privacy policy</div>
              <div className="cursor-pointer">Terms of services</div>
            </div>
          </div>
        </div>
        {/* <Separator  className="bg-white/20 lg:hidden my-4" > */}
        <div className="text-white/50  justify-between text-xs mt-6 lg:hidden flex">
          <div className="">@copyrighting</div>
          <div className="flex space-x-2">
            <div className="cursor-pointer">Privacy policy</div>
            <div className="cursor-pointer">Terms of services</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
