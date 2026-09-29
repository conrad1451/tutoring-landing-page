// app/algebra-2/page.tsx  ->  /algebra-2
import type { Metadata } from "next";
import LandingPage from "../components/LandingPage";

// CHQ: Claude AI (Sonnet) generated file

export const metadata: Metadata = {
  title: "Algebra 2 Tutoring | Fix Shaky Algebra 1 Foundations",
  description:
    "Online Algebra 2 tutoring for students with shaky Algebra 1 foundations. Targeted diagnostics and one to three weekly sessions.",
};

export default function Algebra2Page() {
  return (
    <LandingPage
      longHeadline
      badge="1-on-1 Online Algebra 2 Tutoring"
      headline="I help Algebra 2 students who have shaky foundations in Algebra 1 to fortify their foundations through targeted diagnostics and one to three weekly sessions"
      intro="Algebra 2 builds directly on Algebra 1. When gaps in the basics make new topics feel impossible, we find exactly where they are and fix them, so the current course finally starts to click."
    />
  );
}