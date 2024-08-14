"use client";
import Image from "next/image";
import Logo from "../assests/Logo.png";
import buycrypto from "../assests/buycrypto.png";
import Global from "../assests/Global.png";
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
  return (
    <>
      <div className="relative lg:px-32 py-4 flex items-center justify-between w-full">
        <div className="flex justify-center items-center">
          <Image src={Logo} width={150} alt="Logo" />
          <div className="ml-8">
            <Tabs
              defaultValue="Exchange"
              className="lg:w-[275px] lg:h-[40px] mt-2"
            >
              <TabsList className="grid w-full grid-cols-3 bg-[#222227] border-gray-700 border ">
                <TabsTrigger className="text-white" value="Exchange">
                  Exchange
                </TabsTrigger>
                <TabsTrigger className="text-white" value="Bank">
                  Bank
                </TabsTrigger>
                <TabsTrigger className="text-white" value="web3">
                  Web3
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" className="text-white">
            ICO
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-white">
                Company <ChevronDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Option 1</DropdownMenuItem>
              <DropdownMenuItem>Option 2</DropdownMenuItem>
              <DropdownMenuItem>Option 3</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-white">
                Docs <ChevronDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Option 1</DropdownMenuItem>
              <DropdownMenuItem>Option 2</DropdownMenuItem>
              <DropdownMenuItem>Option 3</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Image src={Global} alt="globe" width={20} height={20} />
          <Button className="bg-white text-black hover:bg-white/100 ml-2">
            Invest in ICO{" "}
            <span className="px-2">
              <Image src={buycrypto} alt="crypto" />
            </span>
          </Button>
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
