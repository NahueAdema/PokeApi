import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import TeamPage from "./pages/TeamPage";
import Home from "./pages/Home";
import TriviaPage from "./pages/TriviaPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TeamPage" element={<TeamPage />} />
        <Route path="/TriviaPage" element={<TriviaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
