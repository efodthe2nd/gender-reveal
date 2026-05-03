"use client";

import { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: string;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // Initial call

    return () => clearInterval(timer);
  }, [targetDate]);

  const timerItems = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-4 justify-center mt-6">
      {timerItems.map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <div className="bg-gradient-to-br from-[#EC4899] to-[#3B82F6] w-14 h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center shadow-md mb-1">
            <span className="text-white font-bold text-xl md:text-2xl">
              {String(item.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
