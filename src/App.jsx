import MainLayout from "./components/MainPage/MainPage";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import GettingStartedModal from "./pages/gettingStarted/gettingStarted";
import { useAuthContext } from "./contexts/authContext";

function App() {
  const { authUser } = useAuthContext();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/chat" /> : <Login />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to={"/chat"} /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/getting-started" /> : <Signup />}
        />
        <Route
          path="/chat"
          element={authUser ? <MainLayout /> : <Navigate to="/" />}
          element={authUser ? <Navigate to={"/chat"} /> : <Signup />}
        />
        {/* Not protected for testing */}
        <Route path="/chat" element={<MainLayout />} />
        <Route path="/getting-started" element={<GettingStartedModal />} />
        {/* <Route
          path="/chat"
          element={authUser ? <MainLayout /> : <Navigate to={"/"} />}
        /> */}
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;