import { createRoot } from "react-dom/client"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { NavBar } from "./components/nav/NavBar"
import { ClimbChatt } from "./ClimbChatt"

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <BrowserRouter>
      <div>
        <NavBar />
        <ClimbChatt />
      </div>
    </BrowserRouter>
)
