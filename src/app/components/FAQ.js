'use client';

import { useState } from "react";

const faqs = [
  {
    question: "Do you accept insurance?",
    answer:
      "No, but a superbill is provided for self-submission.",
  },
  {
    question: "Are online sessions available?",
    answer:
      "Yes—all virtual sessions are conducted via Zoom.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "24-hour notice is required for cancellations.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={faq.question} className="border rounded-lg overflow-hidden shadow-sm">
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-lg font-medium text-left text-gray-800 bg-blue-50 hover:bg-blue-100 focus:outline-none transition-colors"
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
              >
                {faq.question}
                <span className="ml-4 text-blue-600">
                  {openIndex === idx ? "-" : "+"}
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-6 py-4 bg-white text-gray-700 border-t animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 