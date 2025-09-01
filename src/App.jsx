import { Navbar } from "./components/Navbar,"
import { Main } from "./components/main"
import { Page2 } from "./components/page2"
import { Cards } from "./components/Cardsection"
import { Bar } from "./components/bar"
import { Footer } from "./components/footer"

export const App = () =>
{
  return(
    <>
      <Navbar />
      <Main />
      <Page2 />
      <Cards />
      <Bar />
      <Footer />
    </>
  )
}