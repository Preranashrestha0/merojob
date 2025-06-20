// components/AnimatedCounter.js
"use client"
import { useEffect, useState } from 'react';

export interface CounterProps {
    endValue: number,
    duration: number,
  }


const AnimatedCounter = ({ endValue, duration }: CounterProps) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const startValue = 0;
    const steps = 60; // Number of steps for the animation
    const stepDuration = duration / steps; // Duration of each step in milliseconds
    let currentStep = 0;

    const updateCounter = () => {
      currentStep += 1;
      const progress = Math.min(currentStep / steps, 1); // Clamp progress between 0 and 1
      const newValue = Math.ceil(startValue + progress * (endValue - startValue));
      setCounter(newValue);

      if (progress < 1) {
        requestAnimationFrame(updateCounter); // Continue animation
      }
    };

    const animationId = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationId); // Cleanup animation frame on component unmount
  }, [endValue, duration]);

  return <span>{counter.toLocaleString('en')}</span>;
};

export default AnimatedCounter;
