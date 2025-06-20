// components/WhyChooseUs.tsx
import { Play, User, LineChart, Headphones, Shield } from 'lucide-react';
import FeatureItem from './FeatureItem';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <User size={20} />,
      title: 'User-Friendly Interface',
      description: 'Easy navigation with responsive design for various devices.',
    },
    {
      icon: <LineChart size={20} />,
      title: 'Financial Analytics',
      description: 'Budget tracking, expense categorization, and insights.',
    },
    {
      icon: <Headphones size={20} />,
      title: 'Customer Support',
      description: '24/7 service via chat, email, phone, and a detailed help center.',
    },
    {
      icon: <Shield size={20} />,
      title: 'Security Features',
      description: 'Data encryption, fraud detection, and prevention mechanisms.',
    },
  ];

  return (
    <section className="bg-green-50 rounded-2xl p-7 md:p-16 max-w-7xl">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-4xl font-semibold mb-4 text-gray-900">Why Choose us</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-base">
            Experience the future of finance with our secure, efficient, and user-friendly financial services.
            Our cutting-edge platform ensures your transactions are safe, streamlined, and easy to manage,
            empowering you to take control of your financial journey with confidence and convenience.
          </p>

          <button className="flex items-center gap-2 bg-[#215c5c] text-white px-5 py-3 rounded-lg  transition">
            <Play size={20} className="rounded-full w-8 h-8 fill-[#215c5c] border border-white bg-white" />
            <span className="font-semibold">Watch the Video</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
