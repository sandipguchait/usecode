'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { ArrowLeft } from 'lucide-react';

export default function Component() {
  const [activeSection, setActiveSection] = useState('regular')
  const [step, setStep] = useState(1)

  const sections = {
    regular: {
      title: 'Regular Functions',
      steps: [
        {
          code: 'function greet(name) {\n  console.log("Hello, " + name + "!");\n}',
          explanation: 'Regular functions are declared using the "function" keyword followed by the function name and parameters. They can be named or anonymous.'
        },
        {
          code: 'greet("Alice");\n// Output: Hello, Alice!\n\n// Function expression\nconst sayHi = function(name) {\n  console.log("Hi, " + name + "!");\n};\nsayHi("Bob");',
          explanation: 'Regular functions can be called immediately after declaration. They can also be assigned to variables as function expressions.'
        },
        {
          code: 'function outer() {\n  console.log("Outer this:", this);\n  function inner() {\n    console.log("Inner this:", this);\n  }\n  inner();\n}\nouter();',
          explanation: 'In regular functions, "this" is determined by how the function is called. It can vary depending on the context, which can sometimes lead to unexpected behavior.'
        },
        {
          code: 'const obj = {\n  name: "Bob",\n  greet: function() {\n    console.log("Hello, " + this.name);\n  }\n};\nobj.greet();\n\n// vs\n\nconst standalone = obj.greet;\nstandalone(); // "this" will be undefined or global object',
          explanation: 'When used as object methods, "this" refers to the object itself. However, if the method is assigned to a variable and called separately, "this" will change.'
        },
        {
          code: 'function Person(name) {\n  this.name = name;\n}\n\nconst john = new Person("John");\nconsole.log(john.name); // Output: John',
          explanation: 'Regular functions can be used as constructors with the "new" keyword to create objects. This is not possible with arrow functions.'
        },
        {
          code: 'function sum() {\n  let total = 0;\n  for (let i = 0; i < arguments.length; i++) {\n    total += arguments[i];\n  }\n  return total;\n}\n\nconsole.log(sum(1, 2, 3, 4)); // Output: 10',
          explanation: 'Regular functions have access to the "arguments" object, which contains all arguments passed to the function, even if they are not explicitly defined in the parameter list.'
        }
      ]
    },
    arrow: {
      title: 'Arrow Functions',
      steps: [
        {
          code: 'const greet = (name) => {\n  console.log(`Hello, ${name}!`);\n};\n\n// Shorthand for single parameter\nconst greetShort = name => {\n  console.log(`Hello, ${name}!`);\n};',
          explanation: 'Arrow functions use a more concise syntax with "=>" instead of the "function" keyword. They can omit parentheses for a single parameter.'
        },
        {
          code: 'greet("Alice");\n// Output: Hello, Alice!\n\n// Implicit return for one-liners\nconst add = (a, b) => a + b;\nconsole.log(add(2, 3)); // Output: 5',
          explanation: 'Arrow functions can be called immediately after declaration. They also allow for implicit returns in one-line functions, making them concise for simple operations.'
        },
        {
          code: 'const obj = {\n  name: "Alice",\n  greet: function() {\n    setTimeout(() => {\n      console.log(`Hello, ${this.name}`);\n    }, 100);\n  }\n};\nobj.greet();',
          explanation: 'In arrow functions, "this" is lexically bound, meaning it inherits "this" from the enclosing scope. This makes them ideal for use in callbacks and methods that need to access "this" from the surrounding context.'
        },
        {
          code: 'const obj = {\n  name: "Bob",\n  greet: () => {\n    console.log(`Hello, ${this.name}`);\n  }\n};\nobj.greet(); // "this.name" will be undefined',
          explanation: 'When used as object methods, "this" in arrow functions does not refer to the object, which can lead to unexpected behavior. This is because arrow functions do not have their own "this" context.'
        },
        {
          code: 'const numbers = [1, 2, 3, 4, 5];\nconst squared = numbers.map(num => num * num);\nconsole.log(squared); // Output: [1, 4, 9, 16, 25]',
          explanation: 'Arrow functions are particularly useful for short callback functions, such as those used in array methods like map, filter, and reduce. Their concise syntax makes the code more readable.'
        },
        {
          code: 'const person = {\n  name: "Charlie",\n  friends: ["Alice", "Bob"],\n  printFriends() {\n    this.friends.forEach(f =>\n      console.log(this.name + " knows " + f)\n    );\n  }\n};\nperson.printFriends();',
          explanation: 'Arrow functions are great for preserving the lexical scope of "this". In this example, "this" inside the arrow function refers to the "person" object, which wouldn\'t be the case with a regular function.'
        }
      ]
    },
    comparison: {
      title: 'Comparison',
      steps: [
        {
          code: '',
          explanation: 'Syntax: Regular functions use the "function" keyword and can be named or anonymous. Arrow functions use "=>" syntax and are always anonymous.'
        },
        {
          code: '',
          explanation: '"this" binding: Regular functions have dynamic "this" binding based on how they are called. Arrow functions have lexical "this" binding, inheriting from the enclosing scope.'
        },
        {
          code: '',
          explanation: 'Use cases: Regular functions are versatile and can be used in any situation. Arrow functions are great for short, non-method functions and when you need to preserve the lexical scope of "this".'
        },
        {
          code: '',
          explanation: 'Constructor: Regular functions can be used as constructors with "new", but arrow functions cannot be used as constructors.'
        },
        {
          code: '',
          explanation: 'Arguments object: Regular functions have access to the "arguments" object. Arrow functions do not have their own "arguments" object, but can access it from an outer function.'
        },
        {
          code: '',
          explanation: 'Implicit return: Arrow functions allow for implicit return in one-line functions, making them more concise for simple operations.'
        },
        {
          code: '',
          explanation: 'Method definitions: Regular functions are preferred for object methods when you need to access the object\'s properties using "this". Arrow functions are not suitable for this purpose due to their lexical "this" binding.'
        }
      ]
    }
  }

  const currentSection = sections[activeSection];

  const nextStep = () => {
    if (step < currentSection.steps.length) {
      setStep(step + 1)
    } else if (activeSection === 'regular') {
      setActiveSection('arrow')
      setStep(1)
    } else if (activeSection === 'arrow') {
      setActiveSection('comparison')
      setStep(1)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    } else if (activeSection === 'arrow') {
      setActiveSection('regular')
      setStep(sections.regular.steps.length)
    } else if (activeSection === 'comparison') {
      setActiveSection('arrow')
      setStep(sections.arrow.steps.length)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 flex items-center">
            <ArrowLeft className="mr-2 cursor-pointer" onClick={() => window.history.back()} /> 
            JavaScript Functions: Regular vs Arrow
        </h1>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex justify-between p-4 bg-gray-200">
            <button
              onClick={() => {
                setActiveSection('regular')
                setStep(1)
              }}
              className={`px-4 py-2 rounded ${
                activeSection === 'regular' ? 'bg-blue-500 text-white' : 'bg-gray-300'
              }`}
            >
              Regular Functions
            </button>
            <button
              onClick={() => {
                setActiveSection('arrow')
                setStep(1)
              }}
              className={`px-4 py-2 rounded ${
                activeSection === 'arrow' ? 'bg-blue-500 text-white' : 'bg-gray-300'
              }`}
            >
              Arrow Functions
            </button>
            <button
              onClick={() => {
                setActiveSection('comparison')
                setStep(1)
              }}
              className={`px-4 py-2 rounded ${
                activeSection === 'comparison' ? 'bg-blue-500 text-white' : 'bg-gray-300'
              }`}
            >
              Comparison
            </button>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">{currentSection.title}</h2>
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeSection}-${step}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    {step}
                  </div>
                  <h3 className="text-xl font-semibold">{step} of {currentSection.steps.length}</h3>
                </div>
                {activeSection !== 'comparison' && (
                  <pre className="bg-gray-800 text-white p-4 rounded mb-4 overflow-x-auto">
                    <code>{currentSection.steps[step - 1].code}</code>
                  </pre>
                )}
                <p className="text-gray-700 mb-4">{currentSection.steps[step - 1].explanation}</p>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-between mt-6">
              <button
                onClick={prevStep}
                className="flex items-center px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors"
                disabled={activeSection === 'regular' && step === 1}
              >
                <ChevronLeft className="mr-2" />
                Previous
              </button>
              <button
                onClick={nextStep}
                className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                disabled={activeSection === 'comparison' && step === currentSection.steps.length}
              >
                Next
                <ChevronRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}