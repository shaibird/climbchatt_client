import { Route, Routes } from "react-router-dom"
import { Authorized } from "./views/Authorized"
import { ApplicationViews } from "./views/ApplicationViews"
import { Register } from "./components/auth/Register"
import { Login } from "./components/auth/Login"
import { NavBar } from "./components/nav/NavBar"
import { Home } from "./components/home/Home"
import { Explore } from "./components/explore/Explore"



export const ClimbChatt = () => {


	return (
    <Routes>
      <Route path="/explore" element={<Explore />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home /> } />
      <Route
        path="*"
        element={
          <Authorized>
            <>
              <ApplicationViews />
            </>
          </Authorized>
        }
      />
    </Routes>
  );
}

