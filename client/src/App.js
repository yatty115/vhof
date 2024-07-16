import "./App.css";
import { useEffect } from "react";
import { Route, useLocation } from "react-router-dom";
import { ROUTES } from "./utils/routes";
import Footer from "./components/footer";

const excludes = [
  "/email/microsoft",
  "/email/gmail",
  "/email/yahoo",
  "/email/aol",
];

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {ROUTES.map((route, idx) => (
        <Route
          key={idx}
          exact
          {...route}
        />
      ))}

      {!excludes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
