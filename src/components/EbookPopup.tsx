import React, { useState, useEffect } from 'react';

const EbookPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem('ebookPopupShown');
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000); // Show popup after 2 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('ebookPopupShown', 'true');
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      style={{ backdropFilter: 'blur(4px)' }}
      onClick={handleClose}
    >
      <div 
        className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
          aria-label="Close popup"
        >
          ×
        </button>
        
        <div className="text-center">
          <img 
            src="https://imgur.com/bPuBzqZ.jpg" 
            alt="Free Ebook" 
            className="w-full h-auto rounded-lg shadow-md mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Get Your FREE Ebook Now!
          </h2>
          <p className="text-gray-600 mb-6">
            Discover the divine principles that unlock supernatural abundance in your life.
          </p>
          <a
            href="https://www.thereisnothingbutgod.com/offers/wFkCkNJN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full py-3 px-6 bg-amber-400 hover:bg-amber-500 text-black rounded-lg shadow-md transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 font-medium glow-button"
            onClick={handleClose}
          >
            Download Now
          </a>
        </div>
      </div>
      <style>{`
        @keyframes glow {
          0% { box-shadow: 0 0 5px #f59e0b, 0 0 10px #f59e0b, 0 0 15px #f59e0b; }
          50% { box-shadow: 0 0 10px #f59e0b, 0 0 20px #f59e0b, 0 0 25px #f59e0b; }
          100% { box-shadow: 0 0 5px #f59e0b, 0 0 10px #f59e0b, 0 0 15px #f59e0b; }
        }
        .glow-button {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default EbookPopup;