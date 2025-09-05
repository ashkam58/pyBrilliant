"use client";
import React, { useState } from "react";

const PointersCheatSheet: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState("immutable");

  const sections = {
    immutable: {
      title: "Immutable Types",
      subtitle: "Numbers, Strings, Tuples",
      content: {
        behavior: "Cannot be changed in place. Assignment creates new objects.",
        examples: [
          {
            code: `x = 10
y = x      # y points to same 10
x = 20     # x now points to new object`,
            explanation: "x and y point to different objects after reassignment"
          },
          {
            code: `name = "Alice"
alias = name
name = "Bob"  # alias still "Alice"`,
            explanation: "Strings are immutable - alias unchanged"
          }
        ],
        keyPoints: [
          "id() changes when value is reassigned",
          "Multiple variables can safely share immutable objects",
          "No side effects from 'modification'"
        ]
      }
    },
    mutable: {
      title: "Mutable Types", 
      subtitle: "Lists, Dictionaries, Sets",
      content: {
        behavior: "Can be modified in place. All references see the changes.",
        examples: [
          {
            code: `list1 = [1, 2, 3]
list2 = list1
list1.append(4)  # Both see [1, 2, 3, 4]`,
            explanation: "Both variables point to the same list object"
          },
          {
            code: `dict1 = {"key": "value"}
dict2 = dict1
dict1["key"] = "new"  # Both see the change`,
            explanation: "Dictionaries are mutable - both references affected"
          }
        ],
        keyPoints: [
          "id() stays same when contents are modified",
          "Shared references can cause unexpected side effects",
          "Use .copy() for shallow copies"
        ]
      }
    },
    copying: {
      title: "Copying Strategies",
      subtitle: "Shallow vs Deep Copies",
      content: {
        behavior: "Different ways to create independent copies of data structures.",
        examples: [
          {
            code: `# Shallow copy
original = [[1, 2], [3, 4]]
shallow = original.copy()
shallow[0].append(5)  # Affects original!`,
            explanation: "Shallow copy shares nested objects"
          },
          {
            code: `# Deep copy
import copy
original = [[1, 2], [3, 4]]
deep = copy.deepcopy(original)
deep[0].append(5)  # Original unchanged`,
            explanation: "Deep copy creates completely independent structure"
          }
        ],
        keyPoints: [
          "Assignment: shares the same object",
          "Shallow copy: new container, shared contents",
          "Deep copy: completely independent objects"
        ]
      }
    },
    common_pitfalls: {
      title: "Common Pitfalls",
      subtitle: "Mistakes to Avoid",
      content: {
        behavior: "Typical errors when working with mutable objects.",
        examples: [
          {
            code: `# ❌ Dangerous default argument
def append_to(element, target=[]):
    target.append(element)
    return target`,
            explanation: "Default list is shared across all function calls!"
          },
          {
            code: `# ✅ Safe default argument
def append_to(element, target=None):
    if target is None:
        target = []
    target.append(element)
    return target`,
            explanation: "Create new list for each function call"
          }
        ],
        keyPoints: [
          "Never use mutable objects as default arguments",
          "Be careful with nested mutable structures",
          "Use 'is' vs '==' appropriately"
        ]
      }
    }
  };

  const currentSection = sections[selectedSection as keyof typeof sections];

  return (
    <div className="rounded-3xl border p-5 bg-white/80 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-bold text-lg">🎯 Pointers & Mutability Cheat Sheet</h4>
        <div className="text-sm text-slate-500">Quick Reference Guide</div>
      </div>

      {/* Section Navigation */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-6">
        {Object.entries(sections).map(([key, section]) => (
          <button
            key={key}
            onClick={() => setSelectedSection(key)}
            className={`p-3 rounded-lg border text-left text-sm ${
              selectedSection === key
                ? "bg-indigo-100 border-indigo-400 text-indigo-700"
                : "bg-white border-slate-200 hover:bg-slate-50"
            }`}
          >
            <div className="font-medium">{section.title}</div>
            <div className="text-xs text-slate-500 mt-1">{section.subtitle}</div>
          </button>
        ))}
      </div>

      {/* Section Content */}
      <div className="space-y-6">
        {/* Overview */}
        <div className="bg-slate-100 rounded-lg p-4">
          <h5 className="font-semibold text-slate-800 mb-2">{currentSection.title}</h5>
          <p className="text-sm text-slate-600">{currentSection.content.behavior}</p>
        </div>

        {/* Code Examples */}
        <div>
          <h6 className="font-medium text-slate-700 mb-3">Code Examples:</h6>
          <div className="space-y-4">
            {currentSection.content.examples.map((example, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="bg-slate-900 rounded-lg p-3 mb-3">
                  <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">
                    {example.code}
                  </pre>
                </div>
                <div className="text-sm text-slate-600 italic">
                  💡 {example.explanation}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Points */}
        <div>
          <h6 className="font-medium text-slate-700 mb-3">Key Points to Remember:</h6>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <ul className="space-y-2">
              {currentSection.content.keyPoints.map((point, index) => (
                <li key={index} className="text-sm text-blue-800 flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Quick Reference Table */}
      <div className="mt-6">
        <h6 className="font-medium text-slate-700 mb-3">Quick Reference:</h6>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-slate-200 rounded-lg">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-3 py-2 text-left">Type</th>
                <th className="px-3 py-2 text-left">Mutability</th>
                <th className="px-3 py-2 text-left">Assignment Effect</th>
                <th className="px-3 py-2 text-left">Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-3 py-2 font-medium">Immutable</td>
                <td className="px-3 py-2">Cannot change</td>
                <td className="px-3 py-2">Creates new object</td>
                <td className="px-3 py-2 font-mono">int, str, tuple</td>
              </tr>
              <tr className="border-t">
                <td className="px-3 py-2 font-medium">Mutable</td>
                <td className="px-3 py-2">Can change in-place</td>
                <td className="px-3 py-2">Shares same object</td>
                <td className="px-3 py-2 font-mono">list, dict, set</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Memory Model Visualization */}
      <div className="mt-6 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg p-4">
        <h6 className="font-medium text-slate-700 mb-3">Memory Model:</h6>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <div className="font-medium text-green-700 mb-2">✅ Immutable (Safe)</div>
            <div className="bg-white rounded border p-3">
              <div className="font-mono text-xs">
                x = 10<br/>
                y = x  # Both point to same 10<br/>
                x = 20 # x points to new object
              </div>
              <div className="text-slate-600 mt-2">No shared state issues</div>
            </div>
          </div>
          <div>
            <div className="font-medium text-amber-700 mb-2">⚠️ Mutable (Careful)</div>
            <div className="bg-white rounded border p-3">
              <div className="font-mono text-xs">
                a = [1, 2]<br/>
                b = a      # Both point to same list<br/>
                a.append(3) # Both see [1, 2, 3]
              </div>
              <div className="text-slate-600 mt-2">Shared state can surprise you</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointersCheatSheet;
