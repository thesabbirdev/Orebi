import React, { useState } from "react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b-2 rounded mb-2">
      <button
        className="w-full text-left px-4 py-2 bg-white  text-base font-dmsans font-bold text-primary"
        onClick={toggleAccordion}
      >
        {title}
        <span className={`float-right text-xl duration-300 ${isOpen? "rotate-180":""}`}>{isOpen ? "-" : "+"}</span>
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
        style={{ maxHeight: isOpen ? "96px" : "0" }}
      >
        <div className="px-4 py-2 font-dmsans text-base text-secondary leading-8">{content}</div>
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
