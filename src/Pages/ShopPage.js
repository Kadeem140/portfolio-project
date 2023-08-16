import React, {useState, useEffect} from 'react';
import axios from "axios";
import DataFetching from '../utils/DataFetching';
import Header from '../Components/Header';
import DisplayCard from '../Features/display/DisplayCard';
import TitleForm from '../Features/forms/TitleForm';
import apiKey from '../utils/apiKey';

// const url = `https://rawg.io/api/games?key=${apiKey}&dates=2023-01-01, 2023-07-28&ordering=-added`
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

    

    const addItem = () => {
        console.log(gamesData,"games Array")
    }

    const [text, setText] = useState("")

    return (
        <div>
            <Header />
            <TitleForm />
            <p>SHOP PAGE</p>
            <DataFetching />
            

            

            {/* <input
                value={text}
                onChange={e => setText(e.target.value)} />
                <button
                    onClick={addItem}
                >
                    ADD
                </button> */}
        </div>
    )
}

export default ShopPage
   


