import React from 'react';
import { Code2, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white py-4 px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Code2 className="w-8 h-8" />
          <span className="text-2xl font-bold">CodeMaster</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="hover:text-indigo-200">Courses</a>
          <a href="#" className="hover:text-indigo-200">Learning Path</a>
          <a href="#" className="hover:text-indigo-200">Community</a>
          <button className="flex items-center space-x-2 bg-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-400">
            <User className="w-5 h-5" />
            <span>Sign In</span>
          </button>
        </div>
      </div>
    </nav>
  );
}