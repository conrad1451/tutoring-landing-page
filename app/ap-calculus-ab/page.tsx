// app/ap-calculus-ab/page.tsx  ->  /ap-calculus-ab
import type { Metadata } from "next";
import LandingPage from "../components/LandingPage";

// CHQ: Claude AI (Sonnet) generated file

export const metadata: Metadata = {
  title: "AP Calculus AB Tutoring | Fix Shaky Algebra & Precalculus Foundations",
  description:
    "Online AP Calculus AB tutoring for students with shaky Algebra and Precalculus foundations. Targeted diagnostics and one to three weekly sessions.",
};

export default function APCalculusABPage() {
  return (
    <LandingPage
      longHeadline
      badge="1-on-1 Online AP Calculus AB Tutoring"
      headline="I help AP Calculus AB students who have shaky foundations in Algebra and Precalculus to fortify their foundations through targeted diagnostics and one to three weekly sessions"
      intro="Most calculus struggles are really algebra and precalculus struggles in disguise. We locate the gaps, close them, and build the confidence to handle limits, derivatives, and integrals."
    />
  );
}