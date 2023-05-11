import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <div className="container">
      <Navbar />
      <Main
        darkmode={darkMode}
        toggleDarkmode={() => {
          setDarkMode(!darkMode);
        }}
      />
    </div>
  );
}
