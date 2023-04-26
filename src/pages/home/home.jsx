import { useMemo } from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import General from "../../layout/general/general"
import "./home.css"

const Home = () => {
    const { isLoaded } = useLoadScript({googleMapsApiKey : import.meta.env.VITE_GOOGLE_MAPS_API_KEY })    
    const center = useMemo(() => ({lat: -34.397, lng: 150.644}), [])
    return (
        <General>
            {!isLoaded ? <h1>Loading...</h1> : <GoogleMap 
            zoom={10}
            center={center}
            mapContainerClassName="map-container"
            >
                <Marker position={center}/>
            </GoogleMap>}
        </General>
    )
}

export default Home
