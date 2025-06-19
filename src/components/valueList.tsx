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
      <h3 className="font-semibold text-gray-900 mb-4">Key Values and Vision</h3>
      <ul className="flex flex-wrap gap-x-6 gap-y-3 text-gray-700">
        {values.map((value) => (
          <li key={value} className="flex items-center gap-2">
            <Check className="text-white bg-teal-800 w-5 h-5 rounded-full " />
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
