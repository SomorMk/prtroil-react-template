import About from "./assets/components/About/About"
import Banner from "./assets/components/Banner/Banner"
import Blog from "./assets/components/Blog/Blog"
import Cliants from "./assets/components/Cliants/Cliants"
import Contact from "./assets/components/Contact/Contact"
import Footer from "./assets/components/Footer/Footer"
import Header from "./assets/components/Header/Header"
import LearnMore from "./assets/components/LearnMore/LearnMore"
import Map from "./assets/components/Map/Map"
import Navbar from "./assets/components/Navbar/Navbar"
import Service from "./assets/components/Service/Service"


function App() {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <LearnMore></LearnMore>
      <Service></Service>
      <Cliants></Cliants>
      <Blog></Blog>
      <Map></Map>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
