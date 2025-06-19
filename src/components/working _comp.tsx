import React from 'react'
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from './ui/button';

type WorkingCardProps = {
  title: string;
  description: string;
  button: string;
};

const Card: React.FC<WorkingCardProps> = ({ title, description, button }) => {
  const content = (
   
      <div>
        <Button variant={'default'}>{button}</Button>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );

  return content;
};

