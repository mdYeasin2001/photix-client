import React, { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/common/Footer.js";
import Header from "./components/common/Header.js";
const Home = React.lazy(() => import("./pages/Home.js"));

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Suspense
        fallback={
          <div
            style={{ height: "70vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <Spinner variant="danger" animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        }
      >
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default AppRouter;
