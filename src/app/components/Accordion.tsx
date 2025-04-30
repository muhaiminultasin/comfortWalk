"use client"
import {Accordion, AccordionItem} from "@heroui/react";
function AccordionBox() {
  const Content = [
    {
      Qsn:"How do I place an order?",
      defaultContent:"Browse our collection, add to cart, and checkout in just a few clicks."
    },
    {
      Qsn:"Can I exchange if the size doesn't fit?",
      defaultContent:"Yes, we offer easy size exchanges within 7 days of delivery."
    },
    {
      Qsn:"Do you offer cash on delivery (COD)?",
      defaultContent:"Yes! You can pay once your shoes arrive at your doorstep."
    },
    {
      Qsn:"How long does shipping take?",
      defaultContent:"We ship within 24 hours and delivery takes 3-5 business days across Bangladesh."
    },
  ]
    

  return (
    <Accordion className="gap-5 ">
      {Content.map(({Qsn,defaultContent},i) => {
        return <AccordionItem
        key={i}
        aria-label={Qsn}
        subtitle="Press to expand"
        title={<span className="font-bold text-[#1E3A8A] text-lg">{Qsn}</span>}
        className="border-none bg-white h-15 px-5 mt-5 rounded-lg cursor-pointer"
       
      >
        <span className="text-gray-600">{defaultContent}</span>
      </AccordionItem>
      })}
    </Accordion>
  );
}


export default AccordionBox;