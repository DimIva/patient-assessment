import React, { useState } from 'react';
import { HeaderWithButton } from '../components/HeaderWithButton';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../components/Loader';
import { useFetchQuestions } from '../hooks/useFetchQuestions';

export const Assessment: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const { data, isLoading, isError } = useFetchQuestions();
  const [showResults, setShowResults] = useState(false);

  
  if (isLoading) {
    return <Loader title="Loading assessment" />; // Display loader while fetching data
  }

  if (isError) {
    return <div>Error loading assessment.</div>; // Display error message if fetching fails
  }

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
  };

  const handleContinue = () => {
    if (currentQuestion < data.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateResults = () => {
    let correct = 0;
    data.forEach((question, index) => {
      if (question.type === 'single' || question.type === 'multiple') {
        if (JSON.stringify(answers[index]) === JSON.stringify(question.correctAnswers)) {
          correct++;
        }
      }
    });
    return {
      score: correct,
      total: data.length,
      percentage: Math.round((correct / data.length) * 100)
    };
  };

  const renderResults = () => {
    const results = calculateResults();
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Confirm the results</h2>
        <div className="relative w-40 h-40 mx-auto">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#E6E6E6"
              strokeWidth="2"
            />
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#4CD964"
              strokeWidth="2"
              strokeDasharray={`${results.percentage}, 100`}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold">{results.score}</span>
          </div>
        </div>
        <div className="space-y-2">
          {data.map((question, index) => (
            <div key={index} className="flex justify-between items-center">
              <span>Question {index + 1}</span>
              <span className={answers[index]?.length > 0 ? "text-green-500" : "text-red-500"}>
                {answers[index]?.length > 0 ? "Correct" : "Incorrect"}
              </span>
            </div>
          ))}
        </div>
        <div className="flex space-x-2">
          <button
            className="flex-1 py-3 bg-gray-200 text-black rounded-full"
            onClick={() => setShowResults(false)}
          >
            Back
          </button>
          <button
            className="flex-1 py-3 bg-black text-white rounded-full"
            onClick={() => console.log('Print results')}
          >
            Print
          </button>
        </div>
      </div>
    );
  };

  if (showResults) {
    return (
      <div className="max-w-md mx-auto p-4 space-y-4">
        <HeaderWithButton onClick={() => navigate("../assessment-create")} title="Assessment" />
        {renderResults()}
      </div>
    );
  }

  const renderQuestion = () => {
    const question = data[currentQuestion];
    switch (question.type) {
      case 'single':
      case 'multiple':
        return (
          <div className="space-y-2">
            {question.options.map((option, index) => (
              <div
                key={index}
                className={`p-3 border rounded-lg ${
                  answers[currentQuestion]?.includes(index)
                    ? 'bg-orange-100 border-orange-500'
                    : 'border-gray-300'
                }`}
                onClick={() => handleAnswer([index])}
              >
                {option}
              </div>
            ))}
          </div>
        );
      case 'text':
        return <div className="p-4 bg-gray-100 rounded-lg">{question.text}</div>;
      case 'identify':
        return (
          <div className="space-y-2">
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{option.icon}</span>
                  <span>{option.name}</span>
                </div>
                <div
                  className={`w-12 h-6 rounded-full ${
                    answers[currentQuestion]?.includes(index) ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                  onClick={() => handleAnswer([index])}
                >
                  <div
                    className={`w-6 h-6 rounded-full bg-white transform transition-transform ${
                      answers[currentQuestion]?.includes(index) ? 'translate-x-6' : ''
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <HeaderWithButton onClick={() => navigate("../assessment-create")} title="Assessment" />
      <div className="flex space-x-1">
        {data.map((_, index) => (
          <div
            key={index}
            className={`h-1 flex-grow ${
              index <= currentQuestion ? 'bg-black' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
      <h2 className="text-xl font-semibold">{data[currentQuestion].question}</h2>
      <p className="text-sm text-gray-600">{data[currentQuestion].instruction}</p>
      {renderQuestion()}
      <button
        className="w-full py-3 bg-black text-white rounded-full"
        onClick={handleContinue}
      >
        {currentQuestion === data.length - 1 ? 'Finish' : 'Continue'}
      </button>
    </div>
  );
};