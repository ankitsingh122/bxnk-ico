import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
function FAQ() {

  return (
    <>
      <div className="lg:px-24 xl:px-32 px-10 py-12 bg-black/70">
        <div className="text-white flex justify-center text-center md:text-start text-4xl my-10 ">
          Frequently Asked Questions
        </div>
        <div className="text-gray-400 text-sm ">General Questions</div>
        <div className="text-white">
          <Accordion type="single" collapsible className="w-full mt-4">
            <AccordionItem
              className="border px-2 rounded-lg border-gray-700"
              value="item-1"
            >
              <AccordionTrigger className="hover:no-underline">
                What is BXNK?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium nostrum alias rem tempore ipsa architecto autem,
                dignissimos quis fuga doloremque inventore aliquid nemo
                assumenda et quo. Omnis vel rerum quos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="border px-2 rounded-lg border-gray-700 my-2"
              value="item-2"
            >
              <AccordionTrigger className="hover:no-underline text-start">
                How does BXNK differ from other platforms?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                BXNK stands out by offering a holistic financial ecosystem,
                prioritizing user experience, security, and innovation. Our
                platform caters to a wide range of users, from individual
                investors to businesses.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="border px-2 rounded-lg border-gray-700"
              value="item-3"
            >
              <AccordionTrigger className="hover:no-underline text-start">
                Is BXNK regulated?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, facere dolores rerum laborum possimus dolor
                dignissimos, consectetur quas molestiae non ad harum cum
                quaerat, vero quasi esse maxime inventore earum.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="border px-2 rounded-lg border-gray-700 mt-2"
              value="item-4"
            >
              <AccordionTrigger className="hover:no-underline text-start">
                How secure is my data on BXNK?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, facere dolores rerum laborum possimus dolor
                dignissimos, consectetur quas molestiae non ad harum cum
                quaerat, vero quasi esse maxime inventore earum.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="text-gray-400 text-sm mt-12">
          Token and Platform Related Questions
        </div>
        <div className="text-white">
          <Accordion type="single" collapsible className="w-full mt-5">
            <AccordionItem
              className="border px-2 rounded-lg border-gray-700"
              value="item-1"
            >
              <AccordionTrigger className="hover:no-underline text-start">
                What is the BXNK token?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium nostrum alias rem tempore ipsa architecto autem,
                dignissimos quis fuga doloremque inventore aliquid nemo
                assumenda et quo. Omnis vel rerum quos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="border px-2 rounded-lg border-gray-700 my-2"
              value="item-2"
            >
              <AccordionTrigger className="hover:no-underline text-start">
                How can I buy BXNK tokens?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur magni eligendi sapiente, doloribus, enim est nihil
                expedita autem accusamus blanditiis nisi? Harum, eos. Temporibus
                nisi, voluptatibus quasi eveniet incidunt id?
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="border px-2 rounded-lg border-gray-700"
              value="item-3"
            >
              <AccordionTrigger className="hover:no-underline text-start">
                What are the fees associated with using BXNK?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, facere dolores rerum laborum possimus dolor
                dignissimos, consectetur quas molestiae non ad harum cum
                quaerat, vero quasi esse maxime inventore earum.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="border px-2 rounded-lg border-gray-700 mt-2"
              value="item-4"
            >
              <AccordionTrigger className="hover:no-underline text-start">
                Is there a mobile app?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, facere dolores rerum laborum possimus dolor
                dignissimos, consectetur quas molestiae non ad harum cum
                quaerat, vero quasi esse maxime inventore earum.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="text-gray-400 text-sm mt-12">Technical Questions</div>
        <div className="text-white">
          <Accordion type="single" collapsible className="w-full mt-5">
            <AccordionItem
              className="border px-2 rounded-lg border-gray-700"
              value="item-1"
            >
              <AccordionTrigger className="hover:no-underline text-start">
                What blockchain technology does BXNK use?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium nostrum alias rem tempore ipsa architecto autem,
                dignissimos quis fuga doloremque inventore aliquid nemo
                assumenda et quo. Omnis vel rerum quos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="border px-2 rounded-lg border-gray-700 my-2"
              value="item-2"
            >
              <AccordionTrigger className="hover:no-underline text-start">
                How does staking work on BXNK?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur magni eligendi sapiente, doloribus, enim est nihil
                expedita autem accusamus blanditiis nisi? Harum, eos. Temporibus
                nisi, voluptatibus quasi eveniet incidunt id?
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="border px-2 rounded-lg border-gray-700"
              value="item-3"
            >
              <AccordionTrigger className="hover:no-underline text-start">
                Is there a limit to the number of tokens that can be staked or
                purchased?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, facere dolores rerum laborum possimus dolor
                dignissimos, consectetur quas molestiae non ad harum cum
                quaerat, vero quasi esse maxime inventore earum.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default FAQ;
