import { ConfigProvider } from 'antd'
import ruRU from 'antd/locale/ru_RU'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Roadmap from './components/Roadmap'
import Values from './components/Values'
import CTA from './components/CTA'
import CaseStudy from './components/CaseStudy'


function App() {
  return (
    <ConfigProvider locale={ruRU}>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <HowItWorks />
          <Features />
          <CaseStudy />
          <Gallery />
          <Roadmap />
          <Values />
          <CTA />
        </main>
        <Footer />
      </div>
    </ConfigProvider>
  )
}

export default App