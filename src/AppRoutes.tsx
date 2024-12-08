import { Routes, Route } from "react-router";
import {HeaderContentLayout } from "./components/HeaderContentLayout";
import { ProductPage } from "./pages/ArticlePage";
import { ProductListPage } from "./pages/ArticleListPage";

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