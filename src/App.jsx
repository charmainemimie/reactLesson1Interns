import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Support from "./pages/Support";
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
