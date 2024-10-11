interface SingleChoiceQuestion {
  type: 'single';
  question: string;
  instruction: string;
  options: string[];
  correctAnswers: number[];
}

interface MultipleChoiceQuestion {
  type: 'multiple';
  question: string;
  instruction: string;
  options: string[];
  correctAnswers: number[];
}

interface TextQuestion {
  type: 'text';
  question: string;
  instruction: string;
  text: string;
}

interface IdentifyQuestion {
  type: 'identify';
  question: string;
  instruction: string;
  options: { name: string; icon: string }[];
}

export type Question = SingleChoiceQuestion | MultipleChoiceQuestion | TextQuestion | IdentifyQuestion;

const testQuestions: Question[] = [
  {
    type: 'single',
    question: 'How many fingers do you see?',
    instruction: 'Please show the patient a certain amount of fingers and note their reaction.',
    options: ['Correct', 'Incorrect'],
    correctAnswers: [0],
  },
  {
    type: 'multiple',
    question: 'Story "Jill went to the shop"',
    instruction: 'Jill went to the shop to buy candies. Afterwards instead of walking to home, s...',
    options: [
      'Jill bought candies.',
      'Jill has a dog as a pet.',
      'Jill took a cab.',
    ],
    correctAnswers: [0, 2],
  },
  {
    type: 'text',
    question: 'Read the sentences',
    instruction: 'Recall question.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    type: 'identify',
    question: 'Identify the animals',
    instruction: 'Please show the patient the following animals and check their response.',
    options: [
      { name: 'Chicken', icon: '🐔' },
      { name: 'Horse', icon: '🐎' },
      { name: 'Dog', icon: '🐕' },
    ],
  },
];

export const fetchQuestions = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(testQuestions);
    }, 2000); 
  });
};
