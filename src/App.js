import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Home from "./Components/Home/Home";
import Create from "./Components/Create/Create";
import Details from "./Components/Details/Details";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route path="/create" component={Create} />
      <Route path="/home/:id" component={Details} />
    </BrowserRouter>
  );
}

export default App;
