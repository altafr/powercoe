import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { GovernancePage } from './pages/GovernancePage';
import { SupportPage } from './pages/SupportPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/governance" element={<GovernancePage />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}