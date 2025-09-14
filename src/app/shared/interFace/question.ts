export interface QuestionsResponse {
  message: string;
  questions: Question[];
}

export interface Question {
  answers: Answer[];
  type: Type;
  _id: string;
  question: string;
  correct: Correct;
  subject: null;
  exam: Exam;
  createdAt: Date;
}

export interface Answer {
  answer: string;
  key: Correct;
}

export enum Correct {
  A1 = "A1",
  A2 = "A2",
  A3 = "A3",
  A4 = "A4",
}

export interface Exam {
  _id: string;
  title: string;
  duration: number;
  subject: string;
  numberOfQuestions: number;
  active: boolean;
  createdAt: Date;
}

export enum Type {
  SingleChoice = "single_choice",
}

export interface QuestionAdapt {
  answers: Answer[];
  _id: string;
  index: number;
  question: string;
  correct: string;
  selectedAnswer?: string;
}
export interface WrongQuestion {
  _id: string;
  question: string;
  correctAnswer: string;
  userAnswer: string;
  answers: { key: string; answer: string; isCorrect: boolean }[];
}