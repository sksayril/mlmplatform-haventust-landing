import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Plan from './pages/Plan';
import HowItWorks from './pages/HowItWorks';
import Benefits from './pages/Benefits';
import Faqs from './pages/Faqs';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="plan" element={<Plan />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="benefits" element={<Benefits />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}
