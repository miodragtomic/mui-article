import { Routes, Route } from "react-router";
import {HeaderContentLayout } from "./components/HeaderContentLayout";
import { ArticlePage } from "./pages/ArticlePage";
import { ArticleListPage } from "./pages/ArticleListPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route 
        path="/" element={<HeaderContentLayout />} >
        <Route index element={<ArticleListPage />} />
        <Route path=":articleId" element={<ArticlePage /> }/>
      </Route>
    </Routes>
  )
}