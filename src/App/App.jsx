import React, { useState } from "react";
import Nav from "../components/Nav/Nav";

const App = () => {
  const [menuState, setMenuState] = useState(false);
  function menuToggle() {
    if (!menuState) {
      setMenuState(true);
    } else {
      setMenuState(false);
    }
  }

  return (
    <div className="h-screen w-screen bg-black ">
      <Nav menuToggle={menuToggle} menuState={menuState} />
    </div>
  );
};

export default App;
