// // components/PricingCard.tsx
// import React from 'react';

// type PricingCardProps = {
//   title: string;
//   description: string;
//   price: string;
//   features?: string[];
//   isHighlighted?: boolean;
// };

// const PricingCard: React.FC<PricingCardProps> = ({
//   title,
//   description,
//   price,
//   features = [],
//   isHighlighted = false,
// }) => {
//   return (
//     <div
//       className={`rounded-2xl p-8 shadow-md transition-all duration-300 w-full max-w-md ${
//         isHighlighted ? 'bg-teal-800 text-white' : 'bg-white text-gray-900 border'
//       }`}
//     >
//       <h3 className="text-2xl font-semibold mb-2">{title}</h3>
//       <p className={`mb-6 ${isHighlighted ? 'text-gray-200' : 'text-gray-600'}`}>{description}</p>

//       <div className="text-3xl font-bold mb-6">
//         <span className={isHighlighted ? 'text-lime-200' : ''}>${price}</span>
//         <span className="text-base font-normal ml-1">/ month</span>
//       </div>

//       <button
//         className={`px-5 py-2 rounded font-medium ${
//           isHighlighted
//             ? 'bg-white text-teal-800 hover:bg-gray-200'
//             : 'bg-teal-800 text-white hover:bg-teal-900'
//         }`}
//       >
//         Get Started
//       </button>

//       {features.length > 0 && (
//         <div className="mt-8">
//           <h4 className={`uppercase text-sm font-bold mb-4 ${isHighlighted ? 'text-lime-200' : 'text-gray-500'}`}>
//             Features
//           </h4>
//           <ul className="space-y-3 text-sm">
//             {features.map((feature, index) => (
//               <li key={index} className="flex items-start gap-2">
//                 <span>✅</span>
//                 <span>{feature}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PricingCard;
