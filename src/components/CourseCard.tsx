import React from 'react';
import { Users, Clock } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  students: number;
  duration: string;
  level: string;
  image: string;
}

export default function CourseCard({ title, description, students, duration, level, image }: CourseCardProps) {
  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white shadow-md rounded-xl hover:shadow-lg">
      <img src={image} alt={title} className="object-cover w-full h-48" />
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span>{students.toLocaleString()} students</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <span className="px-3 py-1 text-indigo-600 bg-indigo-100 rounded-full">
            {level}
          </span>
        </div>
      </div>
    </div>
  );
}