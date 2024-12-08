import { About } from "./pages/aboutpage/About";
import { Home } from "./pages/homepage/Home";
import { Portfolio } from "./pages/portfoliopage/Portfolio";
import { Service } from "./pages/servicepage/Service";

import "./reset.css";



function App() {
  return (
    <div>
<Home/>
<Service/>
<Portfolio/>
<About/>
    </div>
  );
}

export default App;


