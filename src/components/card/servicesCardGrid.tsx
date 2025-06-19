import React from "react";
import arrow from "../../public/arrow.svg";
import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

export default function Card({ title, description, icon }: CardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 border rounded-xl shadow-sm hover:shadow-md transition-all bg-white max-w-xs mx-auto">
      {icon && <div className="mb-4 text-teal-800">{icon}</div>}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <div className="flex flex-">
            <div className="bg-white text-green-800 border-green-700"> <Image src={arrow} alt="arrow"/> </div>
            Read More
        </div>
    </div>
  );
}
