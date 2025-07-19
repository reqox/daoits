import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "@/app/Layout/Layout.tsx";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={"coop"} element={<CoopPage />} />

        <Route path={'services'} element={}
      </Route>
    </Routes>
  );
};

export default App;
