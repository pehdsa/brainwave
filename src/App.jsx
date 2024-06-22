import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Cobaloration from './components/Cobaloration';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';


const App = () => {

  return (
    <>
        <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
            <Header />
            <Hero />
            <Benefits />
            <Cobaloration />
            <Services />
            <Pricing />
            <Roadmap />
            <Footer />
        </div>
    </>
  )
}

export default App
