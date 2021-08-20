import React, { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/common/Footer.js";
import PrivateRouter from "./PrivateRouter.js";
const HomePage = React.lazy(() => import("./pages/HomePage"));
const MyOrderPage = React.lazy(() => import("./pages/MyOrderPage"));
const ServicesPage = React.lazy(() => import("./pages/ServicesPage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const SignInPage = React.lazy(() => import("./pages/SignInPage"));
const SignUpPage = React.lazy(() => import("./pages/SignUpPage"));
const ServicePage = React.lazy(() => import("./pages/ServicePage"));
const ManageOrdersPage = React.lazy(() => import("./pages/ManageOrdersPage"));
const ManageServicesPage = React.lazy(() =>
  import("./pages/ManageServicesPage")
);
const CheckoutPage = React.lazy(() => import("./pages/CheckoutPage"));
const AddServicePage = React.lazy(() => import("./pages/AddServicePage"));

const AppRouter = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <div
            style={{ height: "100vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <Spinner variant="danger" animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        }
      >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/services" component={ServicesPage} />
          <Route path="/services/:id" component={ServicePage} />
          <Route path="/about" component={AboutPage} />
          <PrivateRouter path="/dashboard/my-orders">
            <MyOrderPage />
          </PrivateRouter>
          <PrivateRouter path="/dashboard/manage-orders">
            <ManageOrdersPage />
          </PrivateRouter>
          <PrivateRouter path="/dashboard/manage-services">
            <ManageServicesPage />
          </PrivateRouter>
          <PrivateRouter path="/dashboard/add-service">
            <AddServicePage />
          </PrivateRouter>
          <PrivateRouter path="/checkout/service/:id">
            <CheckoutPage />
          </PrivateRouter>
          <Route path="/login" component={SignInPage} />
          <Route path="/register" component={SignUpPage} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default AppRouter;
