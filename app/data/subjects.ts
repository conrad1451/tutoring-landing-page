// app/data/subjects.ts

// CHQ: Gemini AI refactored into its own component

export interface Subject {
  id: string;
  title: string;
  description: string;
}

export const subjects: Subject[] = [
  {
    id: "algebra",
    title: "Algebra 1 & 2",
    description: "Build a solid foundation in equations, functions, graphing, and polynomial operations.",
  },
  {
    id: "calculus",
    title: "AP Calculus AB",
    description: "Master limits, derivatives, integrals, and exam-taking strategies to deeply understand and crush the course.",
  },
  {
    id: "ap-csp",
    title: "AP Computer Science Priciples",
    description: "Understand the fundamentals of computer science - it is all about storing and transforming data.",
  },  
  {
    id: "sat-test-prep",
    title: "SAT Test Prep",
    description: "SAT test prep for upcoming unit exams, midterm prep, and final assessments.",
  },
  {
    id: "linear-algebra",
    title: "Linear Algebra",
    description: "It is all about the vector. It has always been. You will learn how.",
  },
  {
    id: "linux",
    title: "Linux",
    description: "Learn how to use Linux and the terminal!",
  },
];