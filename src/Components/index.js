//this is for seeting spa Routes for the pages
import { Routes, Route } from "react-router-dom";
import MainComponent from "./MainComponent";

const LandingPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainComponent />} />
      </Routes>
    </div>
  );
};

export default LandingPage;
