import Home from "./page/Home"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Faq from "./components/FaqSection"
import { Routes,Route } from "react-router-dom"

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/faq" element={<Faq />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App