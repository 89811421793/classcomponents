import { Home } from "./pages/homepage/Home";
import { About } from "./pages/aboutpage/About";
import { Contacts } from "./pages/contactspage/Contacts";
import { Portfolio } from "./pages/portfoliopage/Portfolio";
import { Service } from "./pages/servicepage/Service";
import { Switch, Route } from "react-router-dom";
import "./reset.css";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/service" component={Service} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contacts" component={Contacts} />
    </Switch>
  );
}

export default App;
