import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { lazy, Suspense, useState } from "react";
import { Toaster } from 'react-hot-toast';
import {
  QueryClient,
  QueryClientProvider
} from 'react-query';
import { Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import HomeLoader from "./components/Loader/HomeLoader";
import { firebaseConfig } from "./firebaseConfig";
// const SignUp = lazy(() => import("./components/SignUp/SignUp"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Blog = lazy(() => import("./pages/Blog"));
const Reservation = lazy(() => import("./pages/Reservation"));
const Sign = lazy(() => import("./pages/Sign"));
const NotMatchPage = lazy(() => import("./pages/NotMatchPage"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Home = lazy(() => import("./pages/Home"));

function App() {
  initializeApp(firebaseConfig);
  const queryClient = new QueryClient()
  const [logged, setLogged] = useState()
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLogged(user.uid);
    }
  });
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Toaster />
        <Suspense fallback={<HomeLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard/:panel" element={logged ? <Dashboard /> : <Navigate to="/signin" />} />
            <Route path="/signin" element={<Sign />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotMatchPage />} />
          </Routes>
        </Suspense>
      </div>
    </QueryClientProvider>
  );
}

export default App;
