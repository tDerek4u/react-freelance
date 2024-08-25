import React from 'react'
import { useState } from 'react';

const Faq = () => {
  const faqs = [
    { question: "How can I make payment?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "I cannot make a post. Why?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "How can I contact the club president?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "How long does it take to get accepted into club?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "May I know how I can register for club?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col md:flex-row justify-between px-20 py-12 ">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-semibold">Frequently Asked Questions - FAQs</h2>
        <div className="h-1 bg-black mt-4"></div>
        <p className="mt-4 font-medium">
          Quick answer to the questions you may have. <br />
          Cannot find what you're looking for? <a href="#" className="text-blue-600 underline">Contact us</a> through whenever you need.
        </p>

        <div className="mt-6">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 pb-6">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <summary className="cursor-pointer text-lg font-medium list-none">
                  {faq.question}
                </summary>
                <span className="text-xl font-bold">
                  {openIndex === index ? '-' : '+'}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
        <img src="/images/faq.jpeg" alt="FAQ Illustration" className="max-w-full" />
      </div>
    </section>
  );
}

export default Faq
