"use client";

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'How do you ensure the content matches our brand voice?',
    answer: 'We start with a comprehensive brand audit and style guide development. Before drafting any content, we create a "Voice & Tone" document for your approval, ensuring every piece aligns perfectly with your brand identity.'
  },
  {
    id: 2,
    question: 'What is your typical turnaround time?',
    answer: 'Our typical turnaround time varies based on project scope, but most content pieces are delivered within 5-7 business days. Rush services are available for urgent requests.'
  },
  {
    id: 3,
    question: 'Do you handle uploading to our CMS?',
    answer: 'Yes, we offer CMS upload services for all major platforms including WordPress, Shopify, and custom solutions. We can format and optimize content directly in your system.'
  },
  {
    id: 4,
    question: 'Are revisions included in the price?',
    answer: 'Yes, we include up to two rounds of revisions in our standard pricing. Additional revisions can be accommodated at a reasonable rate if needed.'
  }
];

const  FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([1]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="relative w-full max-w-[768px] mx-auto">
      {/* Header Section */}
      <div className="mb-[64px]">
        <div className="text-center mb-[16px]">
          <p className="text-[#c73450] font-medium text-[11.9px] leading-[20px]">
            Support
          </p>
        </div>
        <h1 className="text-center text-[#2c2c2c] text-[40.8px] leading-[48px]">
          Common Questions
        </h1>
      </div>

      {/* FAQ Items */}
      <div className="space-y-0">
        {faqData.map((item, index) => {
          const isOpen = openItems.includes(item.id);
          const isFirst = index === 0;
          
          return (
            <div
              key={item.id}
              className="border-b border-[rgba(44,44,44,0.1)]"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full py-[16px] flex items-start justify-between text-left hover:opacity-80 transition-opacity"
              >
                <span 
                  className={`text-[17px] leading-[28px] ${
                    isOpen ? 'text-[#c73450] font-semibold' : 'text-[#2c2c2c]'
                  }`}
                >
                  {item.question}
                </span>
                <div className="ml-4 flex-shrink-0 mt-[4px]">
                  {isOpen ? (
                    <Minus className="w-[20px] h-[20px] text-[#c73450] " strokeWidth={2} />
                  ) : (
                    <Plus className="w-[20px] h-[20px] text-[#2c2c2c]" strokeWidth={2} />
                  )}
                </div>
              </button>

              {/* Answer Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pb-[16px] pr-[40px]">
                  <p className="text-[13.6px] leading-[26px] text-[rgba(44,44,44,0.7)]">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQSection;