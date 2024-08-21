"use client";
import Image from "next/image";
import Logo from "../assests/Logo.png";
import buycrypto from "../assests/buycrypto.png";
import global from "../assests/global.svg";
import { Button } from "@/components/ui/button";
import sun from "../assests/sun.png"
import moon from "../assests/moon.png"
import { Tabs,  TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

function Header() {
  const handleOption1 = ()=>{
    alert("hello");
  }
  return (
    <>
      <div className=" xl:px-28 md:px-24 px-8  py-4 flex items-center justify-between w-full  ">
        <div className="flex  items-center ">
          <Image src={Logo} width={150} alt="Logo" />
          <div className="ml-8 ">
            <Tabs
              defaultValue="Exchange"
              className="xl:w-[275px] lg:w-[200px] hidden lg:block"
            >
              <TabsList className="grid w-full grid-cols-3 bg-[#222227] border-gray-700 border">
                <TabsTrigger
                  className="text-white lg:text-xs "
                  value="Exchange"
                >
                  Exchange
                </TabsTrigger>
                <TabsTrigger className="text-white lg:text-xs" value="Bank">
                  Bank
                </TabsTrigger>
                <TabsTrigger className="text-white lg:text-xs" value="web3">
                  Web3
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="flex items-center xl:gap-2 ">
            <Button
              variant="ghost"
              className="text-white lg:text-xs hidden lg:block"
            >
              ICO
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white lg:text-xs ">
                  Company <ChevronDownIcon className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onSelect={handleOption1}>
                  Option 1
                </DropdownMenuItem>
                <DropdownMenuItem>Option 2</DropdownMenuItem>
                <DropdownMenuItem>Option 3</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white lg:text-xs">
                  Docs <ChevronDownIcon className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={handleOption1}>
                  Option 1
                </DropdownMenuItem>
                <DropdownMenuItem>Option 2</DropdownMenuItem>
                <DropdownMenuItem>Option 3</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Image
              src={global}
              alt="globe"
              width={20}
              height={20}
              className="mx-2"
            />
            <Button className="bg-white text-black hover:bg-white/100 ml-2 lg:text-xs hover:shadow-2xl hover:shadow-white">
              Invest in ICO{" "}
              <span className="xl:px-2 ml-1">
                <Image src={buycrypto} alt="crypto" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
