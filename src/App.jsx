import React from "react";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import NavBar from "./components/layout/NavBar";
import HomePage from "./pages/HomePage";
import FoodDetailsPage from "./pages/FoodDetailsPage";
import OrdersPage from "./pages/OrdersPage";
import ExplorePage from "./pages/ExplorePage";
import OrderSummary from "./pages/OrderSummary";
import Footer from "./components/layout/Footer";
import DeliveryDetails from "./pages/DeliveryDetails";
import PaymentPage from "./pages/PaymentPage";
import LoaderPage from "./pages/LoaderPage";
import ConfirmationPage from "./pages/ConfirmationPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/fooddetails" element={<FoodDetailsPage />} />
      <Route path="/cart" element={<OrdersPage />} />
      <Route path="/summary" element={<OrderSummary />} />
      <Route path="/deliverydetails" element = {<DeliveryDetails />} />
      <Route path="/payment" element = {<PaymentPage />} />
      <Route path="/loading" element = {<LoaderPage />} />
      <Route path="/confirmation" element = {<ConfirmationPage />} />
    </Routes>
  );
}

export default App;
