import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div>
    <Navbar/>
    <div style={{ paddingTop: "70px"}}></div>
    <Hero/>
    <Gallery/>
    <About/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
