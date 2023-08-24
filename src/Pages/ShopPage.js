import React, {useState, useEffect} from 'react';
import axios from "axios";
import DataFetching from '../utils/DataFetching';
import FetchPopularGames from '../utils/FetchPopularGames';
import Header from '../Components/Header';
import DisplayCard from '../Features/display/DisplayCard';
import TitleForm from '../Features/forms/TitleForm';
import GenreForm from '../Features/forms/GenreForm';

import apiKey from '../utils/apiKey';
import './index.css';
import "."



const url = `https://rawg.io/api/games?key=${apiKey}&dates=2023-01-01, 2023-07-28&ordering=-added`

function ShopPage() {
    const [gamesData, setGamesData] = useState([ ]);

    useEffect(() => {
        axios.get(url)
        .then(response => {
            console.log(response, "res")
            setGamesData(response.data.results)
            console.log(gamesData, "Games data Array")
        })
        .catch(err => console.log(err))
    }, [])

    const [text, setText] = useState("")

    return (
        <div className='parent'>
            <div>
                <Header />
            </div>
                <h1>SHOP PAGE</h1>
            <div className='forms'>
                <TitleForm />
                <GenreForm />
            </div>
                <FetchPopularGames />
                <DataFetching />
        </div>
    )
}

export default ShopPage
   


