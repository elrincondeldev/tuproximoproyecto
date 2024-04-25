import NavBar from "../components/NavBar";
import LeftBar from "../components/LeftBar";
import ProjectsContainer from "../components/ProjectsContainer";
import RightBar from "../components/RightBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Frontend from "../components/categories/Frontend";
import Backend from "../components/categories/Backend";
import FullStack from "../components/categories/FullStack";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <Router>
      <main className="min-h-screen">
        <NavBar />
        <section className="px-5 grid md:grid-cols-[0.5fr_1fr_0.5fr] max-w-[1600px] m-auto mt-5 gap-5">
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
      <Footer />
    </Router>
  );
}

export default HomePage;
