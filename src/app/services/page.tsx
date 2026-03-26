import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description: "Data Strategy, Engineering, AI & ML, Analytics, Governance, and AI Transformation services from Finity People.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
