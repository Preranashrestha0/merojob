import { Check } from "lucide-react";

const values = [
  "Innovation",
  "Security",
  "User-Centric Design",
  "Transparency",
  "Empowerment",
];

export default function ValuesList() {
  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-4 text-sm lg:text-base">Key Values and Vision</h3>
      <ul className="flex flex-wrap gap-x-6 gap-y-3 text-gray-700">
        {values.map((value) => (
          <li key={value} className="flex items-center text-sm lg:text-base gap-2">
            <Check className="text-white bg-teal-800 w-4 h-4 p-0.5 text-xs lg:text-base rounded-full " />
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
