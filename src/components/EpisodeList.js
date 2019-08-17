import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard"

export default function LocationsList() {
    const [episodes, setEpisodes] = useState([])

    useEffect(() => {
        axios 
          .get("https://rickandmortyapi.com/api/episode/")
          .then(res => {
            console.log(res.data.results)
            setEpisodes(res.data.results)
          })
          .catch(err => 
            console.log(err)
          )
      }, []);

      return (
        <section className="character-list grid-view">
        {episodes.map(episode => (
            <div key={episode.id}>
                <EpisodeCard 
                name={episode.name}
                date={episode.air_date}
                characters={episode.characters.length}
                episode={episode.episode}
                />
            </div>
        ))}
        </section>
      )
}