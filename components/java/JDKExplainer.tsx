"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Settings, Code, Play, CheckCircle } from "lucide-react";

const JDKExplainer: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  const components = [
    {
      id: "jdk",
      title: "JDK (Java Development Kit)",
      emoji: "🛠️",
      color: "orange",
      description: "The complete toolkit for Java development",
      details: [
        "Includes JRE + development tools",
        "javac compiler to convert .java to .class files",
        "Debugger and other development utilities",
        "JavaDoc for generating documentation"
      ]
    },
    {
      id: "jre",
      title: "JRE (Java Runtime Environment)",
      emoji: "⚙️",
      color: "blue",
      description: "What you need to run Java programs",
      details: [
        "Includes JVM + standard libraries",
        "No compiler - just for running programs",
        "Standard Java libraries and APIs",
        "Platform-specific runtime components"
      ]
    },
    {
      id: "jvm",
      title: "JVM (Java Virtual Machine)",
      emoji: "🖥️",
      color: "green",
      description: "The engine that runs Java bytecode",
      details: [
        "Executes compiled Java bytecode",
        "Handles memory management automatically",
        "Provides platform independence",
        "Garbage collection for memory cleanup"
      ]
    }
  ];

  const compilationSteps = [
    {
      step: 1,
      title: "Write Java Code",
      file: "HelloWorld.java",
      icon: <Code className="w-6 h-6" />,
      description: "You write human-readable Java source code"
    },
    {
      step: 2,
      title: "Compile with javac",
      file: "HelloWorld.class",
      icon: <Settings className="w-6 h-6" />,
      description: "JDK compiler converts source to bytecode"
    },
    {
      step: 3,
      title: "Run with java",
      file: "Output",
      icon: <Play className="w-6 h-6" />,
      description: "JVM executes the bytecode"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      orange: "bg-orange-100 border-orange-300 text-orange-800",
      blue: "bg-blue-100 border-blue-300 text-blue-800",
      green: "bg-green-100 border-green-300 text-green-800"
    };
    return colors[color as keyof typeof colors] || colors.orange;
  };

  return (
    <div className="space-y-6">
      {/* JDK Components Section */}
      <div className="rounded-3xl border p-6 bg-white/80 shadow-sm">
        <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Understanding Java Components 🧩
        </h3>
        
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {components.map((component) => (
            <motion.div
              key={component.id}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                activeComponent === component.id 
                  ? getColorClasses(component.color) + " scale-105 shadow-lg"
                  : "bg-gray-50 border-gray-200 hover:bg-gray-100"
              }`}
              onClick={() => setActiveComponent(
                activeComponent === component.id ? null : component.id
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-center">
                <div className="text-3xl mb-2">{component.emoji}</div>
                <h4 className="font-bold text-sm mb-1">{component.title}</h4>
                <p className="text-xs opacity-80">{component.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {activeComponent && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              {components
                .filter(comp => comp.id === activeComponent)
                .map(component => (
                  <div key={component.id} className={`p-4 rounded-xl ${getColorClasses(component.color)}`}>
                    <h5 className="font-bold mb-2 flex items-center gap-2">
                      <span className="text-xl">{component.emoji}</span>
                      {component.title}
                    </h5>
                    <ul className="space-y-1">
                      {component.details.map((detail, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckCircle className="w-4 h-4 flex-shrink-0" />
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Compilation Process */}
      <div className="rounded-3xl border p-6 bg-gradient-to-br from-yellow-50 to-orange-50 shadow-sm">
        <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
          From Code to Execution 🔄
        </h3>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {compilationSteps.map((step, index) => (
            <div key={step.step} className="flex items-center gap-4">
              <motion.div
                className="flex flex-col items-center text-center min-w-[150px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3 }}
              >
                <motion.div
                  className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mb-2"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut"
                  }}
                >
                  {step.icon}
                </motion.div>
                <h4 className="font-bold text-sm mb-1">{step.title}</h4>
                <div className="bg-gray-800 text-green-400 px-2 py-1 rounded text-xs font-mono mb-1">
                  {step.file}
                </div>
                <p className="text-xs text-gray-600">{step.description}</p>
              </motion.div>
              
              {index < compilationSteps.length - 1 && (
                <motion.div
                  className="hidden md:block text-2xl text-orange-500"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  →
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JDKExplainer;