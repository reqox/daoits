import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "@/app/Layout/Layout.tsx";
import { CoopPage, HomePage } from "@/pages";
import { useTheme } from "@/shared/hooks";
import "./App.scss";
import "@/shared/styles/main.scss";

const App = () => {
  useTheme();
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={"coop"} element={<CoopPage />} />

        <Route path={"*"} element={<Navigate to={"/"} replace={true} />} />
      </Route>
    </Routes>
  );
};

export default App;
