import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Card from "./components/Cards/Card";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import data from "./data.json";

function App() {
  // State to track counts for each card by ID
  const [itemCounts, setItemCounts] = useState(
    data.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {})
  );

  const increment = (id) => {
    setItemCounts((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const decrement = (id) => {
    setItemCounts((prev) => {
      if (prev[id] > 0) {
        return { ...prev, [id]: prev[id] - 1 };
      }
      return prev;
    });
  };


  // Calculate total cart count
  const cartCount = Object.values(itemCounts).reduce((sum, count) => sum + count, 0);
  
  return (
    <div className="App">
      <div className="container fl-row">
        <CssBaseline />
        <div className="desserts">
          <h1>Desserts</h1>
          <div className="cards-row fl-row">
            {data.map((item) => (
              <Card
                key={item.id}
                item={item}
                count={itemCounts[item.id]}
                increment={() => increment(item.id)}
                decrement={() => decrement(item.id)}
              />
            ))}
          </div>
        </div>
        <div className="cart">
          <Cart cartCount={cartCount} />
        </div>
      </div>
    </div>
  );
}

export default App;

