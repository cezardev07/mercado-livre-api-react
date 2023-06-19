import Header from "./components/header/header";
import Main from "./components/main/menu";
import Footer from "./components/footer/footer";

import { Provider } from "./context/filterContext";

const App = () => {
  return (
    <Provider>
      <Header/>
      <Main/>
      <Footer/>
    </Provider>
  )
}

export default App
