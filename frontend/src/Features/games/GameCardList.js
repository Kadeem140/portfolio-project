import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { store } from '../../app/store';
import { gameReducer, videogamesFetch } from './videoGameSlice';
import apiKey from '../../utils/apiKey';
import GameCard from './GameCard';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectAllCartItems } from '../cart/cartSlice';
import "./gameCard.css"
import "../../Pages/pages.css";
let nextGameListUrl = null;

const url = `https://rawg.io/api/games?key=${apiKey}&dates=2022-01-01,2023-08-30&ordering=-added`

const GameCardList = (props) => {

    const cartItems = useSelector(selectAllCartItems);
    
    const [games, setGames] = useState([ ]);

    useEffect(() => {
        axios.get(url)
        .then(data => {
            // console.log(data, "API get call data")
            nextGameListUrl = data.next ? data.next : null;
            setGames(data.data.results)
        })
        .catch( err => {
            console.log(err)
        })
    }, [])

    return (
          <div className = "products">
                {games.map((game) => {
                    return (
                        <GameCard game={game} />
                    )
                })}
          </div>
        
    )
}

export default GameCardList