import './App.css'
import Category from './components/Category'
import Food from './components/Food'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div id="navbar">
        <Navbar />
      </div>
      <div id="home">
        <Hero />
      </div>
      <div id="best-sellers">
        <Category />
      </div>
      <div id="menu">
        <Food />
      </div>
      <div id="footer">
        <Footer/>
      </div>
    </>
  )
}

export default App
