import { Code2, User } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="px-6 py-4 text-white bg-indigo-600 shadow-lg">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <div className="flex items-center space-x-2">
          <Code2 className="w-8 h-8" />
          <span className="text-2xl font-bold">CobaCerdas</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="hover:text-indigo-200">Materi</a>
          <a href="#" className="hover:text-indigo-200">Alur Belajar</a>
          <a href="#" className="hover:text-indigo-200">Komunitas</a>
          <button className="flex items-center px-4 py-2 space-x-2 bg-indigo-500 rounded-lg hover:bg-indigo-400">
            <User className="w-5 h-5" />
            <span>Sign In</span>
          </button>
        </div>
      </div>
    </nav>
  )
}