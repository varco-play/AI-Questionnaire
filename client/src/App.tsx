import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, QuizPage } from "./utils/pages";
import Layout from "./Layout";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route path="/questionnaire" element={<QuizPage />} />
      </Routes>
    </Router>
  );
};

export default App;
