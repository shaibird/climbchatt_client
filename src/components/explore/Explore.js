import { Map } from "./Map"
import "./Explore.css"

export const Explore = () => {


  return (
    <div className="explore-container">
    <div id="map">
      <div className="map-container">
        <Map/>
      </div>
    </div>
    </div>
  )
}