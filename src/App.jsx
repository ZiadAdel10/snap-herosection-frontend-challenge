import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  const navTitles = ["Features", "Company", "Careers", "About"];

  return (
    <div>
      <Navbar navigation={navTitles} />
      <Hero />
    </div>
  );
}

export default App;
