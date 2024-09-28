import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import TeamPage from "./pages/TeamPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TeamPage />} />
      </Routes>
    </Router>
  );
}

export default App;
