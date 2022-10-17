import { useState, useEffect } from "react"
import "./Locations.css"


export const Locations = () => {
    const [locations, setLocations] = useState([])

    useEffect(() => {

        fetch('http://localhost:8088/locations')
            .then(res => res.json())
            .then((data) => {
                setLocations(data)
            })
    }, [])

    return (<>
        <h1>Store Locations</h1>
        <div className="location-container">
            {
                locations.map((location) => {
                    return (
                        <div key={location.id} className={location.id}>{location.address} - {location.sqFt} square feet</div>
                    )
                })
            }
        </div>
    </>)
}