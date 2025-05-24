
import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import UserInputForm from './components/UserInputForm';
import TreatmentDisplay from './components/TreatmentDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import Footer from './components/Footer';
import PersonalGuidanceCTA from './components/PersonalGuidanceCTA'; // Import the new component
import { getHealingTreatment, getDivineLawTreatment } from './services/geminiService';

const App: React.FC = () => {
  const [userProblemQuery, setUserProblemQuery] = useState<string>(''); // For the submitted query
  const [problemInput, setProblemInput] = useState<string>(''); // For controlling UserInputForm

  const [initialTreatmentText, setInitialTreatmentText] = useState<string>('');
  const [divineLawTreatmentText, setDivineLawTreatmentText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFetchingDivineLawTreatment, setIsFetchingDivineLawTreatment] = useState<boolean>(false);
  const [showDivineLawTreatmentButton, setShowDivineLawTreatmentButton] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleRequestTreatment = useCallback(async (problemDescription: string) => {
    if (!problemDescription.trim()) {
      setError('Please describe the concern you wish to explore.');
      setInitialTreatmentText('');
      setDivineLawTreatmentText('');
      setShowDivineLawTreatmentButton(false);
      return;
    }
    setIsLoading(true);
    setError(null);
    setInitialTreatmentText('');
    setDivineLawTreatmentText('');
    setShowDivineLawTreatmentButton(false);
    setUserProblemQuery(problemDescription); 

    try {
      const aiResponse = await getHealingTreatment(problemDescription);
      setInitialTreatmentText(aiResponse);
      setShowDivineLawTreatmentButton(true);
    } catch (err) {
      console.error('Error getting initial treatment:', err);
      const errorMessage = (err instanceof Error) ? err.message : 'An unknown error occurred.';
      setError(`A point for reflection: ${errorMessage} If the issue persists, remember the clarity you seek is always accessible.`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleContinueToDivineLaw = useCallback(async () => {
    if (!userProblemQuery || !initialTreatmentText) return;

    setIsFetchingDivineLawTreatment(true);
    setError(null); 
    setShowDivineLawTreatmentButton(false); 

    try {
      const aiResponse = await getDivineLawTreatment(userProblemQuery, initialTreatmentText);
      setDivineLawTreatmentText(aiResponse);
    } catch (err) {
      console.error('Error getting Divine Law treatment:', err);
      const errorMessage = (err instanceof Error) ? err.message : 'An unknown error occurred.';
      setError(`A point for reflection: ${errorMessage} The path to understanding is ever-present.`);
    } finally {
      setIsFetchingDivineLawTreatment(false);
    }
  }, [userProblemQuery, initialTreatmentText]);

  const handleRestart = () => {
    setUserProblemQuery('');
    setProblemInput(''); // Clear the input form field
    setInitialTreatmentText('');
    setDivineLawTreatmentText('');
    setIsLoading(false);
    setIsFetchingDivineLawTreatment(false);
    setShowDivineLawTreatmentButton(false);
    setError(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showRestartButton = initialTreatmentText || divineLawTreatmentText || error;

  return (
    <div className="flex flex-col min-h-screen items-center text-slate-800 p-4 md:p-8 selection:bg-sky-200 selection:text-sky-900">
      <Header />
      <main className="w-full max-w-3xl mx-auto bg-white/80 backdrop-blur-lg shadow-2xl rounded-xl p-6 md:p-10 my-8 flex-grow flex flex-col">
        
        {showRestartButton && (
          <div className="mb-6 text-center">
            <button
              onClick={handleRestart}
              className="py-2 px-5 border border-sky-500 text-sky-600 rounded-lg hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-sky-500 app-sans-serif transition-colors duration-150 ease-in-out"
              aria-label="Start a new reflection"
            >
              Start New Reflection
            </button>
          </div>
        )}

        <UserInputForm 
          onSubmit={handleRequestTreatment} 
          isLoading={isLoading || isFetchingDivineLawTreatment}
          value={problemInput}
          onChange={setProblemInput}
        />
        
        {isLoading && <LoadingSpinner />}
        
        {error && (
          <div className="mt-6 p-4 bg-red-100 border border-red-300 text-red-700 rounded-lg app-sans-serif">
            <p>{error}</p>
          </div>
        )}
        
        {initialTreatmentText && !isLoading && (
          <TreatmentDisplay 
            initialTreatmentText={initialTreatmentText} 
            originalQuery={userProblemQuery}
            onContinueToDivineLaw={handleContinueToDivineLaw}
            isFetchingDivineLawTreatment={isFetchingDivineLawTreatment}
            divineLawTreatmentText={divineLawTreatmentText}
            showDivineLawTreatmentButton={showDivineLawTreatmentButton}
          />
        )}

        {!isLoading && !initialTreatmentText && !error && (
           <div className="mt-6 text-center text-slate-600 flex-grow flex flex-col justify-center items-center">
            <p className="app-sans-serif text-base">
              To begin with an AI-powered reflection, please share your concern in the form above.
            </p>
          </div>
        )}
        
        {/* Personal Guidance CTA - always visible below treatment/placeholder */}
        <PersonalGuidanceCTA />

      </main>
      <Footer />
    </div>
  );
};

export default App;
