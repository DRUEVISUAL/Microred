import React, { useState } from "react";
import Nav from "../components/Nav/Nav";
import Menu from "../components/Nav/Menu";

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
    <div className="h-screen w-screen bg-black">
      <Nav menuToggle={menuToggle} menuState={menuState} />
      <Menu menuState={menuState} />
    </div>
  );
};

export default App;
