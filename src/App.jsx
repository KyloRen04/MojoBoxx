import { useState } from "react";
import "./App.css";
import TopNavbar from "./components/Navbar";
import { MenuList } from "./components/IconList";
import Menu from "./components/Menu";
import Forms from "./pages/Forms";
import Slider from "./components/Slider";
import Cards from "./components/Cards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <TopNavbar />
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {MenuList.map((menu) => {
            return <Menu key={menu.id} value={menu} />;
          })}
        </div>
        <br />
        <Forms />
        <br />
        <Slider />
        <br />
        <h2 className="text-center" style={{marginBottom: "25px"}}>Great Stays, Breathtaking Deals</h2>
        <Cards />
    </div>
  );
}

export default App;
