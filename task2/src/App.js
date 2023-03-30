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
        <Card
          img={"image1"}
          rating={5.0}
          reviewCount={6}
          country={"USA"}
          title={"Life Lessons with Katie Zaferes"}
          price={136}
        ></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}

export default App;
