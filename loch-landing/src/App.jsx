import { useState } from "react";
import Landing from "./pages/LandingPAge/Landing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Landing />
    </>
  );
}

export default App;
