'use client'

import { useState, useEffect, useCallback } from 'react'
import { Button } from "../../../../components/ui/button"
import { Card } from "../../../../components/ui/card"
import { ArrowLeft } from 'lucide-react';

export default function ClosureShowcase() {
  const [step, setStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const closureDefinition = "Closure is a combination of functions bundled together in a lexical scope. The inner function has access to an outer function scope, variables and parameters even after the outer function has returned."

  const lexicalScopeDefinition = "lexical scope refers to the idea that the scope of variables is determined by their physical location within the written code. It essentially means that the JavaScript engine determines the accessibility of variables based on where they are written within nested functions.";

  const steps = [
    {
      code: `function outerFunction(x) {
  
  let y = 20;
  
  function innerFunction() {
    
    return x + y;
  }
  
  
  return innerFunction;
}


const closure = outerFunction(10);


console.log(closure() + 10); // Outputs: 40`,
      explanations: [
        { text: "Define outerFunction that takes a parameter 'x'.", lineNumbers: [0] },
        { text: "Inside outerFunction, declare a local variable 'y'.", lineNumbers: [1, 2] },
        { text: "Define innerFunction inside outerFunction.", lineNumbers: [4, 5, 6, 7] },
        { text: "Return innerFunction from outerFunction.", lineNumbers: [9, 10] },
        { text: "Call outerFunction with argument 10 and assign the result to 'closure'.", lineNumbers: [13, 14] },
        { text: "Call the closure function, which still has access to 'x' and 'y'.", lineNumbers: [16, 17] }
      ]
    }
  ]

  const advantages = [
    "Data Privacy: Closures provide a way to create private variables and functions.",
    "State Preservation: They can preserve the state of a function between calls.",
    "Flexibility: Closures allow for the creation of function factories.",
    "Callback & Event Handlers: Useful in callback functions and event handling.",
  ]

  const disadvantages = [
    "Memory Consumption: Closures can lead to higher memory usage if not managed properly.",
    "Garbage Collection: Variables in closures may not be garbage collected if the closure is still in scope.",
    "Complexity: Can make code harder to understand if overused.",
    "Performance: In some cases, accessing variables through closures can be slower than accessing global variables.",
  ]

  const examples = [
    {
      title: "Counter with Closure",
      code: `function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  }
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3`,
      explanation: "This example demonstrates how a closure can be used to create a private variable (count) that persists between function calls.",
    },
    {
      title: "Memoization with Closure",
      code: `function memoizedFactorial() {
  const cache = {};
  return function factorial(n) {
    if (n in cache) {
      return cache[n];
    }
    if (n <= 1) {
      return 1;
    }
    const result = n * factorial(n - 1);
    cache[n] = result;
    return result;
  }
}

const factorial = memoizedFactorial();
console.log(factorial(5)); // 120 (calculated)
console.log(factorial(5)); // 120 (retrieved from cache)`,
      explanation: "This example shows how closures can be used for memoization, caching expensive function results for better performance.",
    },
    {
      title: "Module Pattern with Closure",
      code: `const bankAccount = (function() {
  let balance = 0;
  return {
    deposit: function(amount) {
      balance += amount;
      return balance;
    },
    withdraw: function(amount) {
      if (amount > balance) {
        return 'Insufficient funds';
      }
      balance -= amount;
      return balance;
    },
    getBalance: function() {
      return balance;
    }
  };
})();

console.log(bankAccount.deposit(100)); // 100
console.log(bankAccount.withdraw(50)); // 50
console.log(bankAccount.getBalance()); // 50`,
      explanation: "This example demonstrates the module pattern, using closures to create private variables and public methods, simulating a simple bank account.",
    },
  ]

  const handlePrevious = useCallback(() => {
    setStep((prevStep) => Math.max(0, prevStep - 1))
    setIsPlaying(false)
  }, [])

  const handleNext = useCallback(() => {
    setStep((prevStep) => Math.min(steps[0].explanations.length - 1, prevStep + 1))
    setIsPlaying(false)
  }, [steps])

  const togglePlay = useCallback(() => {
    setIsPlaying((prev) => !prev)
  }, [])

  useEffect(() => {
    let timer
    if (isPlaying) {
      timer = setInterval(() => {
        setStep((prevStep) => {
          if (prevStep < steps[0].explanations.length - 1) {
            return prevStep + 1
          } else {
            setIsPlaying(false)
            return prevStep
          }
        })
      }, 3000)
    }
    return () => clearInterval(timer)
  }, [isPlaying, steps])

  return (
    <div className="container mx-auto p-4 pt-8">
      <h1 className="text-3xl font-bold mb-4 flex items-center">
        <ArrowLeft className="mr-2 cursor-pointer" onClick={() => window.history.back()} /> 
            Understanding Closures in JavaScript
        </h1>
      <Card className="p-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">What is a Closure?</h2>
        <p>{closureDefinition}</p>
      </Card>
      <Card className="p-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">What is a Lexical scope?</h2>
        <p>{lexicalScopeDefinition}</p>
      </Card>
      <Card className="p-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">Code Demonstration</h2>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          {steps[0].code.split('\n').map((line, index) => (
            <div 
              key={index} 
              className={`${steps[0].explanations[step].lineNumbers.includes(index) ? 'bg-yellow-200' : ''}`}
            >
              {line}
            </div>
          ))}
        </pre>
      </Card>
      <Card className="p-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">Step Explanation</h2>
        <ol className="list-decimal pl-5">
          {steps[0].explanations.map((explanation, index) => (
            <li key={index} className={`${index === step ? 'font-bold text-primary' : ''}`}>
              {explanation.text}
            </li>
          ))}
        </ol>
      </Card>
      <div className="flex justify-center space-x-2 my-4">
        <Button onClick={handlePrevious} disabled={step === 0}>Previous</Button>
        <Button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</Button>
        <Button onClick={handleNext} disabled={step === steps[0].explanations.length - 1}>Next</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <Card className="p-4">
          <h2 className="text-xl font-semibold mb-2">Advantages of Closures</h2>
          <ul className="list-disc pl-5">
            {advantages.map((advantage, index) => (
              <li key={index}>{advantage}</li>
            ))}
          </ul>
        </Card>
        <Card className="p-4">
          <h2 className="text-xl font-semibold mb-2">Disadvantages of Closures</h2>
          <ul className="list-disc pl-5">
            {disadvantages.map((disadvantage, index) => (
              <li key={index}>{disadvantage}</li>
            ))}
          </ul>
        </Card>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Practical Examples of Closures</h2>
        {examples.map((example, index) => (
          <Card key={index} className="p-4 mb-4">
            <h3 className="text-xl font-semibold mb-2">{example.title}</h3>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-2">
              {example.code}
            </pre>
            <p>{example.explanation}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}