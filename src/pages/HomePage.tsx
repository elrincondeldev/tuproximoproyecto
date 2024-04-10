import NavBar from "../components/NavBar";
import LeftBar from "../components/LeftBar";
import ProjectsContainer from "../components/ProjectsContainer";
import RightBar from "../components/RightBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Frontend from "../components/categories/Frontend";
import Backend from "../components/categories/Backend";
import FullStack from "../components/categories/FullStack";

function HomePage() {
  return (
    <Router>
      <main className="">
        <NavBar />
        <section className="grid md:grid-cols-[0.5fr_1fr_0.5fr] max-w-[1400px] m-auto mt-5 gap-5">
          <LeftBar />
          <Routes>
            <Route path="/" element={<ProjectsContainer />} />
            <Route path="/frontend" element={<Frontend />} />
            <Route path="/backend" element={<Backend />} />
            <Route path="/fullstack" element={<FullStack />} />
          </Routes>
          <RightBar />
        </section>
      </main>
    </Router>
  );
}

export default HomePage;
