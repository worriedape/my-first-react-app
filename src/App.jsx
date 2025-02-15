/* import { useState } from "react"; */
import "./App.css";
import NavBar from "./NavBar.jsx";
import BusRouteCards from "./BusRouteCards.jsx";

function App() {
  /* const [count, setCount] = useState(0); */

  const menuItems = [
    { label: "Home", href: "/" },
    {
      label: "Products",
      href: "/products",
      /* subItems: [
        { label: "New", href: "/new" },
        { label: "Popular", href: "/popular" },
      ], */
    },
    { label: "About", href: "/about" },
  ];

  return (
    <>
      <NavBar placement="top" menuItems={menuItems} />
      <BusRouteCards />
    </>
  );
}

export default App;
