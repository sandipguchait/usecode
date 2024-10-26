import Link from 'next/link'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import Logo from '../components/ui/Logo';


const categories = [
  { name: 'ReactJS', icon: '⚛️', description: 'Master React concepts and hooks', color: 'bg-blue-50' },
  { name: 'JavaScript', icon: '🟨', description: 'Strengthen your JS fundamentals', color: 'bg-yellow-50' },
  { name: 'DSA', icon: '🧮', description: 'Ace data structures and algorithms', color: 'bg-green-50' },
]

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-50 mt-6">
      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            Master Your Frontend Interview
          </h1>
          <p className="text-lg mb-8 text-gray-700 max-w-3xl mx-auto">
            Elevate your skills in ReactJS, JavaScript, and Data Structures & Algorithms
          </p>
        </section>

        <section className="text-center mb-16">
          <Button size="lg" variant="outline" asChild className="border border-indigo-600 text-indigo-600 hover:bg-indigo-100">
            <Link href="/topics">Explore Topics</Link>
          </Button>
        </section>

        <section id="categories" className="mb-16">
          <h2 className="text-4xl font-semibold mb-8 text-gray-900 text-center">Featured Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Card
                key={category.name}
                className={`hover:shadow-md transition-shadow ${category.color} rounded-lg`}>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center font-bold">
                    <span className="mr-2 text-3xl">{category.icon}</span>
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Button variant="outline" asChild className="border border-indigo-600 text-indigo-600 hover:bg-indigo-100 w-full">
                    <Link href={`/topics/${category.name.toLowerCase()}`}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-semibold mb-8 text-gray-900 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4 text-indigo-600">1</div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Path</h3>
              <p className="text-gray-600">Select from our curated list of interview topics</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4 text-indigo-600">2</div>
              <h3 className="text-xl font-semibold mb-2">Practice & Learn</h3>
              <p className="text-gray-600">Solve real interview questions and challenges</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4 text-indigo-600">3</div>
              <h3 className="text-xl font-semibold mb-2">Master Your Skills</h3>
              <p className="text-gray-600">Review detailed explanations and improve your techniques</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 flex items-center">
              <Logo />
              <h3 className="text-xl font-semibold ml-2 text-gray-900">useCode</h3>
            </div>
            <nav className="flex flex-wrap justify-center md:justify-end gap-6">
              <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
              <Link href="/privacy" className="text-gray-600 hover:text-gray-900">Privacy</Link>
              <Link href="/terms" className="text-gray-600 hover:text-gray-900">Terms</Link>
            </nav>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} useCode. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Homepage
