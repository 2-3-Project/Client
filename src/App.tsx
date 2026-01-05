import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StartPage from './component/StartPage';
import LoginPage from './component/LoginPage';
import PrologPage from './pages/prologPage';
import RankPage from "./component/RankPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/prolog" element={<PrologPage />} />
        <Route path="/rank" element={<RankPage />} />
      </Routes>
    </Router>
  )
}

export default App