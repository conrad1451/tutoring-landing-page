// app/precalculus/page.tsx  ->  /precalculus
import type { Metadata } from "next";
import LandingPage from "../components/LandingPage";

// CHQ: Claude AI (Sonnet) generated file

export const metadata: Metadata = {
  title: "Precalculus Tutoring | Fix Shaky Algebra 1 & 2 Foundations",
  description:
    "Online Precalculus tutoring for students with shaky Algebra 1 and 2 foundations. Targeted diagnostics and one to three weekly sessions.",
};

export default function PrecalculusPage() {
  return (
    <LandingPage
      longHeadline
      badge="1-on-1 Online Precalculus Tutoring"
      headline="I help Precalculus students who have shaky foundations in Algebra 1 and 2 to fortify their foundations through targeted diagnostics and one to three weekly sessions"
      intro="Precalculus assumes fluency in the algebra that came before it. We pinpoint the missing pieces, repair them, and connect them to what you're learning now so the course stops feeling like a wall."
    />
  );
}