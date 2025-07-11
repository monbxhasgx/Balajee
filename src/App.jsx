import React from 'react'
import Footer from './layout /Footer'
import ProductPage from './Pages/ProductPage'
import About from './layout /About'
import Header from './layout /Header'
import Hero from './layout /Hero'

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <ProductPage/>
      <Footer/>
    </div>
  )
}

export default App
