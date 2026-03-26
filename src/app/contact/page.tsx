import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Finity People. Book a discovery call or send us a message.",
};

export default function ContactPage() {
  return <ContactContent />;
}
