import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Master Programming Skills with Interactive Lessons
          </h1>
          <p className="text-xl mb-8 text-indigo-100">
            Learn programming through hands-on practice and real-world projects. 
            Join millions of learners already learning to code.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-indigo-50 transition-colors">
            <span>Start Learning Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}