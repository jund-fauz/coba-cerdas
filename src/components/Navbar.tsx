import { Code2, Menu, User, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-6 py-4 text-white bg-indigo-600 shadow-lg">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <div className="flex items-center space-x-2">
          <Code2 className="w-8 h-8" />
          <span className="text-2xl font-bold">CobaCerdas</span>
        </div>

        <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <motion.div initial={{ rotate: 0 }} animate={{ rotate: 180 }} transition={{duration: 0.3}}>
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div initial={{ rotate: 180 }} animate={{ rotate: 0 }} transition={{duration: 0.3}}>
              <Menu className="w-6 h-6" />
            </motion.div>
          )}
        </button>

        <div className="hidden sm:flex items-center space-x-6">
          <a href="#" className="hover:text-indigo-200">
            Materi
          </a>
          <a href="#" className="hover:text-indigo-200">
            Alur Belajar
          </a>
          <a href="#" className="hover:text-indigo-200">
            Komunitas
          </a>
          <button className="flex items-center px-4 py-2 space-x-2 bg-indigo-500 rounded-lg hover:bg-indigo-400">
            <User className="w-5 h-5" />
            <span>Sign In</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden flex flex-col items-center space-y-4 mt-4 pb-4 border-t border-indigo-400"
          >
            <a href="#" className="hover:text-indigo-200 mt-2">
              Materi
            </a>
            <a href="#" className="hover:text-indigo-200">
              Alur Belajar
            </a>
            <a href="#" className="hover:text-indigo-200">
              Komunitas
            </a>
            <button className="flex items-center px-4 py-2 space-x-2 bg-indigo-500 rounded-lg hover:bg-indigo-400">
              <User className="w-5 h-5" />
              <span>Sign In</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
