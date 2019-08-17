import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard"

export default function LocationsList() {
    const [locations, setLocations] = useState([])

    useEffect(() => {
        axios 
          .get("https://rickandmortyapi.com/api/location/")
          .then(res => {
            console.log(res.data.results)
            setLocations(res.data.results)
          })
          .catch(err => 
            console.log(err)
          )
      }, []);

      return (
        <section className="character-list grid-view">
        {locations.map(location => (
            <div key={location.id}>
                <LocationCard 
                name={location.name}
                type={location.type}
                dimension={location.dimension}
                residents={location.residents.length}
                />
            </div>
        ))}
        </section>
      )
}
