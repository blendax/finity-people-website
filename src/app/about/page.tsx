import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Finity People — our story, values, team, and culture.",
};

export default function AboutPage() {
  return <AboutContent />;
}
