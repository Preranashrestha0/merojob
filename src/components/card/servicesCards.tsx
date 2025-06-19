import { ShieldCheck, LineChart, TrendingUp } from "lucide-react";
import Card from "./servicesCardGrid";
import digitalpayment from "../../public/digitalpayments.svg";
import Image from "next/image";

export const cardData = [
  {
    title: "Digital Payments",
    description:
      "Seamless and secure transactions through various digital platforms, enabling quick and convenient payments for businesses and consumers alike.",
    icon: <Image src={digitalpayment} alt="digital" />,
  },
  {
    title: "Personal Finance Management",
    description:
      "Add your personal or business details to tailor the platform to your specific needs.",
    icon: <ShieldCheck size={32} />,
  },
  {
    title: "Explore Features",
    description:
      "Access your dashboard for a summary of your finances: balances, recent transactions, and insights.",
    icon: <LineChart size={32} />,
  },
  {
    title: "Invest and Grow",
    description:
      "Discover a variety of investment opportunities tailored to your financial goals.",
    icon: <TrendingUp size={32} />,
  },
];
export default function CardGrid() {
  return (
    <section className="py-12 px-10 max-w-6xl mx-auto">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
        
      </div>
    </section>
  );
}