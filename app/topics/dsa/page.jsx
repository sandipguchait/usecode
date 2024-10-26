'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Input } from '../../../components/ui/input'
import { Button } from '../../../components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '../../../components/ui/tabs';
import { ArrowLeft} from 'lucide-react'

// Mock data for questions
const questions = [
  { id: 'q1-find-all-anagrams', title: 'Find All Anagrams in a String', description: 'Given a string s and a non-empty string p, find all the start indices of p\'s anagrams in s.', difficulty: 'Easy', category: 'Strings' },
  { id: 'q2-longest-palindromic-substring', title: 'Longest Palindromic Substring', description: 'Given a string s, return the longest palindromic substring in s.', difficulty: 'Medium', category: 'Strings' },
  { id: 'q3-add-two-numbers', title: 'Add Two Numbers', description: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.', difficulty: 'Medium', category: 'Linked Lists' },
  { id: 'q4-two-sum', title: 'Two Sum', description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.', difficulty: 'Easy', category: 'Arrays' },
  { id: 'q5-implement-strstr', title: 'Implement strStr()', description: 'Implement strStr(). Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.', difficulty: 'Easy', category: 'Strings' },
  { id: 'q6-longest-substring-without-repeating-characters', title: 'Longest Substring Without Repeating Characters', description: 'Given a string s, find the length of the longest substring without repeating characters.', difficulty: 'Medium', category: 'Strings' },
  { id: 'q7-valid-palindrome', title: 'Valid Palindrome', description: 'Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.', difficulty: 'Easy', category: 'Strings' },
  { id: 'q8-longest-common-prefix', title: 'Longest Common Prefix', description: 'Write a function to find the longest common prefix string amongst an array of strings.', difficulty: 'Easy', category: 'Strings' },
  { id: 'q9-single-number', title: 'Single Number', description: 'Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.', difficulty: 'Easy', category: 'Arrays' },
  { id: 'q10-single-number-ii', title: 'Single Number II', description: 'Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.', difficulty: 'Medium', category: 'Arrays' },
]

const categories = ['All', 'Arrays', 'Strings', 'Linked Lists', 'Trees']

const TopicPageComponent = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedDifficulty, setSelectedDifficulty] = useState('All')

  const filteredQuestions = questions.filter(question => 
    (selectedCategory === 'All' || question.category === selectedCategory) &&
    (selectedDifficulty === 'All' || question.difficulty === selectedDifficulty) &&
    (question.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     question.description.toLowerCase().includes(searchTerm.toLowerCase())))

  return (
    (<div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 flex items-center">
        <ArrowLeft className="mr-2 cursor-pointer" onClick={() => window.history.back()} /> 
            Data Structures & Algorithms
        </h1>

        <Tabs defaultValue="All" className="mb-6">
          <TabsList>
            {categories.map(category => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => setSelectedCategory(category)}>
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
            onChange={(e) => setSearchTerm(e.target.value)} />
          <select
            className="border rounded p-2"
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}>
            <option value="All">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <section>
          <h2 className="text-xl font-semibold mb-4">New questions</h2>
          {filteredQuestions.map(question => (
            <div key={question.id} className="mb-4 p-4 border rounded">
              <h3 className="text-lg font-semibold">{question.title}</h3>
              <p className="text-gray-600 mb-2">{question.description}</p>
              <div className="flex justify-between items-center">
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    question.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                    question.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                  {question.difficulty}
                </span>
                <Button variant="outline" asChild>
                  <Link href={`/problem/${question.id}`}>Solve Problem</Link>
                </Button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>)
  );
}

export default TopicPageComponent
