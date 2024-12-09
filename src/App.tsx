import { About } from "./pages/aboutpage/About";
import { Home } from "./pages/homepage/Home";
import { Portfolio } from "./pages/portfoliopage/Portfolio";
import { Service } from "./pages/servicepage/Service";
import { Contacts } from "./pages/contactspage/Contacts";
import "./reset.css";

function App() {
  return (
    <div>
      <Home />
      <About />
      <Service />
      <Portfolio />
      <Contacts />
    </div>
  );
}

export default App;
