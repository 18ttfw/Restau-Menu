// App.jsx (Updated)
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import SpecialsMenu from './components/SpecialsMenu';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-gray-100">
        {/* Navigation */}
        <nav className="bg-white shadow-lg p-4 sticky top-0 z-10">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-amber-600 flex items-center">
              <span className="mr-2">🍴</span>Taste Haven
            </h1>
            <div className="space-x-6">
              <Link to="/" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">Main Menu</Link>
              <Link to="/specials" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">Specials</Link>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/specials" element={<SpecialsMenu />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-amber-600 text-white p-6 mt-12">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-sm">© 2025 Taste Haven. Crafted with ❤️ for food lovers.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;