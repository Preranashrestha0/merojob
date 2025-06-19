import Image from "next/image";
import { steps } from "@/app/data/stepsdata";
import archline from "../public/arch-line.svg"
import archlineReverse from "../public/arch-line-reverse.svg"

export default function StepsTimeline() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex flex-wrap justify-center gap-y-16 relative">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className="flex flex-col items-center w-[250px] text-center relative"
          >
            {/* Step Circle */}
            <div className="w-14 h-14 bg-teal-800 text-white rounded-full flex items-center justify-center text-lg font-semibold mb-4">
              {step.number}
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="absolute top-5 right-[-60px] w-[120px] hidden lg:block">
                <Image
                  src={index % 2 === 0 ? archline : archlineReverse}
                  alt="connector"
                  width={120}
                  height={50}
                />
              </div>
            )}

            {/* Step Text */}
            <h4 className="text-gray-900 font-semibold mb-2">{step.title}</h4>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}