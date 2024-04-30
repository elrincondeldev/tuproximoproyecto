import "./App.css";
import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <HomePage />
      <Analytics />
      <Toaster />
    </>
  );
}

export default App;
