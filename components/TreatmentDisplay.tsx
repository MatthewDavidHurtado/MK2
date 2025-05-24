import React from 'react';

interface TreatmentDisplayProps {
  initialTreatmentText: string;
  originalQuery: string;
  onContinueToDivineLaw: () => void;
  isFetchingDivineLawTreatment: boolean;
  divineLawTreatmentText: string;
  showDivineLawTreatmentButton: boolean;
}

const TreatmentDisplay: React.FC<TreatmentDisplayProps> = ({ 
  initialTreatmentText, 
  originalQuery,
  onContinueToDivineLaw,
  isFetchingDivineLawTreatment,
  divineLawTreatmentText,
  showDivineLawTreatmentButton
}) => {
  const initialParagraphs = initialTreatmentText.split('\n').filter(p => p.trim() !== '');
  const divineLawParagraphs = divineLawTreatmentText.split('\n').filter(p => p.trim() !== '');

  return (
    <div className="mt-8 animate-fadeIn">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
      `}</style>
      
      {/* Initial GNM-focused Reflection */}
      <div className="p-6 bg-white border border-slate-200 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-900 mb-3">
          Initial Reflection: Understanding the Emotional Landscape
        </h2>
        {originalQuery && (
           <p className="mb-4 text-sm text-slate-600 italic app-sans-serif">
            Reflecting on your concern regarding: "{originalQuery}"
          </p>
        )}
        <div className="space-y-4 text-slate-700 leading-relaxed text-justify">
          {initialParagraphs.map((paragraph, index) => (
            <p key={`initial-${index}`} className="text-base md:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
        <p className="mt-6 text-sm text-center text-slate-600 italic app-sans-serif">
          Hold these initial insights in your thought. Understanding precedes deeper harmony.
        </p>
      </div>

      {/* Button/Loading for Divine Law Treatment */}
      {showDivineLawTreatmentButton && !isFetchingDivineLawTreatment && !divineLawTreatmentText && (
        <div className="mt-6 text-center">
          <button
            onClick={onContinueToDivineLaw}
            className="py-3 px-6 border border-transparent rounded-lg shadow-md text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-slate-400 disabled:cursor-not-allowed transition duration-150 ease-in-out active:bg-blue-800 app-sans-serif"
          >
            Continue to Treat this in Divine Law
          </button>
        </div>
      )}

      {isFetchingDivineLawTreatment && (
        <div className="flex flex-col justify-center items-center py-8 app-sans-serif mt-6">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-blue-500 mb-3"></div>
          <p className="text-lg text-slate-600">Expanding Understanding in Divine Law...</p>
        </div>
      )}

      {/* Divine Law Treatment Display */}
      {divineLawTreatmentText && !isFetchingDivineLawTreatment && (
        <div className="mt-8 p-6 bg-white border border-slate-200 rounded-lg shadow-lg animate-fadeIn">
          <h2 className="text-2xl font-semibold text-blue-900 mb-3">
            Deeper Healing in Divine Law
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed text-justify">
            {divineLawParagraphs.map((paragraph, index) => (
              <p key={`divine-${index}`} className="text-base md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
          <p className="mt-6 text-sm text-center text-slate-600 italic app-sans-serif">
            Embrace this Truth. Wholeness is your inherent state, established in Divine Law.
          </p>
        </div>
      )}

      {/* Plant Your Faith-Seed Section */}
      {divineLawTreatmentText && !isFetchingDivineLawTreatment && (
        <div id="faith-seed-section" className="mt-10 p-6 bg-white border border-slate-200 rounded-lg shadow-lg animate-fadeIn app-sans-serif">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4 text-center">
            Cultivate and Share the Blessing
          </h2>
          <p className="text-slate-700 leading-relaxed mb-3 text-justify">
            If this understanding of Divine Law has resonated with you and brought a sense of peace or clarity, you may feel inspired to "plant a seed of faith." This is an opportunity to express gratitude and participate in the flow of abundance by supporting Allow Ministries, which helps share this light with others.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4 text-justify italic">
            Living by faith is a pathway to experiencing divine harmony. As it is written, "For we walk by faith, not by sight" (2 Corinthians 5:7), and "without faith it is impossible to please Him, for he who comes to God must believe that He is, and that He is a rewarder of those who diligently seek Him" (Hebrews 11:6).
          </p>
          <p className="text-slate-700 leading-relaxed mb-1 text-justify">
            The scriptures promise abundant returns when we honor the Source of all good with our substance:
          </p>
          <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-3 bg-blue-50 text-slate-700 italic">
            <p className="mb-1">"Bring all the tithes into the storehouse... And try Me now in this," says the Lord of hosts, "If I will not open for you the windows of heaven And pour out for you such blessing That there will not be room enough to receive it." (Malachi 3:10)</p>
            <p>"Honor the Lord with your possessions, And with the firstfruits of all your increase; So your barns will be filled with plenty, And your vats will overflow with new wine." (Proverbs 3:9-10)</p>
          </blockquote>
          <p className="text-slate-700 leading-relaxed mt-4 mb-6 text-justify">
            If you feel moved to sow into this work, you can do so through Allow Ministries. Your contribution helps to further the reach of these uplifting truths.
          </p>

          {/* Qualification Criteria */}
          <div className="grid md:grid-cols-2 gap-6 mb-6 text-left">
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

          <div className="text-center">
            <a
              href="https://www.thereisnothingbutgod.com/tithing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-3 px-8 border border-transparent rounded-lg shadow-md text-lg font-medium text-black bg-amber-400 hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400 transition duration-150 ease-in-out active:bg-amber-600"
            >
              Plant Your Faith-Seed!
            </a>
          </div>
          <p className="mt-6 text-xs text-center text-slate-600">
            (You will be directed to Allow Ministries' tithing page.)
          </p>
        </div>
      )}
    </div>
  );
};

export default TreatmentDisplay;