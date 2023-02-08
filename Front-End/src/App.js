import React from "react";
import { ReactLogin } from "./components/ReactLogin";
import { Route, Routes } from "react-router-dom";
import { Products } from "./Pages/Products";
import { useSelector } from "react-redux";
import { RouteAuthGuard } from "./components/AuthGuard";

function App() {
  const state = useSelector((state) => state.product);

  return (
    <>
      <Routes>
        <Route path="/" element={<ReactLogin />} />
        <Route
          path="/products"
          element={
            <RouteAuthGuard
              component={<Products products={state.products} />}
              redirect="/"
            />
          }
        />
        {/* <Route path="/topics" element={<Topics />} /> */}
      </Routes>
    </>
  );
}
export default App;
