// CHQ: Gemini AI refactored into its own component

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  subject?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Helped a Calculus student increase their average exam grade by 10 percentage points.",
    // author: "Alex M.",
    // role: "High School Senior",
    subject: "AP Calculus AB",
  },
  {
    id: "2",
    quote: "Helped a student fortify math foundations to bring them up to grade level",
    // author: "Jordan K.",
    // role: "High School Junior",
    subject: "Algebra 1",
  },
  {
    id: "3",
    quote: "Trained student to use the Linux terminal, install software packages, configure development tools, and prepare CAD files for 3D printing workflows",
    // author: "Parent of 10th Grader",
    // role: "Parent",
    subject: "Linux",
  },
];