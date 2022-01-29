import { initializeApp } from "firebase/app";
import React, { createContext, lazy, Suspense, useState } from "react";
import { Toaster } from 'react-hot-toast';
// import {
//   QueryClient,
//   QueryClientProvider
// } from 'react-query';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Checkout from "./components/Dashboard/checkout/Checkout";
import HomeLoader from "./components/Loader/HomeLoader";
import ProtectedRoutes from "./components/PrivateOutlet/PrivateOutlet";
import { firebaseConfig } from "./firebaseConfig";
// const SignUp = lazy(() => import("./components/SignUp/SignUp"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Blog = lazy(() => import("./pages/Blog"));
const Reservation = lazy(() => import("./pages/Reservation"));
const Sign = lazy(() => import("./pages/Sign"));
const NotMatchPage = lazy(() => import("./pages/NotMatchPage"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Home = lazy(() => import("./pages/Home"));

export const OrderContext = createContext({});

function App() {
  initializeApp(firebaseConfig);
  // const queryClient = new QueryClient();
  const [orderInfo, setOrderInfo] = useState({});
  const [foodInfo, setFoodInfo] = useState({}) 
  return (
    <OrderContext.Provider value={{orderInfo, setOrderInfo, foodInfo, setFoodInfo}}>
      <div>
        <Toaster />
        <Suspense fallback={<HomeLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/dashboard/:panel" element={<Dashboard />} />
            </Route>
            <Route element={<ProtectedRoutes />}>
              <Route path="/checkout" element={<Checkout />} />
            </Route>
            <Route path="/signin" element={<Sign />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotMatchPage />} />
          </Routes>
        </Suspense>
      </div>
    </OrderContext.Provider>
  );
}

export default App;
