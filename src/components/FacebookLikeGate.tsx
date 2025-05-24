import React, { useState, useEffect } from 'react';

const FacebookLikeGate: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    // Check if user has already seen the gate
    const hasSeenGate = localStorage.getItem('fbLikeGateShown');
    
    // If they haven't seen it, show it immediately
    if (!hasSeenGate) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  const handleContinue = () => {
    localStorage.setItem('fbLikeGateShown', 'true');
    setIsVisible(false);
    window.open('https://www.facebook.com/profile.php?id=61575553085748', '_blank');
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      style={{ backdropFilter: 'blur(4px)' }}
    >
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 text-center relative">
        <img 
          src="https://i.imgur.com/4xHwLuT.jpg" 
          alt="Malcolm Kingley" 
          className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = 'https://via.placeholder.com/128';
          }}
        />
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Like Malcolm Kingley on Facebook
        </h2>
        <p className="text-gray-600 mb-6">
          To access this exclusive content, please like Malcolm Kingley's Facebook page for daily inspiration and Divine Law teachings.
        </p>
        <button
          onClick={handleContinue}
          className="w-full bg-blue-600 text-white rounded-lg py-3 px-6 font-medium hover:bg-blue-700 transition duration-150 ease-in-out"
        >
          Continue to Facebook Page
        </button>
      </div>
    </div>
  );
};

export default FacebookLikeGate;