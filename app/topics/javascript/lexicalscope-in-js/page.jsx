'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../../../../components/ui/button';
import { ArrowLeft } from 'lucide-react';

const codeExample = `
function outerFunction() {
  let outerVar = 'I am from outer'

  function innerFunction() {
    let innerVar = 'I am from inner'
    console.log(outerVar) // Accessible
    console.log(innerVar) // Accessible
  }

  innerFunction()
  console.log(outerVar) // Accessible
  console.log(innerVar) // Not accessible
}

outerFunction()
`

const steps = [
  {
    title: 'Global Execution Context',
    description: 'The global execution context is created. It has its own lexical environment which includes global variables and functions.',
  },
  {
    title: 'outerFunction Declaration',
    description: 'outerFunction is declared and added to the global lexical environment.',
  },
  {
    title: 'outerFunction Execution',
    description: 'outerFunction is called, creating a new execution context with its own lexical environment.',
  },
  {
    title: 'outerVar Declaration',
    description: 'outerVar is declared within outerFunction\'s lexical environment.',
  },
  {
    title: 'innerFunction Declaration',
    description: 'innerFunction is declared within outerFunction\'s lexical environment.',
  },
  {
    title: 'innerFunction Execution',
    description: 'innerFunction is called, creating a new execution context with its own lexical environment.',
  },
  {
    title: 'innerVar Declaration',
    description: 'innerVar is declared within innerFunction\'s lexical environment.',
  },
  {
    title: 'Accessing Variables',
    description: 'innerFunction can access both innerVar and outerVar due to lexical scope.',
  },
  {
    title: 'innerFunction Completion',
    description: 'innerFunction completes execution and its lexical environment is removed.',
  },
  {
    title: 'Accessing Variables in outerFunction',
    description: 'outerFunction can access outerVar but not innerVar.',
  },
  {
    title: 'outerFunction Completion',
    description: 'outerFunction completes execution and its lexical environment is removed.',
  },
]

export default function LexicalScopeExplainer() {
  const [currentStep, setCurrentStep] = useState(0)

  const goToNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
  }

  const goToPrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 flex items-center">
            <ArrowLeft className="mr-2 cursor-pointer" onClick={() => window.history.back()} /> 
            Understanding Lexical Scope in JavaScript
        </h1>
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="flex flex-col">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Code Example</h2>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{codeExample}</code>
              </pre>
            </div>
            <div className="p-6 bg-gray-50">
              <h2 className="text-2xl font-semibold mb-4">Lexical Environment Visualization</h2>
              <div className="h-96 bg-white border-2 border-gray-300 rounded-lg p-4 relative">
                <LexicalEnvironmentVisualizer step={currentStep} />
              </div>
            </div>
          </div>
          <div className="p-6 bg-gray-100">
            <h2 className="text-2xl font-semibold mb-4">Step-by-Step Explanation</h2>
            <div className="bg-white border-2 border-gray-300 rounded-lg p-4 min-h-[100px]">
              <h3 className="text-xl font-medium mb-2">{steps[currentStep].title}</h3>
              <p>{steps[currentStep].description}</p>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <Button onClick={goToPrevStep} disabled={currentStep === 0}>
                <ChevronLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              <span className="text-sm text-gray-500">
                Step {currentStep + 1} of {steps.length}
              </span>
              <Button onClick={goToNextStep} disabled={currentStep === steps.length - 1}>
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function LexicalEnvironmentVisualizer({ step }) {
  const environments = [
    { id: 'global', label: 'Global Environment', top: 0, left: 0, width: '100%', height: '100%' },
    { id: 'outer', label: 'outerFunction Environment', top: '20%', left: '20%', width: '60%', height: '60%' },
    { id: 'inner', label: 'innerFunction Environment', top: '40%', left: '40%', width: '20%', height: '20%' },
  ]

  const variables = [
    { id: 'outerFunction', label: 'outerFunction()', environment: 'global', step: 1 },
    { id: 'outerVar', label: 'outerVar', environment: 'outer', step: 3 },
    { id: 'innerFunction', label: 'innerFunction()', environment: 'outer', step: 4 },
    { id: 'innerVar', label: 'innerVar', environment: 'inner', step: 6 },
  ]

  return (
    <>
      {environments.map((env) => (
        <motion.div
          key={env.id}
          className="absolute border-2 border-blue-500 rounded-lg p-2 bg-blue-50"
          style={{
            top: env.top,
            left: env.left,
            width: env.width,
            height: env.height,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-medium text-blue-700">{env.label}</span>
          {variables
            .filter((v) => v.environment === env.id && v.step <= step)
            .map((variable) => (
              <motion.div
                key={variable.id}
                className="mt-1 px-2 py-1 bg-white rounded text-xs"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {variable.label}
              </motion.div>
            ))}
        </motion.div>
      ))}
    </>
  )
}