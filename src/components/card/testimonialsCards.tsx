import John from "../../public/john.jpeg";
import Emily from "../../public/emily.jpeg";
import Michael from "../../public/michael.jpeg";
import James from "../../public/james.jpeg";
import Sarah from "../../public/sarah.jpeg"
import Laura from "../../public/laura.jpeg"
import Image from "next/image";
import { TestimonialCard } from "./testimonialsCardGrid";

export const TestimonialsData = [
   {
    text: "This platform has completely transformed the way I manage my business finances. The real-time transaction tracking and seamless payment options have saved me so much time and effort!",
    name: "John Davis",
    role: "Small Business Owner",
    image: John,
  },
  {
    text: "As a freelancer, managing my finances can be overwhelming. The budgeting tools and personalized insights have made it so much easier to stay on top of my expenses and plan for the future.",
    name: "Emily Smith",
    role: "Freelancer",
    image: Emily,
  },
  {
    text: "The investment options and portfolio management tools on this platform are top-notch. The variety of choices caters to all types of investors, from conservative to aggressive. I especially appreciate how the tailored recommendations align perfectly with my financial goals. It’s a game-changer for anyone serious about growing their wealth.",
    name: "Michael Rodriguez",
    role: "Investor",
    image: Michael,
  },
  {
    text: "The security features are outstanding. Knowing that my financial data is protected gives me peace of mind, and the platform's efficiency makes it a pleasure to use.",
    name: "James Kim",
    role: "IT Consultant",
    image: James,
  },
  {
    text: "I never thought managing money could be this simple! The user-friendly interface and secure transaction process give me the confidence to handle my finances independently.",
    name: "Sarah Lee",
    role: "College Student",
    image: Sarah,
  },
  {
    text: "The platform’s intuitive design and robust features have been a game-changer for my startup. It’s helped me streamline operations and focus on growing my business.",
    name: "Laura Brown",
    role: "Entrepreneur",
    image: Laura,
  },
];

export default function TestimonialCards() {
   return (
    <main className="h-fit px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {TestimonialsData.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </main>
  );
}