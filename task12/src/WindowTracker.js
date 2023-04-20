import { useEffect, useState } from "react";

export default function WindowTracker() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function watchWidth() {
      console.log("Setting up...");
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", () => {
      watchWidth();
    });

    return function () {
      console.log("Cleaning up...");
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  return <h1>Window width: {width}</h1>;
}
