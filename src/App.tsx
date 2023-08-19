import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Concept from './components/Concept';

export function App() {
  return (
    <Router>
        <Routes>
            <Route element={<MainLayout />}>
              <Route index element={<></>} />
              <Route path={"/:concept"} element={<Concept />} />
              <Route path={"/:concept/edit"} element={<div>EDIT</div>} />
              <Route path={"/:concept/create"} element={<div>CREATE</div>} />
            </Route>
        </Routes>
    </Router>
  );
};

export default App;