import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home.tsx";
import Blog from "./Pages/Blog.tsx";
import AddBlog from "./Pages/AddBlog.tsx";
import ProtectedRoutes from "./utils/ProtectedRoutes.tsx";
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import { createContext } from "react";
import About from "./Pages/About.tsx";
import Projects from "./Pages/Projects.tsx";
import Newsletters from "./Pages/Newsletters.tsx";

const firebaseConfig = {
  apiKey: "AIzaSyBMD2RjyM_tEaxEHo-3H3utsZ_r9QlBI00",
  authDomain: "redberry-blog-site.firebaseapp.com",
  projectId: "redberry-blog-site",
  storageBucket: "redberry-blog-site.appspot.com",
  messagingSenderId: "767542409699",
  appId: "1:767542409699:web:966d675708e3147cfb08d6",
  measurementId: "G-BHE3E9QQPE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export interface FirebaseContextProps {
  firebase: typeof firebase;
  auth: Auth;
  firestore: Firestore;
}

// Initialize Firebase services
const auth = getAuth(app);
const firestore = getFirestore(app);

export const Context = createContext<FirebaseContextProps | null>(null);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/blog" element={<Blog />} />
        <Route path="/addblog" element={<AddBlog />} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/newsletter" element={<Newsletters />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <Context.Provider value={{ firebase, auth, firestore }}>
    <RouterProvider router={router} />
  </Context.Provider>
);
