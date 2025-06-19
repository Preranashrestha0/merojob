import React from "react";
import arrow from "../../public/arrow.svg";
import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  image: React.ReactNode;
};

export default function Card({ title, description, image }: CardProps) {
  return (
    <div className="flex flex-col items-start text-center p-6 border rounded-xl shadow-sm justify-between hover:shadow-md transition-all bg-white max-w-xs mx-auto">
      <div className="mb-8 flex justify-start items-start flex-col">
        
        <div className="mb-4 absolute stroke-green-900 w-12">{image}</div>
        <div className="bg-green-300 opacity-50 rounded-full w-10 h-10 relative bottom-[-10px] left-2 md:left-[20px]"></div>
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-base text-gray-600 text-start">{description}</p>
      <div className="flex mt-10 justify-center text-green-800 gap-3 items-center">
            <div className="bg-white text-green-800 border border-gray-300 rounded-full p-2"> <Image src={arrow} alt="arrow" className="stroke-green-600"/> </div>
            Read More
        </div>
    </div>
  );
}
