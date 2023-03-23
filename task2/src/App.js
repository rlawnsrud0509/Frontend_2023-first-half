import NavBar from "./Components/navBar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import "./App.css";

function App() {
  return (
    <div className="container">
      <NavBar></NavBar>
      <Hero></Hero>
      <div className="Card">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}

export default App;
