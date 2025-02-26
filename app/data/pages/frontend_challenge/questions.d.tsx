// questions.d.ts (or create a types folder and put it inside)
interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: string;
  category: string;
  title1?: string; // Optional title1
  title2?: string; // Optional title2
  subtitle?: string; // Optional subtitle
}

interface Welcome {
  question: string;
  title1: string;
  title2: string;
  subtitle: string;
  options: string[];
  category: string;
}

interface Result {
  question: string;
  title1: string;
  title2: string;
  subtitle: string;
  options: string[];
  category: string;
}

interface QuizData {
  welcome: Welcome[];
  questions: Question[];
  result: Result[]; // Or define the type of 'result' if you know it
}

declare module "*.json" {
  const value: QuizData;
  export default value;
}
