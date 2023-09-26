import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Concept from './components/Concept';
import Login from './components/Login';
import ConceptCreate from './components/ConceptCreate';
import ConceptEdit from './components/ConceptEdit';
import { AuthProvider, RequireAuth } from 'react-auth-kit';

export function App() {
  return (
    <AuthProvider authType = {'cookie'}
                  authName={'_auth'}
                  cookieDomain={window.location.hostname}
                  cookieSecure={window.location.protocol === "https:"}>
      <Router>
          <Routes>
              <Route path={"/login"} element={<Login />} />
              <Route element={
                <RequireAuth loginPath={'/login'}>
                  <MainLayout />
                </RequireAuth>
                }>
                  <Route index element={<></>} />
                  <Route path={"/:concept"} element={<Concept />} />
                  <Route path={"/:concept/:id/edit"} element={<ConceptEdit />} />
                  <Route path={"/:concept/create"} element={<ConceptCreate />} />
              </Route>
          </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;