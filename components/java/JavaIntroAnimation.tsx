"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Zap, Code, Cpu, Globe, Shield } from "lucide-react";

const JavaIntroAnimation: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "What is Java? ☕",
      content: "Java is a powerful, object-oriented programming language that's been brewing since 1995!",
      icon: <Coffee className="w-8 h-8 text-orange-500" />,
      emoji: "☕",
      description: "Created by James Gosling at Sun Microsystems, Java became one of the most popular programming languages in the world."
    },
    {
      title: "Write Once, Run Anywhere! 🌍",
      content: "Java code compiles to bytecode that runs on any device with a Java Virtual Machine (JVM).",
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      emoji: "🌍",
      description: "This means your Java program can run on Windows, Mac, Linux, and even mobile devices!"
    },
    {
      title: "Object-Oriented Programming 🏗️",
      content: "Java uses objects and classes to organize code, making it easier to build large applications.",
      icon: <Code className="w-8 h-8 text-green-500" />,
      emoji: "🏗️",
      description: "Think of objects as building blocks - you can create, modify, and combine them to build amazing programs!"
    },
    {
      title: "Safe & Secure 🛡️",
      content: "Java has built-in security features and automatic memory management to prevent common programming errors.",
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      emoji: "🛡️",
      description: "No more worrying about memory leaks or buffer overflows - Java's got your back!"
    },
    {
      title: "High Performance ⚡",
      content: "Java is compiled and optimized by the JVM, making it fast and efficient for large applications.",
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      emoji: "⚡",
      description: "From mobile apps to enterprise systems, Java powers some of the world's biggest applications!"
    }
  ];

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <div className="rounded-3xl border p-6 bg-gradient-to-br from-orange-50 to-red-50 shadow-lg">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-orange-800 mb-2">
          Welcome to Java! ☕
        </h3>
        <p className="text-orange-600">
          Let's explore what makes Java so special
        </p>
      </div>

      <div className="relative min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              className="text-6xl mb-4"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {steps[currentStep].emoji}
            </motion.div>

            <div className="flex justify-center mb-4">
              {steps[currentStep].icon}
            </div>

            <h4 className="text-xl font-bold mb-4 text-gray-800">
              {steps[currentStep].title}
            </h4>

            <p className="text-lg mb-4 text-gray-700">
              {steps[currentStep].content}
            </p>

            <p className="text-sm text-gray-600 italic">
              {steps[currentStep].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={prevStep}
          className="px-4 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors duration-300"
        >
          ← Previous
        </button>

        <div className="flex gap-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentStep 
                  ? "bg-orange-500 w-6" 
                  : "bg-orange-200 hover:bg-orange-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextStep}
          className="px-4 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors duration-300"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default JavaIntroAnimation;