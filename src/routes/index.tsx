import { Routes, Route } from "react-router-dom";
import { CharPage, HomePage } from "@/pages";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:id" element={<CharPage />} />
    </Routes>
  );
};
