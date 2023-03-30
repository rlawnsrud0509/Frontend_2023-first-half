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
        openSpots={data.openSpots}
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

//map 쓰는법
//map으로 컴포넌트 복사하기 태크블로그 ㄱㄱ
//props 일일이 다 넣기
//item = {item} 넣기 차이점
// {...item}넣기 차이점 태크
//{...item}이 제일 간단함ㅋ
