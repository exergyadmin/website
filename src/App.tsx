import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Learn from './pages/Learn'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Calculators from './pages/Calculators'
import Education from './pages/Education'
import Forum from './pages/Forum'
import FAQ from './pages/FAQ'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/calculators" element={<Calculators />} />
            <Route path="/education" element={<Education />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App