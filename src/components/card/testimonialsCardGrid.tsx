import React from "react";
import arrow from "../../public/arrow.svg";
import Image from "next/image";

type TestimonialCardProps = {
  text: string;
  name: string;
  role: string;
  image: string;
};

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ text, name, role, image }) => {
  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm break-inside-avoid">
      <p className="text-gray-700 text-base mb-6">“ {text} ”</p>
      <div className="flex items-center gap-3 mt-auto">
        <Image src={image} alt={name} width={40} height={40} className="rounded-full object-cover" />
        <div>
          <p className="font-medium text-lg text-gray-600">{name}</p>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};
