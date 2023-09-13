// https://rawg.io/api/games/lists/popular?key=ae077b18b59540b0ab7aafab14c8e80b&page_size=10
import React, {useState, useEffect} from 'react';
import axios from 'axios'

function FetchPopularGames () {

    const [popularGames, setPopularGames] = useState([ ]);
   
    useEffect(() => {
        axios.get(`https://rawg.io/api/games/lists/popular?key=ae077b18b59540b0ab7aafab14c8e80b&page_size=10`)
        .then(data => {
            console.log(data, "API get call data")
            setPopularGames(data.data.results)
            // popularGames.push(data.data.results)
            // setGames(response.data.results[1])
            console.log(popularGames, "Array after setPopularGames is called, before mapping")
        })
        .catch( err => {
            console.log(err)
        })
    }, [])

    return (
        <>
            <p>FetchPopularGamesTest</p>
        </>
    )
}

export default FetchPopularGames