import type { Metadata } from "next";
import InsightsContent from "./InsightsContent";

export const metadata: Metadata = {
  title: "Insights",
  description: "Articles, whitepapers, and thought leadership on data, AI, and analytics from Finity People.",
};

export default function InsightsPage() {
  return <InsightsContent />;
}
