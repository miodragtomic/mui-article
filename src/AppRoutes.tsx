import { Routes, Route } from "react-router";
import {HeaderContentLayout } from "./components/HeaderContentLayout";
import { ProductPage } from "./pages/ProductPage";
import { ProductListPage } from "./pages/ProductListPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route 
        path="/" element={<HeaderContentLayout />} >
        <Route index element={<ProductListPage />} />
        <Route path=":productId" element={<ProductPage /> }/>
      </Route>
    </Routes>
  )
}