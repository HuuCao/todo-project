import { Route, Routes } from "react-router-dom";
import { ReactElement } from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Add from "./pages/Add";
import Edit from "./pages/Edit";

const AppRouter = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<Add />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
