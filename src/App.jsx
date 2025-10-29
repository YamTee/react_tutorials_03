import "./App.css";

import ClickCounterTwo from "./components/ClickCounterTwo.jsx";
import HoverCounterTwo from "./components/HoverCounterTwo.jsx";
import User from "./components/User.jsx";

function App() {
  return (
    <>
      <ClickCounterTwo />
      <HoverCounterTwo />

      <User render={(isLoggedIn) => (isLoggedIn ? "YamTee" : "Guest")} />
    </>
  );
}

export default App;
