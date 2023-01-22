import "./App.scss";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import { PageCategory } from "./pages/PageCategory";
import { PageRandomOrder } from "./pages/PageRandomOrder";
function App() {
  return (
    <div className="App">
      <h1>FlashCards</h1>
      <nav>
        <NavLink to="/randomOrder">Random Order</NavLink>
        <NavLink to="/category">By Category</NavLink>
      </nav>
      <Routes>
        <Route path="randomOrder" element={<PageRandomOrder />} />
        <Route path="category" element={<PageCategory />} />
        <Route path="/" element={<Navigate to="/randomOrder" replace />} />
      </Routes>
    </div>
  );
}

export default App;
