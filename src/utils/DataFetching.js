import React, {useState, useEffect} from 'react'

import axios from 'axios'
import apiKey from './apiKey';

function DataFetching() {
    // const url = `https://rawg.io/api/games?key=${apiKey}&dates=2023-01-01, 2023-07-28&ordering=-added`
    const [games, setGames] = useState([]);
    useEffect(() => {
        axios
            .get(`https://rawg.io/api/games?key=${apiKey}&dates=2023-01-01, 2023-07-28&ordering=-added`)
        // .then(response => response.json())
            .then(response => {
                console.log(response, "API get call response")
            })
            .catch( err => {
                console.log(err)
            })
    }, []);
    // useEffect(() => {
    //     axios.get(`https://rawg.io/api/games?key=${apiKey}&dates=2023-01-01, 2023-07-28&ordering=-added`)
    //     // .then(response => response.json())
    //     .then(response => {
    //       console.log(response, "API get call response")
    //     })
    //     .catch( err => {
    //         console.log(err)
    //     })
    // }, []);

  return (
    <div>
        <ul>
            {
                games.map(game => (
                    <li key={game.id}>{game.name}</li>
                ))   
            }
        </ul>
    </div>
  )
}

export default DataFetching