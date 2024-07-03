import './App.css'
import Footer from './footer/Footer'
import Categories from './main/Categories'
import FlashSale from './main/FlashSale'
import JustForYou from './main/JustForYou'
import MenuBar from './nav/MenuBar'
import NavBar from './nav/NavBar'

function App() {

  return (
    <>
    <NavBar/>
    <MenuBar/>
    <main>
    <Categories/>
    <FlashSale/>
    <JustForYou/>

    </main>
    <Footer/>
    </>
  )
}

export default App
