import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Videos from "./components/videos/index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"; 
import SearchPage from "./components/search/index";

function App() {
  return (
    <div className="App">
      <Router>
         {/* fixed header */}
           <Header />
        <Switch>
          <Route path="/search/:searchTerm">
          <div className="app_page">
            {/* sidebar */}
            <Sidebar />
            {/* recommended video */}
            <SearchPage />
          </div>
          </Route>
          <Route path="/">
          <div className="app_page">
            {/* sidebar */}
            <Sidebar />
            {/* recommended video */}
            <Videos />
          </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
