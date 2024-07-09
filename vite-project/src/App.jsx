import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Onboarding from "./components/Onboarding/Onboarding";
import Listing from "./components/Listing/Listing";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/onboarding" element={<Onboarding />}></Route>
          <Route exact path="/listing" element={<Listing />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
