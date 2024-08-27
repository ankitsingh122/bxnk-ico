"use client";
import { MenuIcon, X, Globe, Sun, Moon } from "lucide-react";
import Image from "next/image";
import Logo from "../assests/Logo.png";
import buycrypto from "../assests/buycrypto.svg";
import global from "../assests/global.svg";
import { Button } from "@/components/ui/button";
import sun from "../assests/sun.png";
import moon from "../assests/moon.png";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOption1 = () => {
    alert("hello");
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="xl:px-32 lg:px-24 px-8 py-4 flex items-center justify-between w-full">
        <div className="flex items-center">
          <Image src={Logo} width={150} alt="Logo" />
          <div className="ml-8">
            <Tabs
              defaultValue="Exchange"
              className="xl:w-[275px] lg:w-[200px] hidden lg:block"
            >
              <TabsList className="grid w-full grid-cols-3 bg-[#222227] border-gray-700 border">
                <TabsTrigger className="text-white lg:text-xs" value="Exchange">
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
          <div className="flex items-center xl:gap-2">
            <Button
              variant="ghost"
              className="text-white lg:text-xs hidden lg:block"
            >
              ICO
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white lg:text-xs">
                  Company <ChevronDownIcon className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#222227] text-white">
                <DropdownMenuItem onSelect={handleOption1}>
                  Staking{" "}
                </DropdownMenuItem>
                <DropdownMenuItem>Our Mission</DropdownMenuItem>
                <DropdownMenuItem>News</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white lg:text-xs">
                  Docs <ChevronDownIcon className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#222227] text-white">
                <DropdownMenuItem onClick={handleOption1}>
                  White Paper
                </DropdownMenuItem>
                <DropdownMenuItem>Pitchdeck</DropdownMenuItem>
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









      {/* Mobile navbar */}
      <div className="lg:hidden relative">
        <Button
          variant="ghost"
          className={`fixed top-4 right-4 text-white z-50 ${
            isOpen ? "hidden" : "block"
          }`}
          onClick={toggleMenu}
        >
          <MenuIcon className="" />
          <span className="sr-only">Open menu</span>
        </Button>

        <div
          className={`fixed top-0 right-0   md:w-64 bg-black/95 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-40`}
          style={{ height: "100vh" }}
        >
          <div className="flex justify-between items-center p-4 border-b border-zinc-700">
            <Button
              className=" hover:bg-black"
              variant="ghost"
              onClick={toggleMenu}
            >
              <X className="p-1 bg-white rounded-sm" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>

          <div className="p-4">
            <div className="flex space-x-2 mb-4">
              <Tabs
                defaultValue="Exchange"
                className="xl:w-[275px] lg:w-[200px] "
              >
                <TabsList className="grid w-full grid-cols-3 bg-[#222227] border-gray-700 border">
                  <TabsTrigger
                    className="text-white lg:text-xs"
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

            <nav className="space-y-4">
              <Button variant="ghost" className="text-white lg:text-xs ">
                ICO
              </Button>
              <div className="flex justify-between items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-white lg:text-xs">
                      Company <ChevronDownIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      Staking
                    </DropdownMenuItem>
                    <DropdownMenuItem>Our Mission</DropdownMenuItem>
                    <DropdownMenuItem>News</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="flex justify-between items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-white lg:text-xs">
                      Docs <ChevronDownIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={handleOption1}>
                     White Paper
                    </DropdownMenuItem>
                    <DropdownMenuItem>Pitchdeck</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <Image
                src={global}
                alt="globe"
                width={20}
                height={20}
                className="mx-3"
              />
              <Button className="bg-white text-black hover:bg-white/100 ml-2 lg:text-xs hover:shadow-2xl hover:shadow-white">
                Invest in ICO{" "}
                <span className="xl:px-2 ml-1">
                  <Image src={buycrypto} alt="crypto" />
                </span>
              </Button>
            </nav>
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
