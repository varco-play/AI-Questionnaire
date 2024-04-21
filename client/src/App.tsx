import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Questionnaire } from "./utils/pages";
import Layout from "./Layout";
import ProgressBar from "./components/ProgressBar";
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
        <Route path="/bar" element={<ProgressBar />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
      </Routes>
    </Router>
  );
};

export default App;
