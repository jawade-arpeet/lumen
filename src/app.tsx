import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home.tsx";
import SignIn from "./pages/sign-in.tsx";
import AuthLayout from "./layouts/auth.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
