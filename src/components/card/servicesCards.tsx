import Card from "./servicesCardGrid";
import digitalPayment from "../../public/digitalpayments.svg";
import finance from "../../public/finance.svg";
import lending from "../../public/lending.svg";
import investment from "../../public/investment.svg";
import cryptocurrency from "../../public/cryptocurrency.svg"
import insurtech from "../../public/insurtech.svg"
import Image from "next/image";

export const cardData = [
  {
    title: "Digital Payments",
    description:
      "Seamless and secure transactions through various digital platforms, enabling quick and convenient payments for businesses and consumers alike.",
    image: <Image src={digitalPayment} alt="digital" className="stroke-green-800"/>,
  },
  {
    title: "Personal Finance Management",
    description:
      "Seamless and secure transactions through various digital platforms, enabling quick and convenient payments for businesses and consumers alike.",
    image: <Image src={finance} alt="personal finance" className="stroke-green-700"/>,
  },
  {
    title: "Online Lending",
    description:
      "Fast and accessible lending services that provide personal and business loans through online platforms, simplifying the borrowing process.",
    image: <Image src={lending} alt="lending" className="stroke-green-700"/>,
  },
  {
    title: "Investment Platforms",
    description:
      "User-friendly platforms that allow individuals to invest in stocks, bonds, and other assets with minimal barriers, making investment accessible to all.",
    image: <Image src={investment} alt="investment" className="stroke-green-700"/>,
  },
  {
    title: "Cryptocurrency Trading",
    description:
      "Services that facilitate the buying, selling, and trading of cryptocurrencies, offering users a gateway to the digital currency market.",
    image: <Image src={cryptocurrency} alt="cryptocurrency" className="stroke-green-700"/>,
  },
  {
    title: "Insurtech Solutions",
    description:
      "Innovative insurance services that leverage technology to offer personalized policies, faster claims processing, and enhanced customer experiences.",
      image: <Image src={insurtech} alt="insurtech solutions" className="stroke-green-700"/>
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
            image={card.image}
          />
        ))}
        
      </div>
    </section>
  );
}