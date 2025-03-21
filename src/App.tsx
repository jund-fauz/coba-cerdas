import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CourseCard from "./components/CourseCard";
import { courses } from "./data/courses";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />

      <main className="px-4 sm:px-6 py-12 mx-auto max-w-7xl">
        <div className="mb-8 sm:mb-12 text-center sm:text-left">
          <h2 className="mb-3 text-2xl sm:text-3xl font-bold text-gray-900">
            Rekomendasi Materi
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Mulai perjalanan belajarmu dengan materi-materi yang kamu butuhkan
            saat ini
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
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

      <footer className="py-10 text-gray-400 bg-gray-900">
        <div className="px-4 sm:px-6 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 text-center sm:text-left">
            <div>
              <h3 className="mb-4 font-semibold text-white">Tentang</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    SkyCode Labs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Karir
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-white">Sumber Daya</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Dokumentasi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pusat Bantuan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Komunitas
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-white">Hukum</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Kebijakan Privasi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Ketentuan Layanan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Kebijakan Cookie
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-white">Sosial Media</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-6 mt-8 text-center border-t border-gray-800 text-sm">
            <p>
              &copy; {new Date().getFullYear()} CobaCerdas. Semua hak cipta
              dilindungi undang-undang.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
