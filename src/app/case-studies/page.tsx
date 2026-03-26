import type { Metadata } from "next";
import CaseStudiesContent from "./CaseStudiesContent";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Explore how Finity People has helped organizations transform with data and AI.",
};

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}
