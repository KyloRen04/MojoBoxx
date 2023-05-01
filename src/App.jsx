import "./App.css";
import TopNavbar from "./components/Navbar";
import { MenuList } from "./components/IconList";
import Menu from "./components/Menu";
import Forms from "./pages/Forms";
import Slider from "./components/Slider";
import Cards from "./components/Cards";

function App() {
  return (
    <div style={{margin: "10px"}}>
      <TopNavbar />
      <div className="categories-menu">
        {MenuList.map((menu) => {
          return <Menu key={menu.id} value={menu} />;
        })}
      </div>
      <br />
      <Forms />
      <br />
      <Slider />
      <br />
      <h3 className="text-center" style={{ marginBottom: "25px" }}>
        Great Stays, Breathtaking Deals
      </h3>
      <Cards />
    </div>
  );
}

export default App;
