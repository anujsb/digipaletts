import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="w-full py-10 bg-gray-50 sm:py-16 lg:py-24 text-black bg-info">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            {/* asdfghjk */}
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`transition-all duration-200 bg-white border border-gray-200 ${
                activeIndex === index ? 'shadow-lg' : ''
              } cursor-pointer hover:bg-gray-50`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-gray-400 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div className={`${activeIndex === index ? '' : 'hidden'} px-4 pb-5 sm:px-6 sm:pb-6`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 textbase mt-9">
          Didn’t find the answer you are looking for?{' '}
          <a href="#" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">
            Contact our support
          </a>
        </p>
      </div>
    </section>
  );
};

// Data for FAQ items
const faqData = [
  {
    question: 'Do Digital Marketing Agencies Provide SEO consulting ?',
    answer: 'A Digital Marketing agency that provides 360-degree marketing services can provide SEO consulting and marketing services for your website. As approximately 72% of people search on Google for their queries, SEO consultants can help you present the right type of content to the right people at the right time. A Digital Marketing agency can do detailed website analysis, backlink audit, UX evaluation, and develop a customised SEO strategy to reach your business goals.',
  },
  {
    question: 'How do I do SEO of my website?',
    answer: 'SEO is not a one-time activity; rather, it is a continuous process to maintain the optimum visibility of your website on search engines like Google. It costs time and money. If you are short on time, then an SEO consulting agency can help you optimise your website.',
  },
  {
    question: 'Does my business needs SEO?',
    answer: 'There are two techniques for total SEO optimization, On-page SEO and off-page SEO. On-page SEO is the practice of developing content to improve your rankings. This boils down to incorporating keywords into your sites and content on a regular basis and producing high-quality content on a consistent basis. Off-page SEO refers to optimization that occurs outside of your website. It requires developing relationships and creating information that people want to share. It is essential to the success of SEO.',
  },
  {
    question: 'What are basic steps to optimise your website?',
    answer: '1. Keyword research to understand the words and phrases that consumers use to find your products 2.Competitor analysis, which gives you an understanding of their online activities 3. Identify pages on your website to target the right keywords 4. On-page optimization of a website to make it easily searchable for both users and search engines 5. Content creation for different platforms available 6. Content promotion/ Off-page Optimization to target audiences on different platforms 7. Tracking the performance of SEO campaigns through different platforms and tools on a regular basis',
  },
];

export default Faq;
