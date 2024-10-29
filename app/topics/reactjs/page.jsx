'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Input } from '../../../components/ui/input'
import { Button } from '../../../components/ui/button'
import { ArrowLeft } from 'lucide-react';

const questions = [
  { id: 1, title: 'Implement useDebounce Hook', description: 'Create a custom hook that debounces a value.', difficulty: 'Medium', category: 'Hooks' },
  { id: 2, title: 'Create a Compound Component', description: 'Build a flexible and reusable compound component pattern.', difficulty: 'Hard', category: 'Patterns' },
  { id: 3, title: 'Optimize Re-renders with useMemo', description: 'Use useMemo to prevent unnecessary re-renders in a list component.', difficulty: 'Medium', category: 'Performance' },
  { id: 4, title: 'Implement Form Validation', description: 'Create a form with custom validation using React hooks.', difficulty: 'Medium', category: 'Forms' },
  { id: 5, title: 'Build a Custom Modal', description: 'Create a reusable modal component with React portals.', difficulty: 'Medium', category: 'Components' },
  { id: 6, title: 'Implement Infinite Scroll', description: 'Create an infinite scroll component using Intersection Observer.', difficulty: 'Hard', category: 'Performance' },
  { id: 7, title: 'State Management with Context', description: 'Implement a global state management solution using React Context.', difficulty: 'Medium', category: 'State Management' },
  { id: 8, title: 'Create a Custom Router', description: 'Build a simple routing system from scratch.', difficulty: 'Hard', category: 'Routing' },
  { id: 9, title: 'Implement Drag and Drop', description: 'Create a drag and drop interface using React DnD.', difficulty: 'Hard', category: 'Interactions' },
  { id: 10, title: 'Optimize Images with Lazy Loading', description: 'Implement lazy loading for images to improve performance.', difficulty: 'Easy', category: 'Performance' },
]

const categories = ['All', 'Hooks', 'Patterns', 'Performance', 'Forms', 'Components', 'State Management', 'Routing', 'Interactions']

export default function ReactJSPage() {
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
          ReactJS
        </h1>

        <div className="mb-6 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 text-sm rounded-full whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Input
            type="search"
            placeholder="Search problems"
            className="w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="w-full sm:w-auto border rounded p-2"
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
          <h2 className="text-xl font-semibold mb-4">ReactJS Challenges</h2>
          {filteredQuestions.map(question => (
            <div key={question.id} className="mb-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <Link href={`/reactjs/problem/${question.id}`}>
              <h3 className="text-lg font-semibold">{question.title}</h3>
              <p className="text-gray-600 mb-2">{question.description}</p>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  question.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                  question.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {question.difficulty}
                </span>
              </div>
              </Link>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}