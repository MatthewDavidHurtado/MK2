import React, { useState, useRef } from 'react';

const Header: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setHasError(false);
        })
        .catch((error) => {
          console.error('Error playing video:', error);
          setHasError(true);
        });
    }
  };

  return (
    <header className="w-full text-center py-6 md:py-10">
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
      <h1 className="text-4xl md:text-5xl font-bold text-blue-900 tracking-tight">
        The Secret to Financial Overflow<br />
        is to Birth Supernatural Expectation<br />
        By Sowing Faith-Seeds With Love.
      </h1>
      <p className="mt-3 text-lg md:text-xl text-slate-600 app-sans-serif">
        The Ultimate Shortcut to Wealth and Divine Authority Is Right Here (Watch This Video).
      </p>

      {/* Video Container */}
      <div className="mt-6 mb-4 md:mb-6 max-w-2xl mx-auto">
        <div className="relative rounded-xl overflow-hidden shadow-2xl" style={{padding:"57.82% 0 0 0"}}>
          {/* Blur overlay for top of video */}
          <div 
            className="absolute top-0 left-0 w-full h-[60px] bg-black/30 backdrop-blur-md z-10"
            style={{ backdropFilter: 'blur(8px)' }}
          ></div>
          
          <video 
            ref={videoRef}
            controls
            style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}}
            preload="auto"
            poster="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg"
            className="object-cover"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onLoadedData={() => setIsLoading(false)}
            onError={() => {
              setHasError(true);
              setIsLoading(false);
            }}
          >
            <source 
              src="https://healvideos.s3.us-east-2.amazonaws.com/permanent_overflow_is_yours_already_-_claim_it.+(720p).mp4" 
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          
          {/* Loading State */}
          {isLoading && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"></div>
            </div>
          )}

          {/* Play Button Overlay */}
          {!isPlaying && !isLoading && !hasError && (
            <div 
              className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center cursor-pointer"
              onClick={handlePlay}
            >
              <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300">
                <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-blue-600 border-b-[15px] border-b-transparent ml-2"></div>
              </div>
            </div>
          )}

          {/* Error State */}
          {hasError && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg max-w-sm mx-4">
                <p className="text-red-600 font-medium">Unable to play video. Please try refreshing the page or check your internet connection.</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Qualification Criteria */}
      <div className="max-w-2xl mx-auto mb-6 px-4">
        <div className="grid md:grid-cols-2 gap-6 text-left app-sans-serif">
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg text-red-800 mb-3">🚫 This is NOT for you if:</h3>
            <ul className="space-y-2 text-red-700">
              <li className="flex items-start">
                <span className="mr-2">❌</span>
                You roll your eyes at "faith" or "divine flow."
              </li>
              <li className="flex items-start">
                <span className="mr-2">❌</span>
                You need proof before planting belief.
              </li>
              <li className="flex items-start">
                <span className="mr-2">❌</span>
                You're only chasing money without purpose.
              </li>
              <li className="flex items-start">
                <span className="mr-2">❌</span>
                You think hustle is the only path to wealth.
              </li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg text-green-800 mb-3">✅ This IS for you if:</h3>
            <ul className="space-y-2 text-green-700">
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                You believe in spiritual law + divine abundance.
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                You're ready to give and trust supernatural timing.
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                You've tried logic—now you're open to flow.
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                You want overflow that blesses others too.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-4 md:mt-6">
        <a 
          href="https://www.thereisnothingbutgod.com/tithing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block py-3 px-6 bg-amber-400 hover:bg-amber-500 text-black rounded-lg shadow-md transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 app-sans-serif text-base md:text-lg font-medium glow-button"
          title="Plant your faith-seed (opens Allow Ministries tithing page in a new tab)"
        >
          Plant your faith-seed. Birth supernatural expectation. Rest, in faith. Receive.
        </a>
      </div>
    </header>
  );
};

export default Header;