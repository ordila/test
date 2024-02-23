import { Navigate, Route, Routes } from "react-router-dom";

import { Layout } from "./components";

import { Home, Tweets } from "./pages";

import { ROUTES } from "./constants";

const { HOME, TWEETS } = ROUTES;

function App() {
  return (
    <>
      <Routes>
        <Route path={HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={TWEETS} element={<Tweets />} />
        </Route>
        <Route path="*" element={<Navigate to={HOME} />} />
      </Routes>
    </>
  );
}

export default App;
