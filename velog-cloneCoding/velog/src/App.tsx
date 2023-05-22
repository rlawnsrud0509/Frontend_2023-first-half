import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as P from "./pages/index";
import * as C from "./components/index";

function App() {
  return (
    <BrowserRouter>
      <C.Header />
      <Routes>
        <Route path="/" element={<P.MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
