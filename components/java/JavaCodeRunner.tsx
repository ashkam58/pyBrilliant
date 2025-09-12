"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, RotateCcw, Coffee, Code2, Sparkles } from "lucide-react";

const JavaCodeRunner: React.FC = () => {
  const [currentExample, setCurrentExample] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState("");
  const [showOutput, setShowOutput] = useState(false);

  const examples = [
    {
      title: "Hello World! 👋",
      description: "Your first Java program",
      code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java World! ☕");
        System.out.println("Welcome to programming!");
    }
}`,
      expectedOutput: "Hello, Java World! ☕\nWelcome to programming!",
      explanation: "This is the classic 'Hello World' program. Every Java application starts with a main method!"
    },
    {
      title: "Variables & Math 🧮",
      description: "Working with numbers and variables",
      code: `public class MathExample {
    public static void main(String[] args) {
        int age = 15;
        double price = 19.99;
        String name = "Java Learner";
        
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Price: $" + price);
        System.out.println("Next year: " + (age + 1));
    }
}`,
      expectedOutput: "Name: Java Learner\nAge: 15\nPrice: $19.99\nNext year: 16",
      explanation: "Variables store data! Java has different types like int for whole numbers, double for decimals, and String for text."
    },
    {
      title: "Conditions & Logic 🤔",
      description: "Making decisions with if statements",
      code: `public class ConditionExample {
    public static void main(String[] args) {
        int temperature = 75;
        String weather;
        
        if (temperature > 80) {
            weather = "Hot! ☀️";
        } else if (temperature > 60) {
            weather = "Nice! 🌤️";
        } else {
            weather = "Cold! ❄️";
        }
        
        System.out.println("Temperature: " + temperature + "°F");
        System.out.println("Weather: " + weather);
    }
}`,
      expectedOutput: "Temperature: 75°F\nWeather: Nice! 🌤️",
      explanation: "if statements let your program make decisions based on conditions. Very useful for creating smart applications!"
    }
  ];

  const runCode = async () => {
    setIsRunning(true);
    setShowOutput(false);
    setOutput("");

    // Simulate compilation and execution
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setOutput(examples[currentExample].expectedOutput);
    setShowOutput(true);
    setIsRunning(false);
  };

  const resetOutput = () => {
    setShowOutput(false);
    setOutput("");
  };

  const nextExample = () => {
    setCurrentExample((prev) => (prev + 1) % examples.length);
    resetOutput();
  };

  const prevExample = () => {
    setCurrentExample((prev) => (prev - 1 + examples.length) % examples.length);
    resetOutput();
  };

  return (
    <div className="rounded-3xl border p-6 bg-white/80 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Coffee className="w-6 h-6 text-orange-500" />
          Interactive Java Code Runner
        </h3>
        
        <div className="flex items-center gap-2">
          <button
            onClick={prevExample}
            className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            ←
          </button>
          <span className="text-sm text-gray-600">
            {currentExample + 1} / {examples.length}
          </span>
          <button
            onClick={nextExample}
            className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            →
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentExample}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-4">
            <h4 className="text-lg font-bold text-orange-700 mb-1">
              {examples[currentExample].title}
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              {examples[currentExample].description}
            </p>
          </div>

          {/* Code Editor */}
          <div className="bg-gray-900 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-2 flex items-center gap-1">
                  <Code2 className="w-4 h-4" />
                  Main.java
                </span>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={resetOutput}
                  className="px-3 py-1 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 transition-colors flex items-center gap-1"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset
                </button>
                <button
                  onClick={runCode}
                  disabled={isRunning}
                  className="px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50 transition-colors flex items-center gap-1"
                >
                  {isRunning ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Sparkles className="w-4 h-4" />
                      </motion.div>
                      Running...
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      Run
                    </>
                  )}
                </button>
              </div>
            </div>

            <pre className="text-green-400 text-sm font-mono overflow-x-auto">
              <code>{examples[currentExample].code}</code>
            </pre>
          </div>

          {/* Output Terminal */}
          <div className="bg-gray-800 rounded-lg p-4 mb-4 min-h-[100px]">
            <div className="flex items-center gap-2 mb-2">
              <div className="text-gray-400 text-sm">Output:</div>
            </div>
            
            <AnimatePresence>
              {showOutput && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-green-300 font-mono text-sm whitespace-pre-line"
                >
                  {output}
                </motion.div>
              )}
            </AnimatePresence>
            
            {!showOutput && !isRunning && (
              <div className="text-gray-500 text-sm italic">
                Click "Run" to see the output! 🚀
              </div>
            )}
            
            {isRunning && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-yellow-400 text-sm flex items-center gap-2"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  ⚙️
                </motion.div>
                Compiling and running...
              </motion.div>
            )}
          </div>

          {/* Explanation */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
            <p className="text-blue-800 text-sm">
              💡 <strong>Explanation:</strong> {examples[currentExample].explanation}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default JavaCodeRunner;