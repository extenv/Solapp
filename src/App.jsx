import { Router, Route } from "@solidjs/router";

//Global Page 
import NotFound from "./pages/NotFound";
import Home from "./Home";

//Auth Page
import Login from "./auth/Login";
import Register from "./auth/Register";

//Main App
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Route path="*404" component={NotFound} />
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  );
}

export default App;
