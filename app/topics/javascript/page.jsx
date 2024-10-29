'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Input } from '../../../components/ui/input'
import { Button } from '../../../components/ui/button'
import { ArrowLeft } from 'lucide-react';
import { categories, questions} from '../../../lib/constants/javascript.constant';


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
              <Link href={`/topics/javascript/${question.id}`}>
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
                {/* <Button variant="outline" asChild>
                  <Link href={`/topics/javascript/${question.id}`}></Link>
                </Button> */}
              </div>
              </Link>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

export default JavaScriptPage;
