import Link from 'next/link'
import { Button } from '../../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'

const topics = [
  { name: 'JavaScript', icon: '🟨', description: 'Master modern JavaScript concepts and syntax', color: 'bg-yellow-50' },
  { name: 'ReactJS', icon: '⚛️', description: 'Build powerful user interfaces with React', color: 'bg-blue-50' },
  { name: 'DSA', icon: '🧮', description: 'Ace data structures and algorithms', color: 'bg-green-50' },
  { name: 'HTML', icon: '🌐', description: 'Create the structure of web pages', color: 'bg-orange-50' },
  { name: 'CSS', icon: '🎨', description: 'Style and layout web pages', color: 'bg-purple-50' },
  { name: 'Node.js', icon: '🟢', description: 'Build scalable server-side applications', color: 'bg-green-100' },
  { name: 'Python', icon: '🐍', description: 'Learn versatile programming for various domains', color: 'bg-blue-100' },
  { name: 'SQL', icon: '📊', description: 'Master database querying and management', color: 'bg-red-50' },
  { name: 'Git', icon: '🔀', description: 'Version control and collaboration', color: 'bg-gray-100' },
]

export default function TopicsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Explore Topics</h1>
        <p className="text-xl mb-12 text-center text-gray-600 max-w-2xl mx-auto">
          Dive into our comprehensive collection of coding topics to enhance your skills and ace your interviews.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic) => (
            <Card key={topic.name} className={`hover:shadow-lg transition-shadow ${topic.color}`}>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <span className="mr-2">{topic.icon}</span>
                  {topic.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{topic.description}</p>
                <Button variant="outline" asChild className="w-full">
                  <Link href={`/topics/${topic.name.toLowerCase()}`}>Explore {topic.name}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}