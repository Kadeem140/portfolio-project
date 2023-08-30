import React, {useState, useEffect} from 'react';
import axios from 'axios'
import apiKey from './apiKey';
import DisplayCard from '../Features/display/DisplayCard';
import DisplayList from '../Features/display/DisplayList';
import './DataFetching.css';
let nextGameListUrl = null;


const url = `https://rawg.io/api/games?key=${apiKey}&dates=2023-01-01,2023-08-24&ordering=-added`

function DataFetching() {

    const [games, setGames] = useState([ ]);
    // console.log(games, "First games render")
    
    useEffect(() => {
        axios.get(url)
        .then(data => {
            console.log(data, "API get call data")
            nextGameListUrl = data.next ? data.next : null;
            setGames(data.data.results)
            // games.push(data.data.results)
            // setGames(response.data.results[1])
            // console.log(games, "Array after setGames is called, before mapping")
        })
        .catch( err => {
            console.log(err)
        })
    }, [])

  return (
    <div>
         <ul className='list'>
            {
                games.map((game) => {
                   return (
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <DisplayList game={game} />
                    </div>
                   )     
                })
            }
        </ul> 
        <p>DataFetching Test</p>
        
    </div>
  )
}

export default DataFetching