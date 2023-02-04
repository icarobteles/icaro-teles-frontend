import { AppRoutes } from "@/routes";

export const App: React.FC = () => {
  return (
    <div className="app">
      <h1 className="app--title">Impact Challenge</h1>
      <AppRoutes />
    </div>
  );
};
