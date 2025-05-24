import React from 'react';

const EbookDownload: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto my-8 p-6 bg-white rounded-xl shadow-2xl border border-slate-100">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-1/3">
          <img
            src="https://imgur.com/bPuBzqZ.jpg"
            alt="Free Ebook: The Secret to Financial Overflow"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-2/3 space-y-4">
          <h2 className="text-2xl font-bold text-blue-900">
            FREE EBOOK: The Secret to Financial Overflow
          </h2>
          <p className="text-slate-600">
            Discover the divine principles that unlock supernatural abundance in your life. This transformative guide reveals how to birth supernatural expectation through faith-seeds.
          </p>
          <button 
            className="w-full md:w-auto px-6 py-3 bg-amber-400 hover:bg-amber-500 text-black rounded-lg shadow-md transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 font-medium glow-button"
            onClick={() => window.open('https://www.thereisnothingbutgod.com/offers/wFkCkNJN', '_blank')}
          >
            Download Your Free Copy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EbookDownload;