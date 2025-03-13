import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CourseCard from './components/CourseCard'
import { courses } from './data/courses'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      
      <main className="px-6 py-16 mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Popular Courses</h2>
          <p className="text-gray-600">Start your journey with our most popular programming courses</p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              students={course.students}
              duration={course.duration}
              level={course.level}
              image={course.image}
            />
          ))}
        </div>
      </main>
      
      <footer className="py-12 text-gray-400 bg-gray-900">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 font-semibold text-white">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-white">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-white">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-white">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 mt-12 text-center border-t border-gray-800">
            <p>&copy 2024 CodeMaster. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App