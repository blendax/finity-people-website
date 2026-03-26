import type { Metadata } from "next";
import CareersContent from "./CareersContent";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Finity People — explore open positions in data engineering, AI, analytics, and more.",
};

export default function CareersPage() {
  return <CareersContent />;
}
