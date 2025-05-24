import React from 'react';

interface UserInputFormProps {
  onSubmit: (problemDescription: string) => void;
  isLoading: boolean;
  value: string;
  onChange: (value: string) => void;
}

const UserInputForm: React.FC<UserInputFormProps> = ({ onSubmit, isLoading, value, onChange }) => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 app-sans-serif">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 tracking-tight mb-3">
          DAILY TREATMENT APP:
          Divine Law Treatment Is The Key to Riches, True Romance, and Permanent Wellbeing. Lift Your Thought!
        </h2>
      </div>
      <div>
        <label htmlFor="problemDescription" className="block text-lg font-medium text-slate-700 mb-2">
          Whenever something is troubling you, any condition, use this to give yourself a Divine Law treatment. (Reach out to me personally if you need more help breaking through).
        </label>
        <textarea
          id="problemDescription"
          name="problemDescription"
          rows={5}
          className="block w-full p-3 border border-slate-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out text-base placeholder-slate-400 bg-white disabled:bg-slate-50 disabled:text-slate-500"
          placeholder="e.g., 'I am experiencing persistent anxiety and wish to understand its underlying emotional conflict.'"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={isLoading}
          aria-required="true"
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={isLoading || !value.trim()}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-slate-400 disabled:cursor-not-allowed transition duration-150 ease-in-out active:bg-blue-800"
        >
          {isLoading ? 'Seeking Insight...' : 'Request Guidance'}
        </button>
      </div>
    </form>
  );
};

export default UserInputForm;