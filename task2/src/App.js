import NavBar from "./Components/navBar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import "./App.css";
import data from "./Components/data";

function App() {
  const cardArray = data.map((data) => {
    return (
      <Card
        img={`image${data.id}`}
        rating={data.stats.rating}
        reviewCount={data.stats.reviewCount}
        country={data.location}
        title={data.title}
        price={data.price}
      ></Card>
    );
  });

  return (
    <div className="container">
      <NavBar></NavBar>

      <Hero></Hero>
      <div className="Card">{cardArray}</div>
    </div>
  );
}

export default App;
