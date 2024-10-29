import React from "react";
import { Header } from "./Components/Header";
import Test from "./Components/test";
import { HeroSection } from "./Components/HeroSection";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col overflow-hidden">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <Test />
      </main>
      <Footer />
    </div>
  );
}

export default App;
