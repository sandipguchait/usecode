'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Input } from '../../../components/ui/input'
import { Button } from '../../../components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../../components/ui/tabs';
import { ArrowLeft } from 'lucide-react';

// Mock data for JavaScript questions
const questions = [
  { id: 1, title: 'Implement Promise.all()', description: 'Create a function that mimics the behavior of Promise.all().', difficulty: 'Medium', category: 'Async' },
  { id: 2, title: 'Debounce Function', description: 'Implement a debounce function that delays invoking a function until after a certain amount of time has elapsed.', difficulty: 'Medium', category: 'Functions' },
  { id: 3, title: 'Flatten Array', description: 'Write a function that flattens a nested array of arbitrary depth.', difficulty: 'Medium', category: 'Arrays' },
  { id: 4, title: 'Implement bind()', description: 'Create your own implementation of the Function.prototype.bind() method.', difficulty: 'Hard', category: 'Functions' },
  { id: 5, title: 'Event Emitter', description: 'Implement a simple event emitter class with on, emit, and off methods.', difficulty: 'Medium', category: 'Design Patterns' },
  { id: 6, title: 'Deep Clone', description: 'Write a function to create a deep clone of an object, handling nested objects and arrays.', difficulty: 'Hard', category: 'Objects' },
  { id: 7, title: 'Implement Promise.race()', description: 'Create a function that mimics the behavior of Promise.race().', difficulty: 'Medium', category: 'Async' },
  { id: 8, title: 'Throttle Function', description: 'Implement a throttle function that limits the rate at which a function can fire.', difficulty: 'Medium', category: 'Functions' },
  { id: 9, title: 'Implement Array.prototype.reduce()', description: 'Create your own implementation of the Array.prototype.reduce() method.', difficulty: 'Medium', category: 'Arrays' },
  { id: 10, title: 'Currying', description: 'Implement a curry function that converts a function of N arguments to N functions of 1 argument each.', difficulty: 'Hard', category: 'Functions' },
]

const categories = ['All', 'Functions', 'Arrays', 'Objects', 'Async', 'Design Patterns']

const JavaScriptPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedDifficulty, setSelectedDifficulty] = useState('All')

  const filteredQuestions = questions.filter(question => 
    (selectedCategory === 'All' || question.category === selectedCategory) &&
    (selectedDifficulty === 'All' || question.difficulty === selectedDifficulty) &&
    (question.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     question.description.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 flex items-center">
            <ArrowLeft className="mr-2 cursor-pointer" onClick={() => window.history.back()} /> 
          JavaScript
        </h1>

        <Tabs defaultValue="All" className="mb-6">
          <TabsList>
            {categories.map(category => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="mb-6 flex items-center space-x-4">
          <Input
            type="search"
            placeholder="Search problems"
            className="w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="border rounded p-2"
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
          >
            <option value="All">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <section>
          <h2 className="text-xl font-semibold mb-4">JavaScript Challenges</h2>
          {filteredQuestions.map(question => (
            <div key={question.id} className="mb-4 p-4 border rounded">
              <h3 className="text-lg font-semibold">{question.title}</h3>
              <p className="text-gray-600 mb-2">{question.description}</p>
              <div className="flex justify-between items-center">
                <span className={`px-2 py-1 rounded text-sm ${
                  question.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                  question.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {question.difficulty}
                </span>
                <Button variant="outline" asChild>
                  <Link href={`/javascript/problem/${question.id}`}>Solve Challenge</Link>
                </Button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

export default JavaScriptPage;
